import { Project, Skill, Article, CodingProfile, Experience, RoadmapItem, AboutStats, Education, Achievement, Testimonial } from './types';

export const RESUME_LINK = "/resume.pdf"; // Mock link

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: "NeuroGen Vision",
    description: "Real-time object detection and segmentation pipeline using YOLOv8 and TensorRT for autonomous edge devices. Capable of processing 60 FPS on Jetson Nano.",
    techStack: ["PyTorch", "OpenCV", "TensorRT", "CUDA"],
    githubUrl: "#",
    liveUrl: "#",
    imageUrl: "https://picsum.photos/seed/ai1/600/400"
  },
  {
    id: 2,
    title: "RAG Knowledge Brain",
    description: "Enterprise-grade Retrieval Augmented Generation system utilizing LangChain, Pinecone vector DB, and Gemini Pro. Includes citation tracking and hallucination safeguards.",
    techStack: ["LangChain", "Python", "Pinecone", "Gemini API"],
    githubUrl: "#",
    liveUrl: "#",
    imageUrl: "https://picsum.photos/seed/ai2/600/400"
  },
  {
    id: 3,
    title: "AlphaTrade LSTM",
    description: "Time-series forecasting model for financial markets using LSTM networks with sentiment analysis from news feeds. Achieved 65% directional accuracy on crypto pairs.",
    techStack: ["TensorFlow", "Keras", "FastAPI", "Pandas"],
    githubUrl: "#",
    liveUrl: "#",
    imageUrl: "https://picsum.photos/seed/ai3/600/400"
  },
  {
    id: 4,
    title: "VoiceSynth Clone",
    description: "Zero-shot text-to-speech engine capable of voice cloning with 3 seconds of audio reference using diffusion models. Features multi-language support.",
    techStack: ["Torchaudio", "Diffusers", "React", "Python"],
    githubUrl: "#",
    liveUrl: "#",
    imageUrl: "https://picsum.photos/seed/ai4/600/400"
  },
  {
    id: 5,
    title: "Neural Art Generator",
    description: "A GAN-based application that generates unique abstract art pieces based on emotion keywords provided by the user.",
    techStack: ["PyTorch", "GANs", "Flask", "React"],
    githubUrl: "#",
    liveUrl: "#",
    imageUrl: "https://picsum.photos/seed/ai5/600/400"
  },
  {
    id: 6,
    title: "Smart Traffic OS",
    description: "Computer vision system for optimizing traffic light timings based on real-time vehicle density and ambulance detection.",
    techStack: ["YOLOv7", "OpenCV", "IoT", "MQTT"],
    githubUrl: "#",
    liveUrl: "#",
    imageUrl: "https://picsum.photos/seed/ai6/600/400"
  },
  {
    id: 7,
    title: "MediScan AI",
    description: "Mobile application for preliminary skin condition diagnosis using convolutional neural networks deployed via TensorFlow Lite.",
    techStack: ["TensorFlow Lite", "React Native", "Python"],
    githubUrl: "#",
    liveUrl: "#",
    imageUrl: "https://picsum.photos/seed/ai7/600/400"
  },
  {
    id: 8,
    title: "CodeWhisperer Lite",
    description: "A VS Code extension that provides code completions and docstring generation using a fine-tuned LLaMA model.",
    techStack: ["TypeScript", "HuggingFace", "VS Code API"],
    githubUrl: "#",
    liveUrl: "#",
    imageUrl: "https://picsum.photos/seed/ai8/600/400"
  }
];

export const SKILLS: Skill[] = [
  {
    category: "Deep Learning",
    items: [
      { name: "PyTorch", level: 95 },
      { name: "TensorFlow", level: 85 },
      { name: "Computer Vision", level: 90 },
      { name: "NLP / LLMs", level: 92 }
    ]
  },
  {
    category: "MLOps & Cloud",
    items: [
      { name: "Docker & K8s", level: 85 },
      { name: "AWS SageMaker", level: 80 },
      { name: "MLflow / W&B", level: 88 },
      { name: "CI/CD Pipelines", level: 82 }
    ]
  },
  {
    category: "Languages & Tools",
    items: [
      { name: "Python", level: 98 },
      { name: "C++ (CUDA)", level: 75 },
      { name: "React / TS", level: 85 },
      { name: "SQL / NoSQL", level: 90 }
    ]
  }
];

