// Refined content for experience modals
export const experienceDetails = {
    gdscLeadership: {
        title: "AI/ML Head",
        organization: "Google Developer Student Club (GDSC)",
        period: "2023 - 2024",
        description: `As the AI/ML Head of Google Developer Student Club on campus, I spearheaded initiatives to democratize artificial intelligence education and foster a vibrant tech community among students.

I designed and conducted comprehensive workshops on AI, Machine Learning, and Generative AI, breaking down complex concepts into digestible learning modules for over 100 junior students. These sessions covered fundamental concepts, hands-on coding exercises, and real-world applications of AI technologies.

My role extended beyond teaching—I mentored peers through their AI projects, organized guest lectures with industry professionals, and coordinated study groups that explored cutting-edge research papers. I also represented our club at inter-college tech events, showcasing student projects and building connections with the broader developer community.

Through this leadership position, I learned the importance of making AI accessible to everyone, regardless of their technical background. The experience honed my ability to explain complex technical concepts clearly and inspired many students to pursue careers in AI.`,
        highlights: [
            "Led AI/ML initiatives as GDSC Head",
            "Conducted workshops for 100+ students on AI, ML, and GenAI",
            "Organized guest lectures and tech events",
            "Mentored peers on AI projects and research",
            "Built a thriving AI learning community on campus"
        ]
    },

    education: {
        title: "Bachelor of Technology in Computer Science",
        organization: "MGM's College of Engineering",
        period: "2020 - 2024",
        description: `My BTech journey was characterized by active participation in the tech ecosystem beyond classroom learning. I immersed myself in various competitions, workshops, and community initiatives that shaped my understanding of real-world software engineering.

As part of the Hackathon Management Committee, I gained firsthand experience in organizing large-scale coding events, from logistics planning to mentoring participants and judging submissions. This role taught me about event management, team coordination, and the dynamics of competitive programming.

I actively participated in the Google Solution Challenge, which pushed me to think about technology as a tool for social impact. Though we couldn't submit the final project, the experience of brainstorming solutions for real-world problems was invaluable.

Throughout my degree, I attended diverse technical workshops covering IoT, Machine Learning, Deep Learning, Web Development, Computer Networking, AWS, and Data Analytics. Each workshop expanded my technical toolkit and exposed me to different domains within computer science.

A memorable highlight was attending an International Conference on Data Analytics, where I engaged with researchers presenting cutting-edge work across AI domains. Asking questions during sessions and networking with practitioners gave me insights into the research-to-industry pipeline.`,
        highlights: [
            "Graduated with focus on AI and Deep Learning",
            "Member of Hackathon Management Committee",
            "Participated in Google Solution Challenge",
            "Attended International Data Analytics Conference",
            "Completed workshops in IoT, ML, DL, Web Dev, AWS, and Data Analytics"
        ]
    },

    aksharaPlus: {
        title: "AI Engineering Intern",
        organization: "AksharaPlus",
        period: "2024",
        description: `At AksharaPlus, I contributed to building an intelligent educational platform that delivers personalized study materials, courses, and assessments to students.

My primary project involved developing an Auto-Question Generation system for SQL assessments. Working in a team of three (with Utkarsha and Shradha), we engineered a dynamic question generation engine that creates unique SQL queries by intelligently replacing placeholders in predefined templates. This system generates both questions and their corresponding answers, ensuring consistency and accuracy.

To ensure reliability, I implemented comprehensive testing using pytest, validating question generation logic, answer correctness, and edge cases. This work directly contributed to the platform's ability to scale personalized SQL learning experiences for thousands of students.`,
        highlights: [
            "Built Auto-Question Generation system for SQL",
            "Collaborated in 3-member engineering team",
            "Implemented pytest testing suite for quality assurance",
            "Created template-based dynamic question engine",
            "Contributed to personalized learning platform"
        ],
        technologies: ["Python", "SQL", "pytest", "Question Generation", "Educational Technology"]
    },

    genaiKit: {
        title: "AI Engineer Intern",
        organization: "GenAIKit Solutions (Jain)",
        period: "2024 - Present",
        description: `Currently working at GenAIKit Solutions, where I take ownership of complete AI projects from conception to deployment. I receive project requirements from senior engineers and independently architect, develop, and deliver full-stack AI solutions.

My work spans diverse domains including intelligent automation, conversational AI, and multimodal systems. I've built an Email Automation system that streamlines communication workflows, developed an SQL Agent that enables natural language database queries, and created a Multimodal RAG (Retrieval-Augmented Generation) system that processes and retrieves information across text, images, and documents.

Each project requires end-to-end development—designing the AI model architecture, building robust backends with FastAPI, creating intuitive frontends, and deploying production-ready solutions. This role has significantly accelerated my ability to translate AI research into practical, user-facing applications.`,
        highlights: [
            "Independently deliver full-stack AI projects",
            "Built Email Automation and Calendar integration system",
            "Developed SQL Agent for natural language queries",
            "Created Multimodal RAG system for document intelligence",
            "End-to-end ownership from backend to frontend"
        ],
        technologies: ["Python", "FastAPI", "LangChain", "RAG", "Multimodal AI", "React", "TypeScript"]
    }
};

