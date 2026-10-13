import { TerminalStep } from './components/terminal-component/terminal-step';

// one link in the navbar
export interface NavItem {
  hrefId: string;
  title: string;
}

// one diagram card (image + title + github button)
export interface DiagramData {
  cardTitle: string;
  assetSrc: string;
  alt: string;
  githubLink: string;
}

// the Architecture and Protocol sections are diagram cards with an <h2> above them.
export interface DiagramSection extends DiagramData {
  heading: string;
}

// simple client link
export interface ClientLink {
  linkTitle: string;
  link: string;
}

// simple client item
export interface ClientItem {
  clientName: string;
  links: ClientLink[];
}

/* 
one card in the Features grid.
design choice: a feature is a title plus ONE of three optional bodies
- terminal
- diagram or 
- link
the template checks which body exists and renders only that one.
*/
export interface Feature {
  title: string;
  wide?: boolean;
  terminal?: {
    title: string;
    prompt?: string;
    steps: TerminalStep[];
  };
  diagram?: DiagramData;
  link?: {
    description: string;
    linkText: string;
    href: string;
  };
}

// the whole content of the site in one type
export interface RaydashData {
  navbarItems: NavItem[];
  features: Feature[];
  diagrams: DiagramSection[];
  clients: ClientItem[];
}