export const EXPERIENCES: Experience[] = [
  {
    id: 1,
    role: "AI & Automation Engineer(Freelance)",
    company: "Vignesh Fine Arts",
    period: "Jan 2025 - Present (11 Months)",
    description: "Designed and implemented AI-driven automation solutions and digital workflows to improve operational efficiency, streamline business processes, and enhance customer engagement for a small business.",
    achievements: [
        "Developed AI-powered tools to automate order tracking, inventory management, and reporting, reducing manual effort by 60%.",
        "Implemented digital marketing automation workflows, including email campaigns and lead tracking, increasing customer engagement by 25%.",
        "Built dashboards to visualize business performance metrics, enabling data-driven decisions and process improvements.",
        "Integrated AI-based analytics to predict sales trends and optimize inventory, reducing waste and improving profitability.",
        "Collaborated directly with stakeholders to identify workflow bottlenecks and deliver practical, scalable automation solutions."
    ]
  },
  {
    id: 2,
    role: "Junior Web Developer",
    company: "Brandma Creative Agency",
    period: "Jan 2024 - Jan 2025 (1 Year)",
    description:  "Contributed to the development and maintenance of responsive, SEO-friendly web applications by implementing features, integrating APIs, optimizing performance, and improving overall user experience.",
    achievements: [
      "Optimized frontend performance by refactoring code and compressing assets, reducing page load time by 85% and improving SEO scores.",
      "Developed and deployed responsive web pages, improving cross-device compatibility and overall user experience.",
      "Implemented on-page SEO best practices (semantic HTML, meta tags, structured content, image optimization), increasing search visibility and accessibility.",
      "Integrated REST APIs to display dynamic data, reducing manual content updates and improving data accuracy.",
      "Collaborated with designers and backend developers to deliver SEO-optimized features aligned with project requirements and deadlines.",
      "Identified and resolved UI/UX and SEO issues through performance audits and stakeholder feedback, improving site quality and usability."
    ]
  },
  {
    id: 3,
    role: "Embedded System Engineer Intern",
    company: "Splen Technologies Pvt Ltd",
    period: "2022 - Summer",
    description: "Built and deployed 2 Embedded Application advanced Tools.",
    achievements: [
      "deployed 2 embedded application tools integrating sensor data acquisition and real-time processing."
    ]
  }
];

export const EDUCATION: Education[] = [
  {
    id: 1,
    degree: "B.Tech. in Computer Science (ML & AI Specialization)",
    institution: "Lovely Professional University",
    period: "2020 - 2024",
    description: "Focused on Advanced Machine Learning, Computer Vision, and Distributed Systems. Thesis on 'Efficient Fine-tuning of LLMs'."
  },
  
];

export const ARTICLES: Article[] = [
  {
    id: 1,
    title: "Demystifying Transformers",
    description: "A mathematical breakdown of the attention mechanism and how it revolutionized NLP tasks.",
    excerpt: "Attention is all you need: A deep dive into Query, Key, and Value matrices.",
    date: "Nov 10, 2023",
    readTime: "10 min read",
    tags: ["NLP", "Deep Learning"],
    link: "#"
  },
  {
    id: 2,
    title: "Optimizing Inference",
    description: "Techniques for model quantization and pruning to run LLMs on consumer hardware.",
    excerpt: "Running 7B parameter models on your laptop using 4-bit quantization.",
    date: "Oct 05, 2023",
    readTime: "8 min read",
    tags: ["MLOps", "Hardware"],
    link: "#"
  },
  {
    id: 3,
    title: "Agents in Production",
    description: "Building reliable autonomous agents that can use tools and reason through complex tasks.",
    excerpt: "Moving beyond simple chatbots to action-taking autonomous systems.",
    date: "Sep 15, 2023",
    readTime: "6 min read",
    tags: ["LLMs", "LangChain"],
    link: "#"
  }
];

export const PROFILES: CodingProfile[] = [
  {
    platform: "Kaggle",
    username: "ai_grandmaster",
    stats: "Top 1% | 2 Gold Medals",
    url: "#",
    icon: "Award",
    color: "#20beff" // Blue
  },
  {
    platform: "HuggingFace",
    username: "model_architect",
    stats: "500+ Model Downloads",
    url: "#",
    icon: "Github", // Using Github icon as placeholder or generic
    color: "#ffad20" // Yellow/Orange
  },
  {
    platform: "GitHub",
    username: "neural_coder",
    stats: "1.5k Stars | OSS Contributor",
    url: "#",
    icon: "Code",
    color: "#ffffff" // White
  },
  {
    platform: "LeetCode",
    username: "algo_optimizer",
    stats: "Max Rating: 2100",
    url: "#",
    icon: "Terminal",
    color: "#ffa116" // Orange
  }
];

export const ROADMAP_ITEMS: RoadmapItem[] = [
  {
    id: 1,
    title: "AI Personal Assistant",
    status: "completed",
    description: "A desktop voice assistant capable of executing system commands and retrieving real-time web data.",
    techStack: ["Python", "Whisper", "GPT-4", "PyAudio"],
    date: "Completed: Dec 2023",
    features: ["Voice Activation", "System Control", "Natural Conversation"]
  },
  {
    id: 2,
    title: "E-Commerce Recommender",
    status: "completed",
    description: "Collaborative filtering recommendation engine for a mock e-commerce platform.",
    techStack: ["Scikit-learn", "Flask", "Redis"],
    date: "Completed: Nov 2023",
    features: ["User-Item Matrix", "Real-time Suggestions", "Cold Start Handling"]
  }
];

