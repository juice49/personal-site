interface Project {
  name?: string,
  slug: string,
  description?: string
}

const projects: Project[] = [
  {
    name: '🌿 Monstera',
    slug: 'monstera',
    description: 'CSS-in-JS helper library.'
  },
  {
    name: '📓 Frontend Guiding Principles',
    slug: 'frontend-guiding-principles',
    description: 'Handbook explaining my guiding principles for frontend web development.'
  },
  {
    name: '⏳ Little Timer',
    slug: 'little-timer',
    description: 'Tiny CLI based time tracking tool.'
  },
  {
    name: '🥪 Lipsumator',
    slug: 'lipsumator',
    description: 'TypeScript library and Deno CLI for generating placeholder text.'
  },
  {
    name: '🔴 Connect 4',
    slug: 'connect-4',
    description: 'Connect 4 game built with React and TypeScript.'
  }
]

export default projects
