export interface Project {
  title: string;
  kind: string;
  description: string;
  highlights: string[];
  stack: string[];
  liveUrl?: string;
  accent: string;
  ai?: boolean;
}

export const projects: Project[] = [
  {
    title: 'AI Engineering Productivity Platform',
    kind: 'AI · Event Pipeline',
    description:
      'Kafka-driven pipeline ingesting GitHub push events and Jira updates in real time — auto-generates commit-based ticket descriptions and tracks developer time at session level.',
    highlights: [
      'RAG-powered internal knowledge assistant (LangChain.js + OpenAI) answering sprint and codebase queries',
      'Per-branch contribution analytics across 10+ repos',
      'Dockerised, GitHub Actions CI/CD to AWS on every merge',
    ],
    stack: ['NestJS', 'Kafka', 'Redis', 'MongoDB', 'LangChain.js', 'OpenAI', 'Docker', 'AWS'],
    accent: 'violet',
    ai: true,
  },
  {
    title: 'NX Monorepo E-Commerce Platform',
    kind: 'AI · Full-stack SaaS',
    description:
      'Full-stack e-commerce in an NX Monorepo — NestJS backend and Next.js frontend share type definitions and utility libraries, eliminating cross-app duplication.',
    highlights: [
      'RAG-powered support chatbot deflects product and order queries without human intervention',
      'BullMQ-backed async notification and email batching for high-volume sends',
    ],
    stack: ['NestJS', 'Next.js', 'MongoDB', 'Redis', 'BullMQ', 'Redux Toolkit', 'shadcn/ui', 'Docker'],
    accent: 'teal',
    ai: true,
  },
  {
    title: 'Safagar',
    kind: 'Founder · Live · AI Commerce',
    description:
      'My own FMCG wholesale distribution business — a small family venture I took over from my grandfather and am growing in an organised way, now with its own e-commerce platform for taking orders.',
    highlights: [
      'RAG-pipeline chatbot answers customer queries accurately and escalates serious ones into support tickets',
      'Runs a real supply business end-to-end: sourcing, distribution and online ordering',
      'Roadmap: extending into home-cleaning services with on-demand worker booking',
    ],
    stack: ['Next.js', 'Node.js', 'RAG Pipeline', 'LangChain.js', 'OpenAI'],
    liveUrl: 'https://safagar.in',
    accent: 'cyan',
    ai: true,
  },
  {
    title: 'AcademicPub',
    kind: 'Live · Publication Platform',
    description:
      'Academic book publication platform serving 1,000+ registered users — enquiry flows, premium content access via S3 signed URLs, and Razorpay payments.',
    highlights: [
      'JWT access/refresh auth with Google OAuth; Redis session caching cuts auth overhead',
      'Deployed on OCI behind a self-configured Nginx reverse proxy with SSL termination',
      'Zero-downtime releases via GitHub Actions',
    ],
    stack: ['NestJS', 'Next.js', 'PostgreSQL', 'Prisma', 'Redis', 'Razorpay', 'OCI', 'Nginx'],
    liveUrl: 'https://academicpub.in',
    accent: 'amber',
  },
  {
    title: 'AyurFresh',
    kind: 'Live · Modular Monolith',
    description:
      'SEO-first ayurvedic commerce platform built as a proper modular monolith — Next.js frontend with a NestJS backend, full state managed with Redux Toolkit.',
    highlights: [
      'Deployed on AWS EC2 with the database on RDS',
      'Modular monolith boundaries keep domains isolated while sharing one deployable',
      'SEO-friendly rendering and metadata across the storefront',
    ],
    stack: ['Next.js', 'NestJS', 'Redux Toolkit', 'AWS EC2', 'RDS'],
    liveUrl: 'https://ayurfresh.shop',
    accent: 'green',
  },
  {
    title: 'Elynker',
    kind: 'Live · Service Marketplace',
    description:
      'Hyperlocal service marketplace where providers list their services and consumers discover and book them — event-driven Node.js backend with full-text search.',
    highlights: [
      'Apache Solr powers product and service search, replacing slow DB-level queries',
      'Event-driven backend keeps booking and provider workflows decoupled',
      'PostgreSQL with Sequelize ORM and profiled index strategy on high-read tables',
    ],
    stack: ['Node.js', 'React.js', 'Apache Solr', 'PostgreSQL', 'Sequelize', 'Event-Driven'],
    liveUrl: 'https://elynker.com',
    accent: 'indigo',
  },
  {
    title: 'MechanicNow',
    kind: 'Live · Car Service Booking',
    description:
      'On-demand car service booking platform — users log in, pick their vehicle and book services end-to-end, with online payments.',
    highlights: [
      'Razorpay intent-based payment gateway for reliable order state transitions',
      'Full-stack build: Next.js/React + Redux Toolkit frontend over a Node.js backend',
    ],
    stack: ['Next.js', 'React.js', 'Node.js', 'Redux Toolkit', 'Razorpay'],
    liveUrl: 'https://mechanicnow.in',
    accent: 'orange',
  },
  {
    title: 'MMR Surgicals',
    kind: 'Live · E-Commerce Service',
    description:
      'E-commerce service for surgical equipment on a monolith architecture — Next.js frontend with a Node.js backend and node-cache for hot-path response caching.',
    highlights: [
      'Self-provisioned OCI compute: configured the instance, set up Nginx and deployed end-to-end',
      'In-memory caching layer (node-cache) on frequently-read catalogue routes',
    ],
    stack: ['Next.js', 'Node.js', 'node-cache', 'Nginx', 'OCI'],
    liveUrl: 'https://mmrsurgicals.in',
    accent: 'blue',
  },
  {
    title: 'Radical Siksha Solution',
    kind: 'Live · EdTech Directory',
    description:
      'Course and university discovery platform — bachelors, masters and professional courses with university details, built entirely on Next.js (frontend + API routes).',
    highlights: [
      'Single Next.js codebase serving both UI and backend',
      'Deployed on Vercel with automatic preview builds',
    ],
    stack: ['Next.js', 'Vercel'],
    liveUrl: 'https://radicalsikshasolution.com',
    accent: 'rose',
  },
];
