import type { CvSection } from './types';

// `details` support inline links: [text](url)
export const cv: CvSection[] = [
  {
    heading: 'Education',
    entries: [
      {
        period: '2026 – present',
        title: 'M.Sc. Logic and AI',
        org: 'TU Wien',
        orgHref: 'https://www.tuwien.at/',
        location: 'Vienna, AT',
      },
      {
        period: '2020 – 2025',
        title: 'B.Sc. Informatics',
        org: 'RWTH Aachen University',
        orgHref: 'https://www.rwth-aachen.de/',
        location: 'Aachen, DE',
        details: [
          '[Bachelor’s thesis](#publications) at [LuFG Informatik 2: Programming Languages and Verification](https://verify.rwth-aachen.de/), supervised by [Jan-Christoph Kassing](https://jckassing.com/)',
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
    heading: 'Teaching',
    entries: [
      {
        period: 'Apr 2022 – Aug 2024',
        title: 'Student Tutor',
        org: 'RWTH Aachen University',
        location: 'Aachen, DE',
        details: [
          'Foundations of Logic Programming',
          'Analysis for Computer Scientists',
          'Introduction to Programming',
          'Data Structures and Algorithms',
          'Formal Languages, Automata and Processes',
        ],
      },
    ],
  },
];
