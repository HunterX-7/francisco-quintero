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
    threejs,
    bootstrap,
    ruby,
    postgresql,
    wordpress,
    python,
    fashion,
    tribalcargo,
    global,
    bookstore,
    cozy,
    budget,
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
        "His expertise in a variety of programming languages and technologies is truly impressive, and he has demonstrated a talent for adapting quickly to new challenges. I have no doubt that Francisco would be a valuable asset to any team.",
      name: "Luis Zubía",
      designation: "Software Engineer",
      company: "",
      image: "https://avatars.githubusercontent.com/u/67355479?v=4",
    },
    {
      testimonial:
        "Francisco has the technical expertise, positive attitude, and collaborative mindset that makes for an excellent developer. They are dedicated to producing quality work and always willing to go the extra mile to ensure teams success. Any team would be fortunate to have Francisco as part of their organization.",
      name: "Rashed Arman",
      designation: "Full Stack Developer",
      company: "",
      image: "https://avatars.githubusercontent.com/u/78993606?v=4",
    },
    {
      testimonial:
        "Francisco is a full-stack web developer with a solid grasp of both front-end and back-end development technologies. He can create, develop, and put into use web applications that satisfy the particular needs of each project, and he always makes sure that his work is of the greatest caliber.",
      name: "Juan Pablo Guerrero",
      designation: "Full Stack Web Developer",
      company: "",
      image: "https://avatars.githubusercontent.com/u/113477568?v=4",
    },
  ];
  
  const projects = [
    {
      name: "Fashion Week",
      description:
        "This project was created to showcase my skills in front-end web development and demonstrate my ability to create visually appealing and responsive web pages. Users can showcase their work and services on this fashion gala website.",
      tags: [
        {
          name: "HTML",
          color: "blue-text-gradient",
        },
        {
          name: "CSS",
          color: "green-text-gradient",
        },
        {
          name: "Bootstrap",
          color: "pink-text-gradient",
        },
        {
          name: "JavaScript",
          color: "yellow-text-gradient",
        },
      ],
      image: fashion,
      live_demo: "https://hunterx-7.github.io/Fashion-Week/",
      source_code_link: "https://github.com/HunterX-7/Fashion-Week",
    },
    {
      name: "TribalCargo",
      description:
        "Shipping company experienced in air and maritime cargo transportation, providing comprehensive support to users in all related aspects. Users register and get a PO Box direction to do their online shopping, they can track their shipment and also get notified via email every time they receive a new package.",
      tags: [
        {
          name: "WordPress",
          color: "blue-text-gradient",
        },
        {
          name: "HTML",
          color: "green-text-gradient",
        },
        {
          name: "CSS",
          color: "pink-text-gradient",
        },
        {
          name: "JavaScript",
          color: "yellow-text-gradient",
        },
      ],
      image: tribalcargo,
      live_demo: "https://www.tribalcargo.com/",
      source_code_link: "",
    },
    {
      name: "Cozy Homes",
      description:
        "Web platform that offers a wide selection of comfortable and welcoming homes that can be rented for a short period of time. Dedicated to providing a seamless and enjoyable user experience, ensuring that guests feel at home no matter where.",
      tags: [
        {
          name: "React",
          color: "blue-text-gradient",
        },
        {
          name: "Redux",
          color: "green-text-gradient",
        },
        {
          name: "Ruby",
          color: "pink-text-gradient",
        },
        {
          name: "RestAPI",
          color: "yellow-text-gradient",
        },
      ],
      image: cozy,
      live_demo: "",
      source_code_link: "https://github.com/HunterX-7/cozy-homes-front-end",
    },
    {
      name: "New Awesome Bookstore",
      description:
        "New Awesome Bookstore enables users to browse a comprehensive list of books, add new titles, and remove selected books with ease, along with Bootstrap, I create an intuitive and visually appealing user interface that enhances the browsing experience.",
      tags: [
        {
          name: "React",
          color: "blue-text-gradient",
        },
        {
          name: "Redux",
          color: "green-text-gradient",
        },
        {
          name: "Bootstrap",
          color: "pink-text-gradient",
        },
        {
          name: "RestAPI",
          color: "yellow-text-gradient",
        },
      ],
      image: bookstore,
      live_demo: "https://hunterx-7.github.io/New-Awesome-Bookstore/",
      source_code_link: "https://github.com/HunterX-7/New-Awesome-Bookstore",
    },
    {
      name: "Budget App",
      description:
        "The Budget App is a mobile web application where you can manage your budget, you have a list of transactions associated with a category, so that you can see how much money you spent and on what.",
      tags: [
        {
          name: "Ruby",
          color: "blue-text-gradient",
        },
        {
          name: "PostgreSQL",
          color: "green-text-gradient",
        },
        {
          name: "Bootstrap",
          color: "pink-text-gradient",
        },
        {
          name: "RestAPI",
          color: "yellow-text-gradient",
        },
      ],
      image: budget,
      live_demo: "https://hunterx-7-budget-app.onrender.com/groups",
      source_code_link: "https://github.com/HunterX-7/Budget-App",
    },
    {
      name: "Global Metrics",
      description:
        "Global Metrics is a single-page application built with React. The app is designed to display basic information about different countries and allows users to filter and select a specific country to view more details.",
        tags: [
          {
            name: "React",
            color: "blue-text-gradient",
          },
          {
            name: "Redux",
            color: "green-text-gradient",
          },
          {
            name: "Bootstrap",
            color: "pink-text-gradient",
          },
          {
            name: "RestAPI",
            color: "yellow-text-gradient",
          },
        ],
      image: global,
      live_demo: "https://hunterx-7.github.io/Global-Metrics-Webapp/",
      source_code_link: "https://github.com/HunterX-7/Global-Metrics-Webapp",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };
  