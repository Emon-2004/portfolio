export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  longDescription: string;
  tags: string[];
  techStack: string[];
  githubUrl: string;
  liveUrl?: string;
  highlights: string[];
  challenges: string;
  improvements: string;
  category: "Full-Stack" | "Databases" | "AI/ML" | "Systems";
}

export const portfolioData: {
  personal: {
    name: string;
    headline: string;
    role: string;
    shortBio: string;
    extendedBio: string;
    location: string;
    email: string;
    phone: string;
    statusText: string;
    github: string;
    linkedin: string;
    resumeUrl: string;
    interests: string[];
    hobbies: string[];
  };
  education: {
    degree: string;
    institution: string;
    period: string;
    cgpa: string;
    coursework: string[];
  };
  skills: {
    frontend: string[];
    backend: string[];
    databases: string[];
    tools: string[];
  };
  projects: Project[];
} = {
  personal: {
    name: "Md Saiful Islam Emon",
    headline: "Md Saiful Islam Emon.",
    role: "Full-Stack, AI & Database Builder",
    shortBio: "Computer Science & Engineering student at East West University with a sharp focus on modern full-stack web architectures, granular PostgreSQL database design, Row Level Security, and machine learning systems.",
    extendedBio: "I am a passionate software developer who loves bridging the gap between rigorous database models and sleek user interfaces. I thrive on solving complex engineering puzzles—from designing consolidated PostgreSQL schemas with ironclad Row-Level Security (RLS) policies to orchestrating resilient full-stack applications with Playwright end-to-end testing.",
    location: "Dhaka / Narayanganj, Bangladesh",
    email: "Md_Saiful_Islam_Emon@proton.me",
    phone: "+880 1614-795566",
    statusText: "Open to Internships & Software Roles",
    github: "https://github.com/Emon-2004",
    linkedin: "https://linkedin.com/in/md-saiful-islam-emon-6765a8345",
    resumeUrl: "/resume.pdf",
    interests: ["High-performance Web Apps", "Database Engineering & RLS", "Applied Machine Learning", "Distributed Architecture"],
    hobbies: ["Chess & Problem Solving", "Tech Blogs", "Exploring Open-Source", "Competitive Coding"],
  },
  education: {
    degree: "B.Sc. in Computer Science and Engineering",
    institution: "East West University, Dhaka",
    period: "2023 – 2027 (Expected)",
    cgpa: "3.48 / 4.00",
    coursework: [
      "Database Systems (CSE412)",
      "Artificial Intelligence (CSE366)",
      "Algorithms & Data Structures",
      "Software Engineering & QA",
      "Operating Systems"
    ]
  },
  skills: {
    frontend: ["React.js", "Next.js", "Tailwind CSS", "JavaScript (ES6+)", "HTML5 / Canvas", "CSS3"],
    backend: ["Node.js", "Express.js", "REST APIs", "Playwright Testing", "Python"],
    databases: ["PostgreSQL", "Supabase", "Row Level Security (RLS)", "MongoDB", "SQL Schema Design"],
    tools: ["Git & GitHub", "Figma", "Linux CLI", "VS Code", "Vercel", "Postman"]
  },
  projects: [
    {
      id: "nexusbuild",
      title: "NexusBuild",
      subtitle: "Real Estate Client Portal for Reliance Housing Ltd.",
      category: "Full-Stack",
      description: "A comprehensive client and admin enterprise portal featuring AI chatbots, interactive maps, and bulletproof security.",
      longDescription: "Built for Reliance Housing Ltd., NexusBuild is a production-grade enterprise real estate client portal. As the primary database architect and QA engineer, I consolidated user roles into unified schema tables, implemented strict Row-Level Security (RLS) policies, and validated data integrity across the system.",
      tags: ["React.js", "Node.js", "Supabase", "PostgreSQL", "Playwright"],
      techStack: ["React.js", "Node.js", "Express.js", "Supabase", "PostgreSQL", "Figma", "Playwright"],
      githubUrl: "https://github.com/Emon-2004/NexusBuild",
      liveUrl: "https://nexusbuild-demo.vercel.app",
      highlights: [
        "Architected consolidated registration tables with constraints and stored procedures in Supabase PostgreSQL.",
        "Authored and executed Playwright end-to-end test suites comprising 191 high-priority security test cases.",
        "Integrated interactive map-based property search and real-time client communication dashboard."
      ],
      challenges: "Ensuring zero unauthorized data exposure between tenants and admins. Solved by implementing granular PostgreSQL Row-Level Security (RLS) policies tested comprehensively via SQL editor scripts and automated Playwright suites.",
      improvements: "Plan to add automated 3D virtual tour rendering and contract e-signature verification directly on the client dashboard."
    },
    {
      id: "user-auth",
      title: "Secure Authentication & RLS System",
      subtitle: "Role-Based Access Control Architecture",
      category: "Databases",
      description: "Robust user authentication engine engineered with PostgreSQL schema constraints and role isolation policies.",
      longDescription: "An advanced backend architecture designed to showcase strict zero-trust principles in multi-user applications. Implemented password hashing best practices, session validation, and database-level enforcement so regular users can never query administrative records.",
      tags: ["PostgreSQL", "Supabase", "Security", "SQL", "RLS"],
      techStack: ["PostgreSQL", "Supabase", "SQL", "Row Level Security", "TypeScript"],
      githubUrl: "https://github.com/Emon-2004",
      highlights: [
        "Enforced schema constraint validation preventing SQL injection and privilege escalation.",
        "Designed strict isolation rules where users can only inspect their owned records.",
        "Created custom administrative override triggers with audit trail logging."
      ],
      challenges: "Preventing privilege escalation when users update their profile metadata. Solved by decoupling sensitive role assignment columns from publicly accessible update APIs using database triggers.",
      improvements: "Integrate WebAuthn / Passkey support for hardware-token passwordless authentication."
    },
    {
      id: "jarvis-assistant",
      title: "JARVIS Voice Assistant",
      subtitle: "Intelligent Audio Command & Canvas UI",
      category: "AI/ML",
      description: "Interactive voice assistant featuring real-time state visualization with an animated HTML Canvas interface.",
      longDescription: "A smart voice recognition assistant built in Python and JavaScript. Features dynamic audio waveform reactions that dynamically switch between idle, listening, processing, and speaking animations on an HTML canvas.",
      tags: ["Python", "JavaScript", "HTML Canvas", "Speech Recognition"],
      techStack: ["Python", "JavaScript", "HTML5 Canvas", "SpeechRecognition", "Pyttsx3"],
      githubUrl: "https://github.com/Emon-2004/Jarvis-Project-CSE366",
      highlights: [
        "Engineered smooth canvas particle animations for real-time visual feedback based on assistant states.",
        "Integrated speech-to-text NLP parsers capable of handling complex multivariable queries.",
        "Resolved intricate song title parsing bugs and dictionary query mismatches."
      ],
      challenges: "Audio latency and parsing inaccuracies when users spoke quickly. Mitigated with adaptive phrase-time limits and a fuzzy search mapping layer.",
      improvements: "Hooking up local LLM (Ollama / Llama 3) for offline autonomous conversational intelligence."
    },
    {
      id: "network-intrusion",
      title: "Network Intrusion Detection System",
      subtitle: "Machine Learning Classifier",
      category: "AI/ML",
      description: "Applied machine learning classifiers benchmarked to identify malicious cyber threats in network packets.",
      longDescription: "Group research and engineering project analyzing network traffic datasets. Benchmarked several classification algorithms (Decision Trees, SVM, Random Forest) to identify DDoS, brute force, and probe attacks.",
      tags: ["Python", "Machine Learning", "Random Forest", "Data Analysis"],
      techStack: ["Python", "Scikit-Learn", "Pandas", "NumPy", "Matplotlib"],
      githubUrl: "https://github.com/Emon-2004",
      highlights: [
        "Benchmarked multi-class classifiers on large-scale network traffic data.",
        "Achieved 88-90% detection accuracy using an optimized Random Forest architecture.",
        "Engineered feature selection pipelines reducing dimensionality by 40% while preserving accuracy."
      ],
      challenges: "Severe class imbalance with normal traffic vastly outnumbering attack vectors. Handled with SMOTE oversampling and tailored recall metrics.",
      improvements: "Deploying model into a live packet-sniffing stream using FastAPI for real-time alerting."
    }
  ]
};
