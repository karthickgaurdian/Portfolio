const content = {
  personal: {
    name: "Karthick M",
    title: "Full Stack Developer",
    email: "karthickrama6024@gmail.com",
    linkedin: "www.linkedin.com/in/karthick-m-0883b5229",
    github: "https://github.com/karthickgaurdian",
    about: `Hello, I'm Karthick, a passionate Full Stack Developer with expertise in building scalable web applications. 
    I specialize in modern web technologies and have a strong foundation in both front-end and back-end development. 
    My experience includes developing responsive web applications, RESTful APIs, and database management systems. 
    I'm constantly learning and exploring new technologies to deliver cutting-edge solutions.`,
    skills: {
      frontend: [
        "React.js",
        "Angular",
        "HTML5",
        "CSS3",
        "JavaScript",
        "TypeScript",
        "Redux",
      ],
      backend: [
        "Node.js",
        "Python",
        "REST APIs",
        "SQL Server"
      ],
      devops: [
        "Git",
        "Docker",
        "Azure",
        "CI/CD",
        "Kubernetes",
        "Linux",
      ],
      tools: [
        "VS Code",
        "Postman",
        "Figma",
        "Jira",
        "GitHub",
        "Adobe XD",
        "Docker Desktop",
      ]
    }
  },
  education: [
    {
      institution: "St.John's Hr Sec School",
      level: "High School",
      yearJoined: "2015",
      yearCompleted: "2017",
      cgpa: "9.2"
    },
    {
      institution: "St.John's College",
      level: "Bachelor's Degree",
      yearJoined: "2018",
      yearCompleted: "2020",
      cgpa: "8.5"
    },
    {
      institution: "St.John's College",
      level: "Master's Degree",
      yearJoined: "2020",
      yearCompleted: "2022",
      cgpa: "8.5"
    }
  ],
  experience: [
    {
      company: "Bezohminds PVT LTD",
      role: "Full Stack Developer",
      startDate: "OCT 2022",
      endDate: "Dec 2024",
      responsibilities: [
        "Developed and maintained full-stack web applications using React.js and Python",
        "Implemented RESTful APIs and microservices architecture",
        "Integrated third-party services and APIs",
        "Optimized application performance and database queries",
        "Collaborated with cross-functional teams in an agile environment",
        "Implemented CI/CD pipelines and automated testing"
      ]
    }
  ],
  projects: [
    {
      title: "React JS Application",
      description: "A printing application used in production to print ribbons in UV Printers.",
      image: "images/CF application front.jpg",
      category: "frontend",
      technologies: ["React", "JavaScript", "UI/UX", "Redux"],
      link: "images/CF application front.jpg"
    },
    {
      title: "Python Backend for React Front-End",
      description: "Handles data from SQL Server tables and views, integrates endpoints with different purposes, manages image processing, and integrates with DataDog for monitoring and tracing.",
      category: "backend",
      technologies: ["Python", "SQL Server", "API", "DataDog"],
      link: "#"
    },
    // {
    //   title: "Task Management Tool",
    //   description: "A full-stack task management application with real-time updates and collaborative features.",
    //   category: "fullstack",
    //   technologies: ["React", "Node.js", "MongoDB", "Socket.io"],
    //   link: "https://github.com/your-username/task-manager"
    // },
    {
      title: "DevHub Productivity Assist",
      description: "A command-line application to help developers manage tasks, reminders, credentials, and daily journal entries. Built with Python and SQL Server.",
      category: "backend",
      technologies: ["Python", "SQL Server (local instance)", "ODBC Driver for SQL Server", "Socket.io"],
      link: "https://github.com/karthickgaurdian/DevHub.git"
    },
    {
      title: "Kafka Event Producer",
      description: "A microservice that publishes real-time events to Kafka topics. Designed for decoupled communication in distributed systems. Built with Python and Kafka client libraries.",
      category: "microservice",
      technologies: ["Python", "Kafka", "confluent-kafka", "Docker"],
      link: "https://github.com/karthickgaurdian/python-microservice.git"
    },
    {
      title: "Kafka Event Listener",
      description: "A microservice that listens to Kafka topics and processes incoming events asynchronously. Built for scalable background task handling.",
      category: "microservice",
      technologies: ["Python", "Kafka", "confluent-kafka", "Docker"],
      link: "https://github.com/karthickgaurdian/sales-microservice.git"
    },
    {
      title: "AI E-commerce Assistant",
      description: "A powerful, modular AI-integrated library for modern e-commerce websites that provides intelligent features like recommendations, smart search, dynamic pricing, and customer support via REST and GraphQL APIs.",
      category: "library",
      technologies: ["Python", "FastAPI", "GraphQL", "NLP", "Machine Learning", "Shopify API", "WooCommerce API"],
      link: "https://github.com/karthickgaurdian/AI-E-commerce-Assistant.git"
    },
    {
      title: "Portfolio Website Creation",
      description: "A powerful, modular personal portfolio website for developers and designers that showcases projects, skills, and experience with a responsive layout, interactive animations, and seamless deployment.",
      category: "website",
      technologies: ["React", "Next.js", "Tailwind CSS", "Framer Motion", "Vercel", "EmailJS"],
      link: "https://github.com/karthickgaurdian/Portfolio.git"
    }
    
  ],
  certifications: [
    {
      title: "AWS Certified Solutions Architect",
      issuer: "Amazon Web Services",
      date: "2023",
      link: "#"
    },
    {
      title: "MongoDB Certified Developer",
      issuer: "MongoDB",
      date: "2023",
      link: "#"
    },
    {
      title: "React Certified Developer",
      issuer: "Meta",
      date: "2023",
      link: "#"
    }
  ],
  achievements: [
    {
      title: "Excellency Award",
      organization: "Bezohminds PVT LTD",
      date: "2023",
      description: "Recognized for outstanding performance and innovation in project delivery"
    },
    {
      title: "Hackathon Winner",
      organization: "TechFest 2023",
      date: "2023",
      description: "First place in the Full Stack Development category"
    }
  ],
  sliderImages: [
    "images/slideshow/image1.jpg",
    "images/slideshow/image2.jpg",
    "images/slideshow/image3.jpg",
    "images/slideshow/image4.jpg",
    "images/slideshow/image5.jpg",
    "images/slideshow/image6.jpg"
  ]
};

console.log('Content loaded:', content);

export default content; 