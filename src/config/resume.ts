import figma from '@/assets/logos/figma.svg';
import framer from '@/assets/logos/framer.svg';
import shopify from '@/assets/logos/shopify.svg';
import webflow from '@/assets/logos/webflow.svg';

export const resume = {
  eyebrow: 'Resume',
  title: 'In Progress',
  highlight: '',
  text: 'Resume page coming soon!',
  snapshot: [
    { label: 'Location', value: 'California, USA' },
    { label: 'Focus', value: 'Social Innovation, Health and Data' },
    { label: 'Specialties', value: 'Workflows, Data Analysis, Design Thinking' },
  ],
  experience: [
    {
      role: 'Design Engineering Intern',
      company: 'Advantest',
      period: 'May - July 2022',
      text: 'Hardware Design & Integration - designed digital circuits interconnect schematic for automated test equipment (ATE).',
    },
  ],
  capabilities: [
    {
      title: 'Skills here',
      text: 'description here',
    },
  ],
  education: [
    { title: 'BS, Electrical Engineering and Computer Science', place: 'University of California, Berkeley', period: '2023' },
  ],
  tools: [
    { name: 'Figma', logo: figma, dark: false },
  ],
};
