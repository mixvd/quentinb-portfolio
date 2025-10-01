export const projectData = {
  'project-resonance': {
    title: 'PROJECT : RESONANCE - RESONANCE. NETWORKS',
    images: [
      'assets/img/projects/project-resonance/project-resonance-1.png',
      'assets/img/projects/project-resonance/project-resonance-2.png',
      'assets/img/projects/project-resonance/project-resonance-3.png',
      'assets/img/projects/project-resonance/project-resonance-4.png'
    ],
    category: 'fullstack',
    description: `
      <p>RESONANCE. NETWORK (also known as Project : Résonance) is a creative community dedicated to immersive roleplay (RP) gaming experiences across multiple universes.</p>
      <ul>
        <li>Vue.js 3 with Composition API</li>
        <li>Nuxt.js for SSR and routing</li>
        <li>TypeScript for type safety</li>
        <li>Prisma ORM with PostgreSQL</li>
        <li>Real-time collaboration features</li>
      </ul>
    `,
    githubUrl: 'https://github.com/RESONANCE-NETWORK',
    demoUrl: 'https://project-resonance.fr'
  },
  'mxd-portfolio': {
    title: 'MXD - HELIX PORTFOLIO',
    images: [
      'assets/img/projects/mxd/mxd-1.png',
      'assets/img/projects/mxd/mxd-2.png',
      'assets/img/projects/mxd/mxd-3.png',
      'assets/img/projects/mxd/mxd-4.png',
      'assets/img/projects/mxd/mxd-5.png'
    ],
    category: 'frontend',
    description: `
      <p>Helix is a platform for creating and sharing roleplay experiences across multiple universes.</p>
      <ul>
        <li>React with Redux Toolkit</li>
        <li>Node.js with Express</li>
        <li>MongoDB with Mongoose</li>
        <li>Stripe payment integration</li>
        <li>JWT authentication</li>
      </ul>
    `,
    githubUrl: 'https://github.com/mixvd/mxd-portfolio',
    demoUrl: 'https://helix.mxd.ovh'
  }
};

export const projects = [
  {
    id: 'project-resonance',
    title: 'RESONANCE. NETWORKS',
    description: 'RESONANCE. NETWORK (also known as Project : Résonance) is a creative community dedicated to immersive roleplay (RP) gaming experiences across multiple universes.',
    category: 'fullstack',
    date: 'September 2025',
    status: 'completed'
  },
  {
    id: 'mxd-portfolio',
    title: 'MXD - HELIX PORTFOLIO',
    description: 'Helix is a platform for creating and sharing roleplay experiences across multiple universes.',
    category: 'frontend',
    date: 'June 2025',
    status: 'completed'
  },
  {
    id: 'coming-soon',
    title: 'SOON...',
    description: 'An exciting new project coming soon. Stay tuned for updates!',
    category: 'upcoming',
    date: 'Coming Soon',
    status: 'coming-soon'
  },
  {
    id: 'coming-soon',
    title: 'SOON...',
    description: 'An exciting new project coming soon. Stay tuned for updates!',
    category: 'upcoming',
    date: 'Coming Soon',
    status: 'coming-soon'
  }
];