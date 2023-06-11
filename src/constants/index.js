import {
    backend,
    consulting,
    content,
    frontend,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    git,
    argos,
    copanac,
    dev,
    carrent,
    jobit,
    tripguide,
    threejs,
    bootstrap,
    ruby,
    postgresql,
    wordpress,
    python,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Front-End Development",
      icon: frontend,
    },
    {
      title: "Back-End Development",
      icon: backend,
    },
    {
      title: "Technical Consulting",
      icon: consulting,
    },
    {
      title: "Content Creation",
      icon: content,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Bootstrap",
      icon: bootstrap,
    },
    {
      name: "Python",
      icon: python,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "Git",
      icon: git,
    },
    {
      name: "Ruby",
      icon: ruby,
    },
    {
      name: "Postgresql",
      icon: postgresql,
    },
    {
      name: "Wordpress",
      icon: wordpress,
    },
  ];
  
  const experiences = [
    {
      title: "Mechanical Engineer",
      company_name: "COPANAC S.A.",
      icon: copanac,
      iconBg: "#ffffff",
      date: "Jan 2017 - Dec 2017",
      points: [
        "As an accomplished mechanical engineer, I designed air conditioning systems that met specific client requirements, while taking into account both project needs and budget constraints.",
        "Additionally, I was able to secure the purchase of several mid-level contracts for air conditioning systems through my expertise in project design, engineering, and budget estimating, while ensuring full compliance with all relevant technical files.",
      ],
    },
    {
      title: "Mechanical Engineer",
      company_name: "Cementos Argos",
      icon: argos,
      iconBg: "#ffffff",
      date: "Feb 2019 - Nov 2019",
      points: [
        "Successfully supervised the construction of the company's first mortar plant, overseeing the entire process from mechanical drawings to project design and engineering.",
        "Through project management and technical expertise, I was able to help improve the plant's cost production by 8% while managing personnel and ensuring compliance with all relevant technical files and regulations.",
      ],
    },
    {
      title: "Freelance Web Developer",
      company_name: "Self Employed",
      icon: dev,
      iconBg: "#ffffff",
      date: "Aug 2021 - Present",
      points: [
        "Developed custom WordPress websites tailored to meet the specific needs and requirements of the client, ensuring a visually appealing and engaging online presence.",
        "Designed and optimized the websites to provide a user-friendly experience, implementing intuitive navigation and highlighting key aspects of the business to enhance user engagement.",
        "Achieved a significant increase of over 70% in website traffic through the effective implementation of SEO strategies and techniques.",
        "Employed JavaScript, CSS, and HTML to personalize and customize specific sections of the websites, implementing a unique and innovative approach to enhance the overall user experience and meet the client's specific requirements.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Car Rent",
      description:
        "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/",
    },
    {
      name: "Job IT",
      description:
        "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/",
    },
    {
      name: "Trip Guide",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };
  