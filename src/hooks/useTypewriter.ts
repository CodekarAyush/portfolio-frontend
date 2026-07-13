import { useEffect, useState } from 'react';

/** Cycles through phrases with a typewriter effect. */
export function useTypewriter(phrases: readonly string[], typeMs = 55, holdMs = 1800) {
  const [text, setText] = useState('');
  const [index, setIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setText(phrases[0]);
      return;
    }
    const current = phrases[index % phrases.length];
    let delay = deleting ? typeMs / 2 : typeMs;
    if (!deleting && text === current) delay = holdMs;

    const timer = setTimeout(() => {
      if (!deleting && text === current) {
        setDeleting(true);
      } else if (deleting && text === '') {
        setDeleting(false);
        setIndex((i) => (i + 1) % phrases.length);
      } else {
        setText(current.slice(0, text.length + (deleting ? -1 : 1)));
      }
    }, delay);
    return () => clearTimeout(timer);
  }, [text, deleting, index, phrases, typeMs, holdMs]);

  return text;
}
