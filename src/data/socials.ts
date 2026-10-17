import type { Social } from './types';

// Order here = order on the page. Remove entries you don't need.
// Available icons: see IconName in ./types.ts
export const socials: Social[] = [
  { label: 'Email', handle: 'arionscheid@gmail.com', href: 'mailto:arionscheid@gmail.com', icon: 'email' },
  { label: 'LinkedIn', handle: 'in/arionscheid', href: 'https://www.linkedin.com/in/arionscheid/', icon: 'linkedin' },
  { label: 'GitHub', handle: '@ArionScheid', href: 'https://github.com/ArionScheid', icon: 'github' },
  {
    label: 'Google Scholar',
    handle: 'Arion Scheid',
    href: 'https://scholar.google.com/citations?user=KJOpVvoAAAAJ',
    icon: 'scholar',
  },
  { label: 'ORCID', handle: '0009-0004-9159-3944', href: 'https://orcid.org/0009-0004-9159-3944', icon: 'orcid' },
  // { label: 'Instagram', handle: '@…', href: 'https://www.instagram.com/…', icon: 'instagram' },
];
