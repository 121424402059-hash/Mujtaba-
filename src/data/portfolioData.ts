import { Project, SkillCategory, Certification, Experience, Education, NavItem } from '../types';

export const PERSONAL_INFO = {
  name: 'Aarav Sharma',
  role: 'Computer Science Student',
  secondaryRole: 'Frontend Developer & UI/UX Enthusiast',
  headline: 'Computer Science Student | Frontend Developer | UI/UX Enthusiast',
  location: 'Hyderabad, Telangana, India',
  status: 'Open to internships',
  statusShort: 'Available for Summer & Fall Internships',
  email: 'aarav.sharma.demo@example.com',
  linkedin: 'https://linkedin.com/in/aarav-sharma-demo',
  linkedinDisplay: 'linkedin.com/in/aarav-sharma-demo',
  github: 'https://github.com/aarav-sharma-demo',
  githubDisplay: 'github.com/aarav-sharma-demo',
  heroHeadline: 'Building digital experiences that feel as good as they work.',
  heroSubheadline:
    'Computer Science student from Hyderabad passionate about frontend development, UI/UX design, and creating interactive digital experiences.',
  introStatement: 'Curious mind. Creative builder. Continuous learner.',
  aboutFull:
    'I am a passionate computer science student interested in web development, creative design, and emerging technologies. I enjoy transforming ideas into interactive, user-friendly digital experiences. I am currently developing my skills in frontend development, JavaScript, and UI/UX design while working on personal projects. I am eager to learn, collaborate, and contribute to innovative projects.',
  interests: [
    'Frontend development',
    'Web development',
    'JavaScript',
    'React',
    'UI/UX design',
    'Creative digital experiences',
  ],
};

export const NAV_ITEMS: NavItem[] = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'skills', label: 'Skills' },
  { id: 'contact', label: 'Contact' },
];

export const PROJECTS: Project[] = [
  {
    id: 'level-up-gaming',
    number: '01',
    title: 'Level Up Gaming Zone Website',
    description:
      'A modern website concept for a PS5 gaming lounge, featuring game listings, pricing packages, tournament information, and a booking section.',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    category: 'Web Concept & Booking Interface',
    highlights: [
      'Dark gaming-themed responsive visual layout',
      'Interactive game title catalog and pricing tier grid',
      'Tournament showcase and slot reservation mockup',
    ],
    mockupType: 'gaming',
  },
  {
    id: 'student-task-manager',
    number: '02',
    title: 'Student Task Manager',
    description:
      'A responsive web application that helps students organize assignments, track deadlines, and manage daily tasks.',
    technologies: ['React', 'JavaScript', 'Local Storage'],
    category: 'Productivity Application',
    highlights: [
      'Component-based interactive task management system',
      'Client-side state persistence using browser Local Storage',
      'Clean priority filtering and assignment deadline tracking',
    ],
    mockupType: 'taskmanager',
  },
  {
    id: 'personal-portfolio',
    number: '03',
    title: 'Personal Portfolio Website',
    description:
      'A visually engaging portfolio website showcasing personal skills, projects, education, and contact details.',
    technologies: ['HTML', 'CSS', 'Responsive Design'],
    category: 'Personal Brand Website',
    highlights: [
      'Contemporary dark aesthetic with high-contrast typography',
      'Fluid layout architecture across mobile and desktop breakpoints',
      'Structured content hierarchy for academic and technical work',
    ],
    mockupType: 'portfolio',
  },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    category: 'Frontend Development',
    items: [
      {
        name: 'HTML5',
        description: 'Semantic markup, modern document structure, accessibility standards, and SEO compliance.',
        icon: 'Code2',
      },
      {
        name: 'CSS3',
        description: 'Modern styling, Flexbox, CSS Grid layouts, custom animations, and responsive media queries.',
        icon: 'Palette',
      },
      {
        name: 'JavaScript',
        description: 'Modern ES6+ syntax, DOM manipulation, asynchronous programming, and clean modular logic.',
        icon: 'Cpu',
      },
      {
        name: 'React.js',
        description: 'Functional components, hooks, unidirectional data flow, and declarative user interfaces.',
        icon: 'Atom',
      },
    ],
  },
  {
    category: 'Design',
    items: [
      {
        name: 'Figma',
        description: 'Interface wireframing, layout prototyping, component design, and visual asset workflows.',
        icon: 'Figma',
      },
      {
        name: 'UI/UX Design',
        description: 'User-centered layouts, typographic hierarchy, visual balance, and interaction patterns.',
        icon: 'Layers',
      },
      {
        name: 'Responsive Design',
        description: 'Fluid grid systems, flexible typography, touch targets, and cross-device testing.',
        icon: 'Smartphone',
      },
    ],
  },
  {
    category: 'Tools',
    items: [
      {
        name: 'Git & GitHub',
        description: 'Version control workflows, commit history management, branch management, and repository hosting.',
        icon: 'GitBranch',
      },
    ],
  },
];

export const CERTIFICATIONS: Certification[] = [
  {
    number: '01',
    title: 'Web Development Fundamentals',
    institution: 'Example Learning Platform',
  },
  {
    number: '02',
    title: 'Introduction to UI/UX Design',
    institution: 'Example Design Academy',
  },
  {
    number: '03',
    title: 'JavaScript Essentials',
    institution: 'Example Coding Institute',
  },
];

export const EXPERIENCE_DATA: Experience[] = [
  {
    position: 'Frontend Development Intern',
    company: 'DemoTech Solutions',
    duration: 'June 2026 – August 2026',
    location: 'Hyderabad, India',
    description:
      'Worked on responsive web pages, improved user interface components, and practiced frontend development using HTML, CSS, and JavaScript.',
    coreResponsibilities: [
      'Implemented responsive web layouts adapting smoothly across standard mobile and desktop displays',
      'Refined reusable UI components to enhance visual consistency and interactive responsiveness',
      'Collaborated on frontend development tasks with HTML, CSS, and modern JavaScript practices',
    ],
  },
];

export const EDUCATION_DATA: Education = {
  degree: 'Bachelor of Technology in Computer Science',
  institution: 'Example Institute of Technology',
  duration: '2024 – 2028',
  location: 'Hyderabad, India',
  focus: 'Computer Science fundamentals, algorithms, software design, and modern web application development.',
};

export const APPROACH_CARDS = [
  {
    number: '01',
    title: 'LEARN',
    description: 'Continuously developing skills through projects and experimentation.',
  },
  {
    number: '02',
    title: 'BUILD',
    description: 'Turning ideas into functional and interactive experiences.',
  },
  {
    number: '03',
    title: 'IMPROVE',
    description: 'Refining designs and interfaces through iteration.',
  },
];
