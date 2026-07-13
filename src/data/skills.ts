export interface SkillGroup {
  label: string;
  items: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    label: 'AI / ML',
    items: ['RAG Pipelines', 'LangChain.js', 'OpenAI APIs', 'Vector DBs', 'LLM Integration'],
  },
  {
    label: 'Backend',
    items: ['Node.js', 'NestJS', 'Express.js', 'Fastify', 'TypeScript'],
  },
  {
    label: 'Queues & Async',
    items: ['Kafka', 'BullMQ', 'Redis', 'Event-Driven Architecture', 'Worker Threads'],
  },
  {
    label: 'Databases',
    items: ['PostgreSQL', 'MongoDB', 'Redis', 'Prisma', 'Sequelize'],
  },
  {
    label: 'Cloud & DevOps',
    items: ['Docker', 'AWS (EC2 · S3 · Lambda · ECS · RDS)', 'OCI', 'Nginx', 'GitHub Actions', 'CI/CD'],
  },
  {
    label: 'Architecture',
    items: ['Microservices', 'NX Monorepo', 'Modular Monolith', 'Distributed Systems', 'System Design', 'SOLID'],
  },
  {
    label: 'Auth & Security',
    items: ['OAuth 2.0', 'JWT (Access/Refresh)', 'RBAC', 'Google OAuth'],
  },
  {
    label: 'Frontend',
    items: ['React.js', 'Next.js', 'Redux Toolkit', 'shadcn/ui'],
  },
];
