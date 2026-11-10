export const hero = {
  greeting: "",
  title: 'Engineering with Heart',
  highlight: '',
  text: 'Hi! My name is Claire Gantan, and I am a social innovation engineer working in the intersection of health, systems change and service. From streamlining workflows for frontline community health workers to empowering local leaders to make data-backed public health decisions, I co-design human-centered technologies that improve community health outcomes.',
  primary: { label: 'See selected work', href: '/#work' },
  secondary: { label: 'About me', href: '/about/' },
  facts: [ { value: '2+', label: 'years of full-time volunteer outreach' },
    { value: '5+', label: 'community-focused projects' },
  ],
};
/**can add this back into hero if you want:
 * facts: [
    { value: '10+', label: 'years in product design' },
    { value: '40+', label: 'products shipped' },
    { value: '12', label: 'design systems built' },
  ],
 */

export const work = {
  eyebrow: 'Selected work',
  title: 'Case studies',
  text: '',
  /** How many featured case studies the homepage shows. */
  limit: 2,
  /**change limit number to add back in work */
};

export const services = {
  eyebrow: 'My Why',
  title: 'Values that shape how I work',
  items: [
    {
      icon: 'lightbulb',
      title: 'Equity',
      text: 'What communities need to flourish, understanding that history and context matters.',
    },
    {
      icon: 'workflow',
      title: 'Dignity of the Human Person',
      text: 'People first, progress next.',
    },
    {
      icon: 'layers',
      title: 'Collaboration',
      text: 'Designing with and for underserved communities.',
    },
    {
      icon: 'pen-tool',
      title: 'Empower',
      text: 'Reverencing and respecting community agency and power through how I show up.',
    },
  ],
};

export const testimonials = {
  eyebrow: 'Kind words',
  title: 'What teams say (in progress)',
  items: [
    {
      quote:
        'A quote here.',
      name: 'person',
      role: 'role here',
    },
  ],
};

export const closing = {
  eyebrow: "Let's work together",
  title: 'Got something worth building?',
  highlight: "Let's talk.",
  text: 'tbd text.',
};
