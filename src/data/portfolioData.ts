import { Project, Experience, Certification, Education, SkillCategory } from '../types';

export const personalInfo = {
  name: 'Aditya Narayan',
  titles: [
    'Software Developer',
    'Flutter Specialist',
    'Full-Stack Engineer',
    '.NET & React Developer'
  ],
  tagline: 'Engineering robust mobile apps, web applications, and resilient backend systems.',
  bio: 'Software Developer with 2.5+ years of hands-on freelancing and engineering experience across 50+ client projects, including company experience at Vagminepro Techno and Infinitminds Digital Lab. Proficient in Flutter, React, .NET Core, Firebase, and modern database architectures. Focused on clean architecture, minimal design, and sub-second application performance.',
  location: 'Noida, India',
  email: 'adityakumar913573@gmail.com',
  phone: '+91 9135737500',
  github: 'https://github.com/DubeyJi0840',
  linkedin: 'https://www.linkedin.com/in/aditya-narayan-84634525b/',
  portfolioUrl: 'https://dubeyji0840.github.io/portfolio/',
  availableForHire: true,
  statusText: 'Available for full-time roles & high-impact contracts',
  resumeUrl: './assets/aditya-narayan-resume.pdf',
  metrics: [
    { label: 'Years Engineering Experience', value: '2.5+', numeric: 2.5, suffix: '+', decimals: 1 },
    { label: 'Client Projects Delivered', value: '50+', numeric: 50, suffix: '+', decimals: 0 },
    { label: 'Production UI Screens', value: '200+', numeric: 200, suffix: '+', decimals: 0 },
  ],
  photos: {
    professional: './assets/aditya-professional.png',
    natural: './assets/aditya-natural.jpg',
    workspace: './assets/aditya-work.png',
  }
};

