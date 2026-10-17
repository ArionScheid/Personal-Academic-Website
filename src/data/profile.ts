import type { Profile } from './types';

export const profile: Profile = {
  name: 'Arion Scheid',
  role: 'M.Sc. Student',
  affiliation: 'TU Wien',
  location: 'Vienna, Austria',
  tagline: 'Probabilistic verification, explainable AI and the logic behind machine learning.',
  // TODO: refine with your own words / details from LinkedIn (study programme, current focus, …)
  bio: [
    'I am a Master’s student at TU Wien in Vienna. My interests lie in probabilistic verification, explainable AI, theoretical machine learning and logic, and more broadly in understanding when and why automated systems can be trusted.',
    'Before moving to Vienna, I completed my B.Sc. in Informatics at RWTH Aachen University, including an exchange semester in the Formal Methods master’s programme at Universidad Complutense de Madrid. In my bachelor’s thesis at the Programming Languages and Verification group, I showed how stochastic context-free grammars can be used to decide almost-sure termination for a class of probabilistic term rewriting systems.',
  ],
  photo: null,
  interests: ['Probabilistic Verification', 'Explainable AI', 'Theoretical Machine Learning', 'Logic'],
  // TODO: add public/files/cv.pdf, or set to null to hide the download buttons
  cvPdf: '/files/cv.pdf',
};
