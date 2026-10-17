import type { Project } from './types';

export const projects: Project[] = [
  {
    title: 'Vienna District Browser',
    description:
      'A knowledge graph project built for a course at TU Wien, modelling and exploring information about Vienna’s districts.', // TODO: refine description
    tags: ['Knowledge Graphs', 'Python'],
    year: '2026',
    links: [{ label: 'GitHub', href: 'https://github.com/ArionScheid/Vienna-District-Browser' }],
  },
  {
    title: 'GNNExplainer: Seminar Study',
    description:
      'Seminar work for “Theoretical Aspects of Machine Learning” at TU Wien, examining Ying et al.’s 2019 paper GNNExplainer: Generating Explanations for Graph Neural Networks.',
    tags: ['Explainable AI', 'Graph Neural Networks', 'LaTeX'],
    year: '2026',
    links: [{ label: 'GitHub', href: 'https://github.com/ArionScheid/Seminar-in-AI' }],
  },
  {
    title: 'This Website',
    description: 'My personal website: a static, dependency-light one-pager built with Astro and deployed on Netlify.',
    tags: ['Astro', 'TypeScript', 'CSS'],
    year: '2026',
    // TODO: add the repository link once it's public (or remove this card)
  },
];
