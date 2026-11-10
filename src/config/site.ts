export interface NavLink {
  label: string;
  href: string;
}

export const siteConfig = {
  name: 'Claire Gantan',
  title: 'Claire - Deveng portfolio',
  description:
    'Claire Gantan portfolio. Selected work and resume.',
  siteUrl: 'https://cgantan.github.io',
  language: 'en',
  locale: 'en_US',
  dateLocale: 'en-US',
  socialImage: '/og-image.png',

  author: {
    name: 'Claire Gantan',
    role: 'Social Innovation Engineer',
    location: 'California, USA',
    email: '',
  },

  /** The pill above the homepage headline. Set `enabled: false` to remove it. */
  availability: {
    enabled: true,
    label: 'Available for new projects from January 2027',
  },

  /** The button at the end of the header and in the mobile menu. */
  action: { label: 'Get in touch', href: 'mailto: ' },

  /** A PDF in `public/`, offered on the resume page. Leave empty to hide the button. */
  resumePdf: '',

  /** The banner and preferences dialog. Set `enabled: false` to remove both. */
  cookieConsent: {
    enabled: true,
  },

  socials: [
    { label: 'LinkedIn', href: 'https://www.linkedin.com/' },
  ] satisfies NavLink[],
    
     /**{ label: 'Dribbble', href: 'https://dribbble.com/' },
    { label: 'Behance', href: 'https://www.behance.net/' },
    { label: 'Instagram', href: 'https://www.instagram.com/' }, */
};

export const navigation: NavLink[] = [
  { label: 'Work', href: '/work/' },
  { label: 'About', href: '/about/' },
];
/**{ label: 'Resume', href: '/resume/' }, */

export const legalLinks: NavLink[] = [
  { label: 'Privacy', href: '/privacy/' },
  { label: 'Terms', href: '/terms/' },
  { label: 'Cookies', href: '/cookies/' },
];
