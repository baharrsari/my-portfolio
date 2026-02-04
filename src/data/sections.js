import {
  FaBriefcase,
  FaUserGraduate,
  FaProjectDiagram,
  FaTools,
  FaCertificate,
  FaUser,
  FaLaptopCode,
} from "react-icons/fa";

export const sections = [
  // ─────────────────────────────
  // PROFESSIONAL EXPERIENCE
  // ─────────────────────────────
  {
    id: "professional-experience",
    title: "Professional Experience",
    Icon: FaBriefcase,
    items: [
      {
        company: "Portakal Technologies",
        role: "Junior Developer",
        type: "(Part Time / Hybrid)",
        period: "03/2025 – 08/2025 · Ankara, Türkiye",
        description:
          "Worked on virtual machine environments and evaluated Proxmox & OpenStack solutions. You can find more about my hands-on experience in my Medium article. My hands-on work with OpenStack was to create an environement using MicroStack on Ubuntu Server via Proxmox VE. Then I deployed VMs from Proxmox VE to the OpenStack environment, also integrated LLM APIs for running LLMs in VEs. My experience about this will be soon available on my Medium account. In addition, I contributed to and enchanced my knowledge about pre-sales activities as well.",
        companyUrl: "https://portakalteknoloji.com/",
        linkedinUrl:
          "https://www.linkedin.com/company/portakal-teknoloji/posts/?feedView=all",
         logo: "portakal"   
      },
      {
        company: "ABBCyber Cyber Security & Technologies Ltd.",
        role: "Junior Developer",
        type: "(Part Time / Hybrid)",
        period: "10/2024 – 02/2025 · Ankara, Türkiye",
        description:
          "Improved my understanding of network infastructure,firewalls, cybersecurity software, and took role in pre-sales and sales activities. Completed online and offline trainings on cybersecurity and pre-sales topics such as network security or Sales/Pre-Sales Enablement Fundamentals.",
        companyUrl: "https://abbcyber.com/",
        linkedinUrl:
          "https://www.linkedin.com/company/abbcyber/posts/?feedView=all",
        logo: "abbcyber",   
      },
    ],
  },

  // ─────────────────────────────
  // INTERNSHIPS (Experience ile aynı format)
  // ─────────────────────────────
  {
    id: "internships",
    title: "Internships",
    Icon: FaLaptopCode,
    items: [
      {
        company: "ASELSAN",
        role: "Software Engineer Intern",
        type: "(On-Site)",
        period: "07/2024 – 08/2024 · Ankara, Türkiye",
        description:
          "Extended my knowledge and perspective with detailed researches about simulation systems used in Defense Industries. Widened my learning about ROS & ROS2 through presentations.  I focused on attack simulations & defense scenarios developed with Unreal Engine. Developed my own simulation with Unreal Engine and completed an elaborative reseach about it.",

        companyUrl: "https://www.aselsan.com.tr/",
        linkedinUrl:
          "https://www.linkedin.com/company/aselsan/posts/?feedView=all",
          logo: "aselsan",
      },
      {
        company: "AbbCyber Cyber Security & Technologies Ltd.",
        role: "Software Engineer Intern",
        type: "(On-Site)",
        period: "07/2023 – 08/2023 · Ankara, Türkiye",
        description:
          "Enhanced my learning and practiced HTML, CSS, JavaScript and theoritically learned how firewalls and security tools operate in a network.",
        companyUrl: "https://abbcyber.com/",
        linkedinUrl:
          "https://www.linkedin.com/company/abbcyber/posts/?feedView=all",
          logo: "abbcyber",
      },
    ],
  },

  // ─────────────────────────────
  // EDUCATION 
  // ─────────────────────────────
  {
    id: "education",
    title: "Education",
    Icon: FaUserGraduate,
    items: [
      
      {
        company: "Ankara University",
      role: "Master of Science in Computer Engineering",
      type: "",
      period: "2026 – Present · Ankara, Türkiye",
      description: "",
      companyUrl: "https://www.ankara.edu.tr/",
      linkedinUrl:
        "https://www.linkedin.com/school/ankara-university/posts/?feedView=all",
      logo: "anku",
      },
      {
        company: "TED University 🎓",
        role: "Bachelor of Science in Computer Engineering",
        type: "", 
        period: "2021 – 2025 · Ankara, Türkiye",
        description: "Secondary field: Business & Administration.",
        companyUrl: "https://www.tedu.edu.tr/",
        linkedinUrl:
          "https://www.linkedin.com/school/ted-university/posts/?feedView=all",
        logo: "tedu",
      },
    ],
  },

  // ─────────────────────────────
  // PROJECTS 
  // ─────────────────────────────
  {
    id: "projects",
    title: "Projects",
    Icon: FaProjectDiagram,
    items: [
      {
        heading: "HealthBite🍏 (Senior Project)",
        period: "Mobile application",
        description:
          "Project description: HealthBite is a cross-platform health and nutrition tracking application built with .NET MAUI following the MVVM architecture. The goal of the project is to provide users with a structured way to track body metrics, meals, nutrition habits and generate meaningful insights for healthier lifestyle planning.",
        websiteUrl: "https://sites.google.com/view/healthbiteapp/home",
        githubUrl: "https://github.com/baharrsari/HealthBite"
      
        },
      {
        heading: "Hospital Management System 🏥",
        period: "Java · MySQL",
        description:
          "Project description: Desktop application for managing patients, doctors and appointments.",
        githubUrl: "https://github.com/baharrsari/hospital-management-system"
        },
      {
        heading: "Fitness Tracker Application 🏋️‍♀️",
        period: "Figma prototype",
        description:
          "Project description: User-friendly interface for tracking workouts and health metrics.",
        websiteUrl: "https://www.figma.com/proto/dBJ1C7Gn1R0N639ziLAaIx/team4-figma?node-id=0-1&t=lHgbtNUiDhn6Lxwx-1"
        },
    ],
  },

  // ─────────────────────────────
  // SKILLS & LANGUAGES
  // ─────────────────────────────
  {
    id: "skills-languages",
    title: "Skills and Languages",
    Icon: FaTools,
    items: [
      {
        heading: "Tech Skills & Tools 💻",
         skills: [
        { name: "Java", level: 90 },
        { name: "C", level: 45 },
        { name: "Python", level: 45 },
        { name: "MySQL", level: 80 },
        { name: "HTML/CSS", level: 85 },
        { name: "JavaScript", level: 45 },
        { name: "Proxmox", level: 65 },
        { name: "Ubuntu", level: 62 },
  ]
      },
      {
        heading: "Languages 🗣️",
        languages: [
        { name: "English", level: 4 },
        { name: "Romanian", level: 2 },
        { name: "Spanish", level: 1 },

        
]
      },
    ],
  },

  // ─────────────────────────────
  // CERTIFICATES
  // ─────────────────────────────
  {
    id: "certificates",
    title: "Certificates",
    Icon: FaCertificate,
    items: [

        { heading: "Introduction to Cloud Native Computing", url:"https://certification.mirantis.com/e854aace-8f84-4f35-8018-c4014411cc64#acc.K3vtVEi4"  }, { heading: "Introduction to Machine Learning", url:"https://www.coursera.org/account/accomplishments/specialization/5JM5X2MCNCX8" },
        
        { heading: "Introduction to Deep Learning & Neural Networks", url:"https://www.coursera.org/account/accomplishments/verify/GAKGQDJ7K6RS" }, { heading: "Exploratory Data Analysis for Machine Learning", url:"https://www.coursera.org/account/accomplishments/verify/2M3QTR49LBQV" },
        
        { heading: "Unsupervised Machine Learning", url:"https://www.coursera.org/account/accomplishments/verify/A8LZFDP4F4UW" }, { heading: "Network Security", url:"https://www.mygreatlearning.com/certificate/JWCENIYI?referrer_code=GLSIYGZ7X0_WG" },
        
        { heading: "Software Engineering: Modeling Software Systems using UML", url:"https://www.coursera.org/account/accomplishments/verify/68UGJC38SVFE" },  { heading: "Supervised Machine Learning: Regression", url:"https://www.coursera.org/account/accomplishments/verify/VGNK5FSANLNG" },
        
        { heading: "Software Engineering: Implementation and Testing", url:"https://www.coursera.org/account/accomplishments/verify/YRU7NZTLGQ6X" }, { heading: "Supervised Machine Learning: Classification", url:"https://www.coursera.org/account/accomplishments/verify/MAARJPW62Y9H" },
        
        { heading: "Software Engineering: Software Design and Project Management", url:"https://www.coursera.org/account/accomplishments/verify/33RKNYNFDD2T" },
        
        
      
    ],
  },
];

// ─────────────────────────────
// ABOUT ME PANEL
// ─────────────────────────────
export const aboutPanel = {
  id: "about",
  title: "About Me",
  Icon: FaUser,
  items: [
    {
      heading: "",
      period: "",
      description:
        "Hi!👋 I'm a Computer Engineering graduate from TED University. 💻\n\nPassionate about software development and cybersecurity. 🔒\n\nI had the opportunity to gain practical experience through\ninternships and part-time roles for enhancing my knowledge\nin programming, cybersecurity, and cloud technologies. 🚀\n\nI am eager to contribute to innovative projects and continue\nlearning in the tech field, especially interested in software\ndevelopment & cybersecurity. 📚\n\nI also like travelling, being physically active and reading. ✈️🏃‍♂️📖",
    },
  ],
};

export const externalLinks = [
  {
    id: "linkedin",
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/baharsarimehmetoglu",
    type: "linkedin",
  },
  {
    id: "medium",
    label: "Medium",
    href: "https://medium.com/@sarimehmetoglubahar",
    type: "medium",
  },
  {
    id: "github",
    label: "GitHub",
    href: "https://github.com/baharrsari",
    type: "github",
  },
];

export const contactInfo = {
  email: "baharrsarimehmetoglu@gmail.com",
};
