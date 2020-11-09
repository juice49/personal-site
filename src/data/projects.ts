interface Project {
  name?: string
  slug: string
  description?: string
  externalUrl?: string
}

const projects: Project[] = [
  {
    name: '🌿 Monstera',
    slug: 'monstera',
    description: 'CSS-in-JS helper library.',
  },
  {
    name: '🔴 Connect 4',
    slug: 'connect-4',
    description: 'Connect 4 game built with React and TypeScript.',
  },
  {
    name: '⏳ Little Timer',
    slug: 'little-timer',
    description: 'Tiny CLI based time tracking tool.',
    externalUrl: 'https://github.com/juice49/lt-cli',
  },
  {
    name: '🥪 Lipsumator',
    slug: 'lipsumator',
    description:
      'TypeScript library and Deno CLI for generating placeholder text.',
    externalUrl: 'https://github.com/juice49/lipsumator-next',
  },
  {
    name: '📓 Frontend Guiding Principles',
    slug: 'frontend-guiding-principles',
    description:
      'Handbook explaining my guiding principles for frontend web development.',
    externalUrl: 'https://github.com/juice49/frontend-guiding-principles',
  },
]

export default projects
