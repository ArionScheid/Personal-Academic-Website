import type { CvSection } from './types';

const LUFG2 = 'https://verify.rwth-aachen.de/';
const KASSING = 'https://jckassing.com/';

// `details` support inline links: [text](url)
export const cv: CvSection[] = [
  {
    heading: 'Education',
    entries: [
      {
        period: '2026 – present',
        title: 'M.Sc. Studies', // TODO: programme name, e.g. "M.Sc. Logic and Computation"
        org: 'TU Wien',
        orgHref: 'https://www.tuwien.at/',
        location: 'Vienna, AT',
        details: ['Seminar: Theoretical Aspects of Machine Learning (GNNExplainer)'],
      },
      {
        period: '2020 – 2025',
        title: 'B.Sc. Informatics',
        org: 'RWTH Aachen University',
        orgHref: 'https://www.rwth-aachen.de/',
        location: 'Aachen, DE',
        details: [
          `Bachelor’s thesis at [LuFG Informatik 2: Programming Languages and Verification](${LUFG2})`,
        ],
      },
      {
        period: 'Winter 2024',
        title: 'Exchange Semester, M.Sc. Formal Methods in Computer Science',
        org: 'Universidad Complutense de Madrid',
        orgHref: 'https://www.ucm.es/',
        location: 'Madrid, ES',
      },
    ],
  },
  {
    heading: 'Research',
    entries: [
      {
        period: '2026',
        title: 'A First Decision Procedure for Almost-Sure Termination of Probabilistic Term Rewriting',
        org: 'VeriProP 2026',
        details: [
          `With [J.-C. Kassing](${KASSING}), H. Nagel and J. Giesl. See [Publications](#publications).`,
        ],
      },
      {
        period: 'Summer 2025',
        title: 'Bachelor’s Thesis',
        org: 'LuFG Informatik 2, RWTH Aachen University',
        orgHref: LUFG2,
        location: 'Aachen, DE',
        details: [
          '“Using Stochastic Context-Free Grammars to Decide Almost-Sure Termination for Probabilistic Term Rewriting Systems” ([PDF](https://verify.rwth-aachen.de/da/BA_Arion_Scheid.pdf))',
          `Supervised by [Jan-Christoph Kassing](${KASSING}); examiners Prof. Dr. Jürgen Giesl and Prof. Dr. Erika Ábrahám`,
        ],
      },
    ],
  },
  {
    heading: 'Teaching',
    entries: [
      {
        period: 'Apr 2022 – Aug 2024',
        title: 'Student Tutor',
        org: 'RWTH Aachen University',
        location: 'Aachen, DE',
        details: [
          'Logic Programming',
          'Analysis for Computer Scientists',
          'Introduction to Programming',
          'Data Structures and Algorithms',
          'Formal Languages, Automata and Processes',
        ],
      },
    ],
  },
  // TODO: add more sections if wanted, e.g. Languages, Skills, Awards
];