export const projects: Project[] = [
  {
    id: 'kharid-do',
    title: 'Kharid Do',
    subtitle: 'Production-Grade E-Commerce Mobile Application',
    category: 'Mobile',
    featured: true,
    description:
      'A feature-complete mobile shopping platform engineered with Flutter and Dart, featuring 15+ interactive screens with real-time cart state synchronization, multi-step checkout, coupon engines, and order tracking.',
    architecture: [
      'Modular feature-first folder architecture with separated domain, data, and presentation layers',
      'Centralized state management with responsive Material 3 UI widgets for uniform mobile scaling',
      'Robust mock & live REST API data layer with caching and optimistic UI updates',
    ],
    metrics: [
      '15+ Interactive mobile screens',
      'Sub-60fps smooth transitions & scroll',
      'Zero-latency cart & favorites persistence'
    ],
    techStack: ['Flutter', 'Dart', 'Material 3', 'REST API', 'State Management', 'Android Studio'],
    githubUrl: 'https://github.com/DubeyJi0840',
  },
  {
    id: 'edupulse-portal',
    title: 'EduPulse Portal',
    subtitle: 'Academic Analytics & Institutional Dashboard',
    category: 'Web',
    featured: true,
    description:
      'An enterprise academic management dashboard built for institutional staff and students. Monitors attendance, continuous grading metrics, and examination logs for 4,800+ student profiles with real-time filtering.',
    architecture: [
      'Built in React 18 and TypeScript with modular custom hooks for complex table filtering',
      'Refactored SQL query bottlenecks and implemented connection pooling, slashing report turnaround by 60%',
      'Interactive visual breakdowns for class performance, attendance alerts, and bulk CSV export',
    ],
    metrics: [
      '4,800+ Student profiles supported',
      '60% Query latency reduction',
      'Automated grade report export'
    ],
    techStack: ['React', 'TypeScript', 'MySQL', 'Tailwind CSS', 'REST API', 'Node.js'],
    githubUrl: 'https://github.com/DubeyJi0840',
  },
  {
    id: 'geotrack-travel',
    title: 'GeoTrack Travel & Fleet',
    subtitle: 'Real-Time Location & Group Tracking App',
    category: 'Mobile',
    featured: true,
    description:
      'A cross-platform mobile application providing real-time team location tracking, interactive route visualization, background geofencing, and battery-optimized GPS ping intervals.',
    architecture: [
      'Integrated Google Maps SDK with custom SVG markers and smooth polyline route drawing',
      'Utilized Geolocator with granular background permission handling and battery-saver interval throttling',
      'Persistent local caching using SharedPreferences for seamless offline onboarding and state recovery',
    ],
    metrics: [
      'Real-time GPS coordinate stream',
      '30% Less battery drain via geofence throttling',
      'Clean modular feature architecture'
    ],
    techStack: ['Flutter', 'Dart', 'Google Maps API', 'Geolocator', 'Shared Preferences'],
    githubUrl: 'https://github.com/DubeyJi0840',
  },
  {
    id: 'pulsefit-tracker',
    title: 'PulseFit Tracker',
    subtitle: 'Cross-Platform Mobile Fitness Companion',
    category: 'Full-Stack',
    featured: true,
    description:
      'An offline-first personal fitness and workout logger with animated radial progress indicators, customizable daily workout routines, and seamless cloud synchronization upon reconnection.',
    architecture: [
      'Offline-first architecture leveraging local SQLite database for instant read/write access',
      'Two-way sync pipeline to Google Firebase Firestore upon network reconnect with conflict resolution',
      'Hardware-accelerated custom animations for daily streak rings and calorie consumption targets',
    ],
    metrics: [
      '100% Offline functional logging',
      'Automated Firebase cloud sync',
      'Sub-50ms local database queries'
    ],
    techStack: ['Flutter', 'Dart', 'Firebase Firestore', 'SQLite', 'Mobile UI/UX'],
    githubUrl: 'https://github.com/DubeyJi0840',
  },
  {
    id: 'enterprise-microservices',
    title: 'Core Commerce & ERP APIs',
    subtitle: 'High-Throughput Enterprise Backend Services',
    category: 'API',
    featured: false,
    description:
      'Enterprise backend services engineered using ASP.NET Core and Microsoft SQL Server. Provides REST endpoints for inventory management, transaction processing, and multi-tenant administrative controls.',
    architecture: [
      'Structured REST API design using ASP.NET Core with dependency injection and clean service layers',
      'High-performance transactional queries on SQL Server with Redis caching for hot paths',
      'Containerized with Docker for repeatable local development and staging deployments',
    ],
    metrics: [
      'Strict API response time < 80ms',
      'JWT role-based authorization',
      'Full Swagger/OpenAPI documentation'
    ],
    techStack: ['.NET Core', 'C#', 'SQL Server', 'Redis', 'Docker', 'Postman'],
    githubUrl: 'https://github.com/DubeyJi0840',
  }
];

export const experiences: Experience[] = [
  {
    company: 'Vagminepro Techno Pvt. Ltd.',
    role: 'Software Developer',
    employmentType: 'Full-Time',
    period: 'Joined 17 Aug 2026',
    location: 'Delhi, India',
    highlights: [
      'Spearheading development of enterprise cross-platform modules and business workflow architectures.',
      'Architecting and consuming high-throughput REST APIs, optimizing backend query structures and business services.',
      'Collaborating closely with product and QA teams to maintain strict code maintainability and test coverage standards.',
      'Implementing containerization routines and standardized API debugging workflows.'
    ],
    techStack: ['Flutter', 'React', '.NET Core', 'SQL Server', 'Docker', 'REST API']
  },
  {
    company: 'Infinitminds Digital Lab Pvt. Ltd.',
    role: 'Flutter Developer Intern',
    employmentType: 'Internship',
    period: '18 Feb 2025 – 18 May 2025',
    location: 'Patna, India',
    highlights: [
      'Engineered cross-platform mobile screens, responsive UI widgets, and navigational flows in Flutter and Dart.',
      'Integrated third-party RESTful APIs with asynchronous JSON serialization and resilient network exception handling.',
      'Resolved 40+ UI/UX rendering edge cases and performance bottlenecks across diverse Android devices.',
      'Actively participated in sprint planning, Git pull-request code reviews, and Agile team retrospectives.'
    ],
    techStack: ['Flutter', 'Dart', 'REST APIs', 'Git', 'Android Studio', 'JSON']
  },
  {
    company: 'Independent Client Contracting',
    role: 'Freelance Software Developer',
    employmentType: 'Contract & Consulting',
    period: '2023 – Present',
    location: 'Remote',
    highlights: [
      'Delivered 50+ successful client projects spanning mobile applications, web dashboards, and backend services.',
      'Crafted over 200+ clean, responsive UI screens adhering strictly to modern UX standards and brand identities.',
      'Owned the entire lifecycle from initial requirements discovery and wireframing to engineering, QA testing, and production deployment.',
      'Maintained a 100% project completion rate with repeat client engagements across retail, education, and health.'
    ],
    techStack: ['Flutter', 'React', 'TypeScript', 'Dart', 'Firebase', 'Tailwind CSS']
  }
];

