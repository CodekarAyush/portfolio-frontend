import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import type { Theme } from '../../hooks/useTheme';

interface ThreeBackgroundProps {
  theme: Theme;
}

const PALETTE = {
  dark: { points: 0x2dd4bf, wire: 0x38bdf8, pointsOpacity: 0.55, wireOpacity: 0.07 },
  light: { points: 0x0f766e, wire: 0x0369a1, pointsOpacity: 0.3, wireOpacity: 0.06 },
} as const;

/**
 * Subtle full-page particle field. Drifts slowly, parallaxes with the cursor
 * and rotates/translates smoothly (lerped) as the page scrolls.
 */
export default function ThreeBackground({ theme }: ThreeBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const materialsRef = useRef<{
    points: THREE.PointsMaterial;
    wire: THREE.LineBasicMaterial;
  } | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(window.innerWidth, window.innerHeight);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      60,
      window.innerWidth / window.innerHeight,
      0.1,
      120
    );
    camera.position.z = 11;

    // Particle field
    const count = 850;
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 40;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 26;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 16;
    }
    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    const pointsMaterial = new THREE.PointsMaterial({
      size: 0.045,
      transparent: true,
      depthWrite: false,
      sizeAttenuation: true,
    });
    const points = new THREE.Points(geometry, pointsMaterial);
    scene.add(points);

    // A faint wireframe icosahedron floating behind the hero
    const wireMaterial = new THREE.LineBasicMaterial({ transparent: true });
    const wire = new THREE.LineSegments(
      new THREE.WireframeGeometry(new THREE.IcosahedronGeometry(5.5, 1)),
      wireMaterial
    );
    wire.position.set(8, 1.5, -6);
    scene.add(wire);

    materialsRef.current = { points: pointsMaterial, wire: wireMaterial };
    const applyPalette = (t: Theme) => {
      const p = PALETTE[t];
      pointsMaterial.color.setHex(p.points);
      pointsMaterial.opacity = p.pointsOpacity;
      wireMaterial.color.setHex(p.wire);
      wireMaterial.opacity = p.wireOpacity;
    };
    applyPalette((document.documentElement.dataset.theme as Theme) ?? 'light');

    // Smoothed (lerped) scroll + pointer targets
    let scrollTarget = 0;
    let scrollSmooth = 0;
    let mouseX = 0;
    let mouseY = 0;
    let mouseSmoothX = 0;
    let mouseSmoothY = 0;

    const onScroll = () => {
      const max = Math.max(document.documentElement.scrollHeight - window.innerHeight, 1);
      scrollTarget = window.scrollY / max;
    };
    const onPointerMove = (e: PointerEvent) => {
      mouseX = (e.clientX / window.innerWidth) * 2 - 1;
      mouseY = (e.clientY / window.innerHeight) * 2 - 1;
    };
    const onResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
      if (reducedMotion) renderer.render(scene, camera);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('pointermove', onPointerMove, { passive: true });
    window.addEventListener('resize', onResize);
    onScroll();

    let frame = 0;
    const clock = new THREE.Clock();
    const animate = () => {
      frame = requestAnimationFrame(animate);
      const t = clock.getElapsedTime();

      scrollSmooth += (scrollTarget - scrollSmooth) * 0.045;
      mouseSmoothX += (mouseX - mouseSmoothX) * 0.03;
      mouseSmoothY += (mouseY - mouseSmoothY) * 0.03;

      // Slow idle drift + scroll-driven rotation and camera travel
      points.rotation.y = t * 0.018 + scrollSmooth * 1.4 + mouseSmoothX * 0.05;
      points.rotation.x = scrollSmooth * 0.5 + mouseSmoothY * 0.04;
      camera.position.y = -scrollSmooth * 3.2;
      camera.position.x = mouseSmoothX * 0.35;

      wire.rotation.y = t * 0.05 + scrollSmooth * 2.2;
      wire.rotation.x = t * 0.02 + scrollSmooth * 0.8;
      wire.position.y = 1.5 - scrollSmooth * 6;

      renderer.render(scene, camera);
    };

    if (reducedMotion) {
      renderer.render(scene, camera);
    } else {
      animate();
    }

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('pointermove', onPointerMove);
      window.removeEventListener('resize', onResize);
      geometry.dispose();
      pointsMaterial.dispose();
      wire.geometry.dispose();
      wireMaterial.dispose();
      renderer.dispose();
      materialsRef.current = null;
    };
  }, []);

  // Re-tint on theme change without rebuilding the scene.
  useEffect(() => {
    const mats = materialsRef.current;
    if (!mats) return;
    const p = PALETTE[theme];
    mats.points.color.setHex(p.points);
    mats.points.opacity = p.pointsOpacity;
    mats.wire.color.setHex(p.wire);
    mats.wire.opacity = p.wireOpacity;
  }, [theme]);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10 h-full w-full"
    />
  );
}
