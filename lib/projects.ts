export interface Project {
  id: string
  title: string
  shortDescription: string
  fullDescription: string
  image: string
  techStack: {
    client: string[]
    server: string[]
  }
  liveUrl: string
  githubUrl: {
    client: string
    server: string
  }
  challenges: string[]
  futureImprovements: string[]
  features: string[]
}

export const projects: Project[] = [
  {
    id: "scholarstream",
    title: "ScholarStream",
    shortDescription: "A full-stack scholarship management platform helping students discover and apply for educational funding opportunities.",
    fullDescription: "ScholarStream is a full-stack scholarship discovery and management platform. The application helps students find relevant scholarships based on their profile, track application deadlines, and manage their scholarship applications in one centralized location. Features include advanced search filters, personalized recommendations, application status tracking, deadline reminders, and a robust backend API for data management.",
    image: "/projects/scholar.png",
    techStack: {
      client: ["React.js", "Tailwind CSS", "React Router", "Context API", "Axios", "React Hook Form"],
      server: ["Node.js", "Express.js", "MongoDB", "Firebase Auth", "JWT", "Cors"]
    },
    liveUrl: "https://scholarstream-2cf8d.web.app",
    githubUrl: {
      client: "https://github.com/nasirpatwary/scholar-stream-client",
      server: "https://github.com/nasirpatwary/scholar-stream-server"
    },
    features: [
      "User authentication with Firebase and JWT tokens",
      "Advanced scholarship search with filters",
      "Application tracking dashboard",
      "Deadline reminders and notifications",
      "RESTful API with CRUD operations",
      "Responsive design for all devices"
    ],
    challenges: [
      "Building an efficient search and filtering system for large scholarship databases",
      "Implementing secure authentication flow between client and server",
      "Creating a responsive dashboard for tracking multiple applications",
      "Designing RESTful API endpoints with proper error handling"
    ],
    futureImprovements: [
      "Add AI-powered scholarship matching based on user profiles",
      "Implement email notifications for upcoming deadlines",
      "Create a document management system for application materials",
      "Add community features for scholarship tips and advice"
    ]
  },
  {
    id: "financial",
    title: "Financial",
    shortDescription: "A full-stack personal finance management application for tracking expenses, budgets, and financial goals.",
    fullDescription: "Financial is a comprehensive full-stack personal finance application that helps users take control of their money. The app provides tools for expense tracking, budget creation, financial goal setting, and spending analysis. Users can visualize their financial data through interactive charts and reports, set spending limits, and receive insights about their financial habits. The backend handles secure data storage and complex financial calculations.",
    image: "/projects/financial.png",
    techStack: {
      client: ["React.js", "Recharts", "React Router", "CSS3", "Axios", "React Toastify"],
      server: ["Node.js", "Express.js", "MongoDB", "Firebase Auth", "Cors"]
    },
    liveUrl: "https://assignment-10-7765c.web.app",
    githubUrl: {
      client: "https://github.com/nasirpatwary/freelance-client-update-assignment-10",
      server: "https://github.com/nasirpatwary/freelance-server-update-assignment-10"
    },
    features: [
      "Secure user authentication system",
      "Interactive expense and income tracking",
      "Budget creation and management",
      "Data visualization with Recharts",
      "Financial goal tracking",
      "RESTful API for data operations"
    ],
    challenges: [
      "Implementing secure data storage for sensitive financial information",
      "Creating interactive and responsive data visualizations",
      "Building a categorization system for expense tracking",
      "Designing an intuitive interface for complex financial data entry"
    ],
    futureImprovements: [
      "Add bank account integration for automatic transaction import",
      "Implement recurring expense and income tracking",
      "Create export functionality for financial reports",
      "Add multi-currency support for international users"
    ]
  },
  {
    id: "care-xyz",
    title: "Care.xyz",
    shortDescription: "A full-stack care services platform connecting families with child care, daycare, and elderly home care providers.",
    fullDescription: "Care.xyz is a comprehensive full-stack care services platform that bridges the gap between families and care providers. The platform offers two main service categories: Child Care & Daycare services for busy parents, and Elderly Home Care services for families seeking quality care for their loved ones. Features include provider search with filters, booking management, reviews and ratings, and secure communication between families and caregivers. Built with Next.js for the frontend and a robust Node.js backend.",
    image: "/projects/care.png",
    techStack: {
      client: ["Next.js", "React", "Tailwind CSS", "React Hook Form", "Framer Motion"],
      server: ["Node.js", "Express.js", "MongoDB", "NextAuth", "Vercel"]
    },
    liveUrl: "https://next-assignment-self.vercel.app",
    githubUrl: {
      client: "https://github.com/nasirpatwary/next-baby-care-assginment-12",
      server: "https://github.com/amer/care-xyz-server"
    },
    features: [
      "Dual-service platform for childcare and elderly care",
      "Provider search and matching system",
      "Booking and scheduling management",
      "Reviews and ratings system",
      "User authentication and authorization",
      "Server-side rendering with Next.js"
    ],
    challenges: [
      "Building a dual-service platform architecture for different care types",
      "Implementing a robust search and matching algorithm for care providers",
      "Creating a secure booking and scheduling system",
      "Designing trust-building features like verification badges and reviews"
    ],
    futureImprovements: [
      "Add real-time chat functionality between families and providers",
      "Implement background check integration for care providers",
      "Create a mobile app for on-the-go booking management",
      "Add payment processing for seamless transactions"
    ]
  }
]

export function getProjectById(id: string): Project | undefined {
  return projects.find(project => project.id === id)
}

export function getAllProjectIds(): string[] {
  return projects.map(project => project.id)
}