export const educations: Education[] = [
  {
    degree: 'Bachelor of Computer Applications (BCA)',
    institution: 'Aryabhatta Knowledge University',
    period: '2021 – 2024',
    cgpa: '7.17 / 10',
    location: 'Patna, Bihar, India'
  },
  {
    degree: 'Higher Secondary / Intermediate (Science)',
    institution: 'MSSG College, E. Champaran',
    period: '2019 – 2021',
    location: 'Bihar, India'
  }
];

export const certifications: Certification[] = [
  {
    name: 'Oracle Cloud Infrastructure AI Foundations Associate',
    issuer: 'Oracle',
    year: '2026',
    badge: 'OCI AI'
  },
  {
    name: 'Data Analytics Essentials',
    issuer: 'Cisco Networking Academy',
    year: 'Feb 2026',
    badge: 'Cisco'
  },
  {
    name: 'Flutter Developer Internship Certification',
    issuer: 'Infinitminds Digital Lab Pvt. Ltd.',
    year: 'May 2025',
    badge: 'Flutter'
  }
];

export const skillCategories: SkillCategory[] = [
  {
    title: 'Languages',
    skills: [
      { name: 'Dart', highlight: true },
      { name: 'C#', highlight: true },
      { name: 'TypeScript', highlight: true },
      { name: 'JavaScript' },
      { name: 'SQL', highlight: true },
      { name: 'HTML5 & CSS3' },
    ]
  },
  {
    title: 'Frameworks & Libraries',
    skills: [
      { name: 'Flutter', highlight: true },
      { name: 'React', highlight: true },
      { name: '.NET Core', highlight: true },
      { name: 'ASP.NET Core' },
      { name: 'Tailwind CSS', highlight: true },
      { name: 'Bootstrap' },
    ]
  },
  {
    title: 'Databases & Cloud',
    skills: [
      { name: 'Microsoft SQL Server', highlight: true },
      { name: 'MySQL', highlight: true },
      { name: 'SQLite', highlight: true },
      { name: 'Firebase & Firestore', highlight: true },
      { name: 'Redis' },
      { name: 'Oracle Cloud (OCI)' }
    ]
  },
  {
    title: 'DevOps & Tooling',
    skills: [
      { name: 'Git & GitHub', highlight: true },
      { name: 'Docker', highlight: true },
      { name: 'Postman' },
      { name: 'Android Studio' },
      { name: 'Visual Studio & VS Code' },
      { name: 'Swagger / OpenAPI' }
    ]
  },
  {
    title: 'Engineering Practices',
    skills: [
      { name: 'Clean Architecture', highlight: true },
      { name: 'Responsive UI/UX' },
      { name: 'RESTful API Design', highlight: true },
      { name: 'State Management (Bloc / Provider)' },
      { name: 'Database Query Optimization' },
      { name: 'Offline-First Synchronization' }
    ]
  }
];
