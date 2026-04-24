export interface Project {
  id: string;
  title: string;
  category?: string;
  shortDescription: string;
  fullDescription: string;
  image: string;
  techStack: {
    client: string[];
    server?: string[];
  };
  liveUrl: string;
  githubUrl: {
    client: string;
    server?: string;
  };
  challenges: string[];
  futureImprovements: string[];
  features: string[];
}

export const projects: Project[] = [
  {
    id: "intelligence-landing-page",
    title: "Intelligence AI Platform",
    category: "AI SaaS / Frontend",

    shortDescription:
      "An advanced AI-powered platform for generating, optimizing, and managing high-quality content with real-time intelligence.",

    fullDescription:
      "Intelligence AI Platform is a modern, high-performance web application designed to empower creators, marketers, and developers with cutting-edge artificial intelligence tools. The platform provides real-time AI content generation, smart editing assistance, and data-driven insights to optimize content across multiple channels. Built with a scalable architecture using Next.js and Node.js, it ensures fast performance, secure authentication, and seamless user experience across all devices.",

    image: "/projects/intelligence.png",

    techStack: {
      client: [
        "Next.js",
        "React",
        "TypeScript",
        "Tailwind CSS",
        "Framer Motion",
        "Shadcn/ui",
      ],
      server: ["Vercel"],
    },

    liveUrl: "https://intelligence-kappa.vercel.app",

    githubUrl: {
      client: "https://github.com/nasirpatwary/intelligence-ai-platform",
    },

    features: [
      "AI-powered content generation with contextual understanding",
      "Smart editor with real-time suggestions and auto-enhancement",
      "Pre-built templates for blogs, ads, emails, and social media",
      "Multi-language content generation with localization support",
      "Secure authentication and personalized user dashboard",
      "Lightning-fast performance using server-side rendering (SSR)",
      "Interactive UI with smooth animations using Framer Motion",
    ],

    challenges: [
      "Designing a clean and intuitive AI interaction experience",
      "Maintaining fast response time for AI-generated content",
      "Handling authentication securely with NextAuth and Firebase",
      "Structuring scalable backend APIs for AI workflows",
      "Balancing UI animations with performance optimization",
    ],

    futureImprovements: [
      "Real-time collaborative editing (Google Docs style)",
      "Voice-to-text and speech-based AI interaction",
      "Custom AI models for niche industries (e.g., e-commerce, SaaS)",
      "Built-in SEO scoring and keyword optimization tools",
      "AI analytics dashboard for content performance tracking",
      "Dark mode personalization and UI customization",
    ],
  },
  {
    id: "create-ai-landing-page",
    title: "Create AI Landing Page",
    category: "Frontend",
    shortDescription:
      "A modern landing page for an AI-powered content creation tool.",
    fullDescription:
      "The Create AI Landing Page is a responsive and visually appealing website designed to showcase the features and benefits of our AI-powered content creation tool. It includes sections for product highlights, testimonials, pricing information, and a call-to-action for user sign-ups. Built with Next.js for the frontend and a robust Node.js backend.",
    image: "/projects/larka.png",
    techStack: {
      client: [
        "Next.js",
        "React",
        "Tailwind CSS",
        "React Hook Form",
        "Framer Motion",
        "Heroui",
        "Shadcn/ui",
      ],
      server: ["Node.js", "MongoDB", "NextAuth", "Vercel"],
    },
    liveUrl: "https://create-nextauth.vercel.app",
    githubUrl: {
      client: "https://github.com/nasirpatwary/create-nextauth-car",
      server: "https://github.com/nasirpatwary/create-nextauth-car",
    },
    features: [
      "AI-powered content generation for blogs, ads, and social media",
      "Smart templates for fast content creation",
      "Real-time editing and suggestions with AI assistance",
      "Multi-language content support",
      "User authentication and personalized workspace",
      "Fast performance with server-side rendering using Next.js",
    ],

    challenges: [
      "Designing an intuitive UI for seamless AI interaction",
      "Ensuring high-quality and context-aware AI-generated content",
      "Optimizing performance for real-time content generation",
      "Handling user data securely while maintaining personalization",
    ],

    futureImprovements: [
      "Add real-time collaboration between multiple users",
      "Integrate voice-to-text content generation",
      "Enhance AI with industry-specific content models",
      "Add built-in SEO optimization and analytics tools",
    ],
  },
  {
    id: "create-nextauth-dashboard",
    title: "Create NextAuth Dashboard",
    category: "Frontend",
    shortDescription:
      "A modern dashboard for managing NextAuth authentication.",
    fullDescription:
      "The Create NextAuth Dashboard is a responsive and visually appealing interface designed to manage and monitor authentication flows for the NextAuth library. It includes sections for user management, session tracking, and authentication logs. Built with Next.js for the frontend and a robust Node.js backend.",
    image: "/projects/create-nextauth.png",
    techStack: {
      client: [
        "Next.js",
        "React",
        "Tailwind CSS",
        "React Hook Form",
        "Framer Motion",
        "Heroui",
        "Shadcn/ui",
      ],
      server: ["Node.js", "MongoDB", "NextAuth", "Vercel"],
    },
    liveUrl: "https://create-next-car.vercel.app",
    githubUrl: {
      client: "https://github.com/nasirpatwary/create-landing-page",
      server: "https://github.com/nasirpatwary/create-landing-page",
    },
    features: [
      "Secure authentication system powered by NextAuth.js",
      "Responsive dashboard layout for mobile, tablet, and desktop",
      "Role-based access control (admin, user, etc.)",
      "Session management and JWT handling",
      "Social login integration (Google, GitHub, etc.)",
      "Protected routes and middleware for secure navigation",
    ],

    challenges: [
      "Implementing secure session handling and token management",
      "Designing a fully responsive and user-friendly dashboard UI",
      "Managing role-based access and route protection",
      "Handling authentication state across server and client",
    ],

    futureImprovements: [
      "Add multi-factor authentication (MFA) for enhanced security",
      "Implement user activity logs and audit trails",
      "Add account management features (password reset, profile update)",
      "Integrate analytics dashboard for user insights",
    ],
  },
  {
    id: "scholarstream",
    title: "ScholarStream",
    category: "Full Stack",
    shortDescription:
      "A full-stack scholarship management platform helping students discover and apply for educational funding opportunities.",
    fullDescription:
      "ScholarStream is a full-stack scholarship discovery and management platform. The application helps students find relevant scholarships based on their profile, track application deadlines, and manage their scholarship applications in one centralized location. Features include advanced search filters, personalized recommendations, application status tracking, deadline reminders, and a robust backend API for data management.",
    image: "/projects/scholar.png",
    techStack: {
      client: [
        "React.js",
        "Tailwind CSS",
        "React Router",
        "Context API",
        "Axios",
        "React Hook Form",
      ],
      server: [
        "Node.js",
        "Express.js",
        "MongoDB",
        "Firebase Auth",
        "JWT",
        "Cors",
      ],
    },
    liveUrl: "https://scholarstream-2cf8d.web.app",
    githubUrl: {
      client: "https://github.com/nasirpatwary/scholar-stream-client",
      server: "https://github.com/nasirpatwary/scholar-stream-server",
    },
    features: [
      "User authentication with Firebase and JWT tokens",
      "Advanced scholarship search with filters",
      "Application tracking dashboard",
      "Deadline reminders and notifications",
      "RESTful API with CRUD operations",
      "Responsive design for all devices",
    ],
    challenges: [
      "Building an efficient search and filtering system for large scholarship databases",
      "Implementing secure authentication flow between client and server",
      "Creating a responsive dashboard for tracking multiple applications",
      "Designing RESTful API endpoints with proper error handling",
    ],
    futureImprovements: [
      "Add AI-powered scholarship matching based on user profiles",
      "Implement email notifications for upcoming deadlines",
      "Create a document management system for application materials",
      "Add community features for scholarship tips and advice",
    ],
  },
  {
    id: "financial",
    title: "Financial",
    category: "Full Stack",
    shortDescription:
      "A full-stack personal finance management application for tracking expenses, budgets, and financial goals.",
    fullDescription:
      "Financial is a comprehensive full-stack personal finance application that helps users take control of their money. The app provides tools for expense tracking, budget creation, financial goal setting, and spending analysis. Users can visualize their financial data through interactive charts and reports, set spending limits, and receive insights about their financial habits. The backend handles secure data storage and complex financial calculations.",
    image: "/projects/financial.png",
    techStack: {
      client: [
        "React.js",
        "Recharts",
        "React Router",
        "CSS3",
        "Axios",
        "React Toastify",
      ],
      server: ["Node.js", "Express.js", "MongoDB", "Firebase Auth", "Cors"],
    },
    liveUrl: "https://assignment-10-7765c.web.app",
    githubUrl: {
      client:
        "https://github.com/nasirpatwary/freelance-client-update-assignment-10",
      server:
        "https://github.com/nasirpatwary/freelance-server-update-assignment-10",
    },
    features: [
      "Secure user authentication system",
      "Interactive expense and income tracking",
      "Budget creation and management",
      "Data visualization with Recharts",
      "Financial goal tracking",
      "RESTful API for data operations",
    ],
    challenges: [
      "Implementing secure data storage for sensitive financial information",
      "Creating interactive and responsive data visualizations",
      "Building a categorization system for expense tracking",
      "Designing an intuitive interface for complex financial data entry",
    ],
    futureImprovements: [
      "Add bank account integration for automatic transaction import",
      "Implement recurring expense and income tracking",
      "Create export functionality for financial reports",
      "Add multi-currency support for international users",
    ],
  },
  {
    id: "care-xyz",
    title: "Care.xyz",
    category: "Full Stack",
    shortDescription:
      "A full-stack care services platform connecting families with child care, daycare, and elderly home care providers.",
    fullDescription:
      "Care.xyz is a comprehensive full-stack care services platform that bridges the gap between families and care providers. The platform offers two main service categories: Child Care & Daycare services for busy parents, and Elderly Home Care services for families seeking quality care for their loved ones. Features include provider search with filters, booking management, reviews and ratings, and secure communication between families and caregivers. Built with Next.js for the frontend and a robust Node.js backend.",
    image: "/projects/care.png",
    techStack: {
      client: [
        "Next.js",
        "React",
        "Tailwind CSS",
        "React Hook Form",
        "Framer Motion",
      ],
      server: ["Node.js", "Express.js", "MongoDB", "NextAuth", "Vercel"],
    },
    liveUrl: "https://next-assignment-self.vercel.app",
    githubUrl: {
      client: "https://github.com/nasirpatwary/next-baby-care-assginment-12",
      server: "https://github.com/nasirpatwary/next-baby-care-assginment-12",
    },
    features: [
      "Dual-service platform for childcare and elderly care",
      "Provider search and matching system",
      "Booking and scheduling management",
      "Reviews and ratings system",
      "User authentication and authorization",
      "Server-side rendering with Next.js",
    ],
    challenges: [
      "Building a dual-service platform architecture for different care types",
      "Implementing a robust search and matching algorithm for care providers",
      "Creating a secure booking and scheduling system",
      "Designing trust-building features like verification badges and reviews",
    ],
    futureImprovements: [
      "Add real-time chat functionality between families and providers",
      "Implement background check integration for care providers",
      "Create a mobile app for on-the-go booking management",
      "Add payment processing for seamless transactions",
    ],
  },
  {
    id: "smart-library-system",
    title: "Smart Library Management System",
    category: "AI SaaS / Frontend",

    shortDescription:
      "A modern digital library platform for managing books, users, and borrowing activities with real-time tracking.",

    fullDescription:
      "Smart Library Management System is a full-stack web application designed to simplify library operations for students, librarians, and administrators. The platform allows users to browse books, borrow and return items, and manage personal reading history. Admins can manage inventory, track book availability, and monitor user activity. Built with Next.js and Node.js, the system ensures fast performance, secure authentication, and a seamless user experience across devices.",

    image: "/projects/ai-pawerd.png",

    techStack: {
      client: [
        "Next.js",
        "React",
        "TypeScript",
        "Tailwind CSS",
        "Shadcn/ui",
        "Framer Motion",
      ],
      server: ["Vercel"],
    },

    liveUrl: "https://your-library-app.vercel.app",

    githubUrl: {
      client: "https://github.com/nasirpatwary/create-new-library",
    },

    features: [
      "Browse and search books by title, author, and category",
      "User authentication and personalized dashboard",
      "Borrow and return books with real-time availability tracking",
      "Admin panel for managing books, users, and transactions",
      "Book details page with ratings and descriptions",
      "Responsive UI for mobile, tablet, and desktop",
      "Smooth animations and modern UI design",
    ],

    challenges: [
      "Designing an efficient book search and filtering system",
      "Managing real-time book availability and borrowing logic",
      "Ensuring secure authentication and user role management",
      "Handling large datasets for books and users efficiently",
      "Maintaining clean UI while handling complex data flows",
    ],

    futureImprovements: [
      "Add online book reading (PDF/eBook viewer)",
      "Implement book reservation and waitlist system",
      "Add fine calculation for late returns",
      "Integrate barcode/QR code scanning for books",
      "AI-based book recommendation system",
      "Email notifications for due dates and reminders",
    ],
  },
];

export function getProjectById(id: string): Project | undefined {
  return projects.find((project) => project.id === id);
}

export function getAllProjectIds(): string[] {
  return projects.map((project) => project.id);
}