// Certificate data with skills and dates
export const certificatesData = [
    {
        title: "5-Day AI Agents Intensive",
        issuer: "Google & Kaggle",
        completionDate: null,
        description: "Agentic AI, ADK, MCP, A2A systems",
        skillsGained: [
            "Agentic AI architecture",
            "Agent Development Kit (ADK)",
            "Model Context Protocol (MCP)",
            "Agent-to-Agent (A2A) communication"
        ],
        certificateImage: "https://upload.wikimedia.org/wikipedia/commons/f/f4/Kaggle_Logo.svg",
        link: null
    },
    {
        title: "LangGraph Essentials",
        issuer: "LangGraph",
        completionDate: "October 2024",
        description: "Stateful multi-actor applications",
        skillsGained: [
            "AI workflow orchestration",
            "Stateful agent design",
            "Multi-actor systems",
            "Complex AI pipelines"
        ],
        certificateImage: "https://upload.wikimedia.org/wikipedia/commons/6/60/LangChain_Logo.svg",
        link: "https://drive.google.com/file/d/1RiC_uO8llvfXHxW3ft_IEWZ_jbH5do_q/view?usp=sharing"
    },
    {
        title: "Data Analysis with Python",
        issuer: "CognitiveClass.ai (IBM)",
        completionDate: "August 2024",
        description: "Data processing, cleaning, and analytics",
        skillsGained: [
            "Data cleaning and preprocessing",
            "Pandas and NumPy mastery",
            "Statistical analysis",
            "Data visualization"
        ],
        certificateImage: "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg",
        link: "https://courses.cognitiveclass.ai/certificates/da190e0395ef4cfe95cd3648b5654cb9"
    },
    {
        title: "Supervised ML: Regression & Classification",
        issuer: "DeepLearning.AI",
        completionDate: "August 2024",
        description: "Core ML algorithms and theory",
        skillsGained: [
            "Supervised learning fundamentals",
            "Model training and evaluation",
            "Mathematical foundations of ML",
            "Regression and classification techniques"
        ],
        certificateImage: "https://upload.wikimedia.org/wikipedia/commons/5/57/Stanford_logo_%282008-2012%29.png",
        link: "https://www.coursera.org/account/accomplishments/verify/TGNBTDUZKQOX"
    },
    {
        title: "IT Foundation (Python)",
        issuer: "Infosys Springboard",
        completionDate: "August 2024",
        description: "Software engineering fundamentals",
        skillsGained: [
            "Software engineering best practices",
            "Data structures and algorithms",
            "Object-oriented programming",
            "Database fundamentals"
        ],
        certificateImage: "https://upload.wikimedia.org/wikipedia/commons/9/95/Infosys_logo.svg",
        link: "https://drive.google.com/file/d/12CRyB2x5Lkp1-F6dGW6gbNdBPSTE155_/view?usp=sharing"
    }
];

// Featured projects configuration
export const featuredProjects = [
    "Liver Cancer Detection",
    "SQL Agent",
    "Email and Calendar Automation",
    "Multimodal RAG System"
];
