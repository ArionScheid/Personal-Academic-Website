import type { Publication } from './types';

// Your own name in `authors` is highlighted automatically (matched against profile.name).
// The list is sorted by year (newest first) on the page, so order here doesn't matter.
export const publications: Publication[] = [
  {
    title: 'A First Decision Procedure for Almost-Sure Termination of Probabilistic Term Rewriting',
    authors: ['Jan-Christoph Kassing', 'Arion Scheid', 'Henri Nagel', 'Jürgen Giesl'],
    venue: 'VeriProP 2026',
    year: 2026,
    type: 'conference',
    featured: true,
    links: [
      { label: 'Paper', href: 'https://jckassing.com/files/paper/GroundDec_VeriProP26.pdf' },
      { label: 'Slides', href: 'https://jckassing.com/files/slides/VeriProP26.pdf' },
      { label: 'Details', href: 'https://jckassing.com/publication/2026-07-04' },
    ],
  },
  {
    title:
      'Using Stochastic Context-Free Grammars to Decide Almost-Sure Termination for Probabilistic Term Rewriting Systems',
    authors: ['Arion Scheid'],
    venue: 'Bachelor’s Thesis, RWTH Aachen University',
    year: 2025,
    type: 'thesis',
    links: [{ label: 'PDF', href: 'https://verify.rwth-aachen.de/da/BA_Arion_Scheid.pdf' }],
  },
];
