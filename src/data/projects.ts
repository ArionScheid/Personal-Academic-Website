import type { Project } from './types';

export const projects: Project[] = [
  {
    title: 'Vienna District Browser',
    description:
      'Knowledge graph built for a course at TU Wien from Vienna’s public-transit (GTFS) and willhaben housing data, used to navigate and cluster the city’s districts through a web UI.',
    tags: ['Knowledge Graphs', 'Python'],
    year: '2026',
    links: [{ label: 'GitHub', href: 'https://github.com/ArionScheid/Vienna-District-Browser' }],
  },
  {
    title: 'GNNExplainer: Seminar Study',
    description:
      'Seminar study for “Theoretical Aspects of Machine Learning” at TU Wien on GNNExplainer (Ying et al., 2019): evaluated the method on a novel dataset and identified a fundamental flaw in the theory it rests on.',
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
