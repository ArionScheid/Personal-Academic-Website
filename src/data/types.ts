// Shared content types. Edit the data files next to this one to change site content.

export type IconName =
  | 'email'
  | 'linkedin'
  | 'github'
  | 'instagram'
  | 'scholar'
  | 'orcid'
  | 'x'
  | 'website';

export interface Link {
  label: string;
  href: string;
}

export interface Profile {
  name: string;
  role: string;
  affiliation: string;
  location: string;
  /** Short one-liner shown under the name */
  tagline: string;
  /** Longer bio; each entry is rendered as its own paragraph */
  bio: string[];
  /** Path under /public (e.g. '/images/me.jpg'), or null to show initials instead */
  photo: string | null;
  /** Research interests / keywords shown as tags */
  interests: string[];
  /** Path under /public to a downloadable CV, or null to hide the button */
  cvPdf: string | null;
}

export interface Social {
  label: string;
  /** Text shown next to the icon, e.g. the handle */
  handle: string;
  href: string;
  icon: IconName;
}

export interface CvEntry {
  period: string;
  title: string;
  org: string;
  /** Optional link for the organisation name */
  orgHref?: string;
  location?: string;
  /** Bullet points; supports inline links written as [text](url) */
  details?: string[];
}

export interface CvSection {
  heading: string;
  entries: CvEntry[];
}

export interface Publication {
  title: string;
  authors: string[];
  venue: string;
  year: number;
  type: 'journal' | 'conference' | 'preprint' | 'thesis' | 'other';
  links?: Link[];
  /** Featured publications are visually emphasised */
  featured?: boolean;
}

export interface Project {
  title: string;
  description: string;
  tags: string[];
  year: string;
  links?: Link[];
  /** Path under /public, optional */
  image?: string;
}
