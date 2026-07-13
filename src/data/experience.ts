export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  blurb: string;
  points: string[];
  stack: string[];
}

export const experience: ExperienceItem[] = [
  {
    company: 'LEI International Pvt. Ltd.',
    role: 'Software Developer',
    period: 'Aug 2025 – Present',
    blurb:
      'Regtech product — MIS platform for ISO compliance workflows, certificate issuance and multi-role business operations.',
    points: [
      'Architected a permission-based role engine supporting 14 distinct user roles with dynamic, Super Admin-controlled role and permission management.',
      'Migrated the legacy codebase to an NX Monorepo (NestJS preset), enabling shared library reuse across 4+ modules and cutting incremental build times.',
      'Built a centralised, event-driven Audit Logging Service that snapshots entities pre-mutation — a full immutable change trail for compliance teams.',
      'Delivered the end-to-end BA Onboarding pipeline with multi-stage approvals and certificate revision workflows.',
    ],
    stack: ['Node.js', 'NestJS', 'Next.js', 'MongoDB', 'NX Monorepo', 'Event-Driven'],
  },
  {
    company: 'Esoft Technologies (Elynker)',
    role: 'Backend Developer',
    period: 'Sep 2024 – Aug 2025',
    blurb:
      'Hyperlocal service marketplace connecting local providers with customers for digital storefronts and service management.',
    points: [
      'Designed an async bulk-report pipeline (Request → BullMQ Worker → Excel → S3 → Signed URL), offloading heavy compute from the main thread.',
      'Integrated Apache Solr for full-text product/service search, replacing slow DB-level queries and cutting search latency at scale.',
      'Profiled and indexed high-read PostgreSQL tables, restoring read performance within SLA without schema changes.',
      'Owned 100+ REST API endpoints end-to-end; won Employee of the Quarter and a Star Performer of the Year nomination.',
    ],
    stack: ['NestJS', 'PostgreSQL', 'Sequelize', 'BullMQ', 'Redis', 'Apache Solr', 'Worker Threads'],
  },
  {
    company: 'Jamtech Technologies Pvt. Ltd.',
    role: 'Backend Developer',
    period: 'Aug 2023 – Aug 2024',
    blurb:
      'Sole backend engineer on two concurrent products: Vex Fitness (real-time wearable analytics) and Rigmeds (healthcare e-commerce).',
    points: [
      'Architected the Vex Fitness backend from scratch; synced live heartbeat and SpO₂ data from Apple Watch via Terra API to dashboards with sub-200ms latency.',
      'Built the Rigmeds e-commerce backend with Razorpay and webhook-based payment monitoring for reliable order state transitions.',
      'Owned API design, business logic, QA and deployment within a 3-month delivery window per product.',
    ],
    stack: ['NestJS', 'Express.js', 'MongoDB', 'PostgreSQL', 'Prisma', 'Terra API', 'Razorpay'],
  },
  {
    company: 'Technophilic Pvt. Ltd.',
    role: 'Software Developer (Intern → Full-time)',
    period: 'Aug 2022 – Aug 2023',
    blurb:
      'On-demand car service platform — end-to-end booking and service management.',
    points: [
      'Built the full-stack booking application: Next.js/React + Redux Toolkit frontend, Express + TypeScript + PostgreSQL backend.',
      'Implemented access/refresh token auth, S3 uploads with IAM policies, Sharp image compression, Winston logging and EC2 deployment.',
      'Promoted from React intern to full-time MERN developer within months on consistent production delivery.',
    ],
    stack: ['TypeScript', 'Express.js', 'Next.js', 'Redux Toolkit', 'PostgreSQL', 'AWS S3/EC2'],
  },
];
