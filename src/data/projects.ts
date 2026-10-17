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
      'Seminar work for “Theoretical Aspects of Machine Learning” at TU Wien, examining Ying et al.’s 2019 paper GNNExplainer: Generating Explanations for Graph Neural Networks, and a fatal flaw in the theory the paper rests upon.',
    tags: ['Explainable AI', 'Graph Neural Networks', 'LaTeX'],
    year: '2026',
    links: [{ label: 'GitHub', href: 'https://github.com/ArionScheid/Seminar-in-AI' }],
  },
  {
    title: 'Visual Learning Tool',
    description: 'A visual learning tool. Coming soon…',
    tags: [],
    year: '2026',
  },
];
