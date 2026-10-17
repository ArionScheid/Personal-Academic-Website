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
          '[Bachelor’s thesis](#publications) at the [Programming Languages and Verification](https://verify.rwth-aachen.de/) research group, supervised by [Jan-Christoph Kassing](https://jckassing.com/)',
        ],
      },
      {
        period: 'Sep 2024 – Jan 2025',
        title: 'Erasmus Exchange, M.Sc. Formal Methods in Computer Science',
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
        period: 'Apr 2025 – present',
        title: 'Premium Tutor',
        org: 'TutorSpace',
        orgHref: 'https://tutorspace.de/',
        location: 'Remote',
      },
      {
        period: 'Apr 2022 – Sep 2024',
        title: 'Student Tutor',
        org: 'RWTH Aachen University',
        orgHref: 'https://www.rwth-aachen.de/',
        location: 'Aachen, DE',
        details: [
          'Formal Systems, Automata and Processes (Summer 2024)',
          'Introduction to Programming (Winter 2023/24)',
          'Data Structures and Algorithms (Summer 2023)',
          'Analysis for Computer Scientists (Winter 2022/23)',
          'Foundations of Logic Programming (Summer 2022)',
        ],
      },
    ],
  },
];
