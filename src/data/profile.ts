import type { Profile } from './types';

export const profile: Profile = {
  name: 'Arion Scheid',
  role: 'M.Sc. Logic and AI',
  affiliation: 'TU Wien',
  location: 'Vienna, Austria',
  bio: [
    'I am a Master’s student in Logic and AI at TU Wien in Vienna. My interests lie in probabilistic program verification, rewriting, explainable AI, theoretical machine learning and logic, and more broadly in understanding when and why automated systems can be trusted.',
    'Before moving to Vienna, I completed my B.Sc. in Informatics at RWTH Aachen University, including an exchange semester in the Formal Methods master’s programme at Universidad Complutense de Madrid. In my bachelor’s thesis at the Programming Languages and Verification group, I showed how stochastic context-free grammars can be used to decide almost-sure termination for a class of probabilistic term rewriting systems, and I contributed to the group’s automated termination prover [AProVE](https://aprove.informatik.rwth-aachen.de/).',
  ],
  photo: null,
  interests: [
    'Probabilistic Program Verification',
    'Rewriting',
    'Explainable AI',
    'Theoretical Machine Learning',
    'Logic',
  ],
  // Set to null to hide the download buttons
  cvPdf: '/files/Arion_Scheid_CV.pdf',
};