export const ACHIEVEMENTS: Achievement[] = [
  {
    id: 1,
    title: "Global AI Hackathon Winner",
    organization: "DevPost & Google",
    date: "Dec 2023",
    description: "Secured 1st place out of 500+ global teams by building an autonomous disaster response agent.",
    icon: "Trophy"
  },
  {
    id: 2,
    title: "Google Cloud Certified",
    organization: "Google Cloud",
    date: "Aug 2023",
    description: "Professional Machine Learning Engineer certification demonstrating expertise in model deployment and MLOps.",
    icon: "Award"
  },
  {
    id: 3,
    title: "Top Contributor",
    organization: "LangChain OSS",
    date: "2023",
    description: "Merged 15+ PRs optimizing vector store retrievers and adding new memory modules.",
    icon: "Star"
  },
  {
    id: 4,
    title: "Tech Speaker",
    organization: "AI Summit 2023",
    date: "Nov 2023",
    description: "Delivered a keynote on 'The Future of Agentic Workflows' to an audience of 200+ engineers.",
    icon: "Mic"
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Chen",
    role: "CTO",
    company: "TechFlow Dynamics",
    image: "https://picsum.photos/seed/sarah/200/200",
    quote: "Vignesh is a rare breed of engineer who understands both the theoretical depth of AI and the practical nuances of shipping production code. The RAG system he built increased our query accuracy by 40%."
  },
  {
    id: 2,
    name: "Michael Ross",
    role: "Lead Data Scientist",
    company: "DataSphere",
    image: "https://picsum.photos/seed/michael/200/200",
    quote: "Working with Vignesh was a highlight of the year. His ability to optimize inference pipelines allowed us to deploy complex vision models on edge devices we thought were too weak."
  },
  {
    id: 3,
    name: "Emily Zhang",
    role: "Product Manager",
    company: "Innovate AI",
    image: "https://picsum.photos/seed/emily/200/200",
    quote: "Beyond technical skills, Vignesh brings a creative problem-solving mindset. He doesn't just build what is asked; he improves the product vision with technical insights."
  }
];

export const ABOUT_STATS: AboutStats[] = [
  { 
    label: "Years Experience", 
    value: "1+", 
    icon: "Calendar",
    detailTitle: "Career Timeline",
    details: {
      headers: ["Year", "Role", "Company/Context"],
      rows: [
        ["2025", "Vignesh Fine Arts", "AI & Automation Engineer"],
        ["2024", "Web Developer Intern", "BrandMa Creative Agency"],
        ["2022", "Embedded Engineer Intern", "Splen Technologies Pvt Ltd (Remote)"]
      ]
    }
  },
  { 
    label: "Projects Shipped", 
    value: "12+", 
    icon: "Rocket",
    detailTitle: "Key Projects Breakdown",
    details: {
      headers: ["Project Name", "Domain", "Status"],
      rows: [
        ["NeuroGen Vision", "Computer Vision", "Production"],
        ["RAG Brain", "NLP/LLM", "Production"],
        ["AlphaTrade", "FinTech", "Beta"],
        ["VoiceSynth", "Audio Gen", "Prototype"],
        ["Neural Art", "GenAI", "Live"]
      ]
    }
  },
  { 
    label: "AI Models Deployed", 
    value: "4+",
    icon: "Cpu",
    detailTitle: "Deployed Model Registry",
    details: {
      headers: ["Model Name", "Architecture", "Environment"],
      rows: [
        ["DefectDet-V8", "YOLOv8", "Jetson Nano (Edge)"],
        ["SupportBot-7B", "Llama-2-7b", "AWS Inferentia"],
        ["TrendCast", "LSTM", "GCP Vertex AI"],
        ["DocuSearch", "All-MiniLM", "Pinecone/Serverless"],
        ["VoiceCloner", "Diffusers", "HuggingFace Spaces"]
      ]
    }
  },
  { 
    label: "Hours Saved per month", 
    value: "500+", 
    icon: "Zap",
    detailTitle: "Automation Impact Analysis",
    details: {
      headers: ["Automation Task", "Time Saved"],
      rows: [
        ["Data Cleaning Pipeline", "15 hrs/week"],
        ["Auto-Documentation", "5 hrs/week"],
        ["CI/CD Model Deploy", "8 hrs/release"],
        ["Customer Support Bot", "20 hrs/week"],
        ["Report Generation", "4 hrs/week"]
      ]
    }
  }
];

export const getPortfolioContext = () => {
  return JSON.stringify({
    profile: "Vignesh Kathavarayan",
    role: "Web Developer | AI & Automation Engineer",
    bio: "Architecting intelligent systems with Generative AI, Computer Vision, and scalable MLOps pipelines.",
    projects: PROJECTS,
    skills: SKILLS,
    experience: EXPERIENCES,
    education: EDUCATION,
    articles: ARTICLES,
    achievements: ACHIEVEMENTS,
    socials: PROFILES,
    stats: ABOUT_STATS
  }, null, 2);
};