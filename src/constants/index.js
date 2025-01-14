import {
    github,
    linkedin,
    backend,
    consulting,
    content,
    frontend,
    javascript,
    typescript,
    reactjs,
    ruby,
    tailwind,
    python,
    azure,
    salesforce,
    next,
    powerbi,
    tableau,
    argos,
    copanac,
    dev,
    mqt,
    postgresql,
    fashion,
    tribalcargo,
    adr,
    align,
    align1,
    fspanama,
    cozy,
    budget,
    dawnbank,
    thinkart,
    mountains,
    covid,
    vetclinic,
    hrdashboard,
    spacedashboard,
    callcenter,
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

  const socials = [
    {
      id: "linkedin",
      title: "https://www.linkedin.com/in/francisco-asis-quintero-cede%C3%B1o/",
      logo: linkedin,
    },
    {
      id: "github",
      title: "https://github.com/HunterX-7",
      logo: github,
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
      title: "Low-Code Development",
      icon: consulting,
    },
    {
      title: "Data Analytics",
      icon: content,
    },
  ];
  
  const technologies = [
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "Python",
      icon: python,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Next",
      icon: next,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Ruby",
      icon: ruby,
    },
    {
      name: "Power BI",
      icon: powerbi,
    },
    {
      name: "Tableau",
      icon: tableau,
    },
    {
      name: "Salesforce",
      icon: salesforce,
    },
    {
      name: "Postgresql",
      icon: postgresql,
    },
    {
      name: "Azure",
      icon: azure,
    },
  ];
  
  const experiences = [
    {
      title: "Budget Engineer",
      company_name: "COPANAC S.A.",
      icon: copanac,
      iconBg: "#ffffff",
      date: "Jan 2017 - Dec 2017",
      points: [
        "Leveraging my expertise in project design and engineering, I secured and managed several mid-level contracts for air conditioning systems, leading to an 18% growth in revenue for the department and exceeding the annual sales targets.",
        "Demonstrating exceptional proficiency in budget estimating and cost optimization, I consistently achieved a 10% reduction in project expenses while maintaining the highest quality standards, contributing to significant cost savings for the organization.",
        "By collaborating closely with cross-functional teams, I ensured seamless coordination and alignment of technical files, resulting in a 15% improvement in project delivery timelines and overall efficiency.",
      ],
    },
    {
      title: "Project Engineer",
      company_name: "Cementos Argos",
      icon: argos,
      iconBg: "#ffffff",
      date: "Feb 2019 - Nov 2019",
      points: [
        "Led a team of 30+ technicians and engineers in the successful construction and commissioning of the company's first mortar plant, ensuring seamless collaboration and coordination among different departments.",
        "Implemented cost-saving measures that resulted in an 8% reduction in production expenses for the mortar plant, contributing to significant overall cost savings for the company.",
        "Achieved and maintained a 100% compliance rate with safety regulations and industry standards throughout the entire construction and operation process.",
      ],
    },
    {
      title: "Administrative and Financial Analyst",
      company_name: "Distribuidora Comercial MQT",
      icon: mqt,
      iconBg: "#ffffff",
      date: "Jun 2020 - Jul 2022",
      points: [
        "Conducted thorough data analysis, generating detailed reports and insights that informed strategic decision-making, leading to a 17% improvement in resource allocation and financial planning accuracy.",
        "Streamlined administrative processes, reducing operational costs by 13% by implementing efficient workflows and automation tools.",
        "Developed and maintained comprehensive financial models, facilitating accurate forecasting and enabling the organization to meet financial targets consistently.",
        "Implemented a robust expense tracking system, leading to an 11% decrease in overspending and ensuring adherence to budgetary constraints.",
        "Executed financial audits and risk assessments, identifying areas for improvement and implementing corrective actions that enhanced financial compliance by 15%.",
        "Provided timely and accurate financial reports to stakeholders, fostering transparency and aiding in strategic planning initiatives.",
        "Actively contributed to developing and implementing financial policies and procedures, ensuring alignment with industry standards and regulations.",
      ],
    },
    {
      title: "Freelance Web Developer",
      company_name: "Self Employed",
      icon: dev,
      iconBg: "#ffffff",
      date: "Aug 2021 - Dec 2023",
      points: [
        "Completed 20+ full-stack development projects, utilizing a diverse tech stack including JavaScript, React, Redux, Tailwind, Bootstrap, Ruby on Rails, and MongoDB, to create dynamic, custom, and user-friendly websites.",
        "Optimized frontend performance, resulting in a 12% reduction in page loading times and enhanced user engagement.",
        "Implemented efficient CI/CD pipelines to streamline development workflows, ensuring automated testing, continuous integration, and continuous deployment.",
        "Achieved an average of 24-hour response time for website maintenance and support requests, ensuring prompt assistance to clients.",
        "Seamlessly integrated CMS platforms like WordPress, tailoring them to clients' needs and enabling easy content management.",
        "Applied Agile methodologies in project management, leading to a 15% increase in project efficiency and client satisfaction.",
        "Leveraged SEO techniques and tools, resulting in a 70% increase in organic website traffic and improved search engine rankings.",
        "Ensured robust code quality with 80% unit test coverage, reducing the occurrence of critical bugs in production.",
        "Developed robust backend solutions using Ruby on Rails and Express, enabling seamless data management, authentication, and API integrations, contributing to the development of highly functional and efficient web applications.",
      ],
    },
    {
      title: "WordPress Developer",
      company_name: "A-LIGN",
      icon: align,
      iconBg: "#ffffff",
      date: "Jan 2024 - Jun 2024",
      points: [
        "Modified and customized WordPress themes to meet specific design requirements and branding guidelines.",
        "Ensured websites were fully responsive, functioning seamlessly across various devices and screen sizes.",
        "Identified and fixed issues or bugs within the WordPress site, including troubleshooting code conflicts and plugin malfunctions.",
        "Enhancing website speed and performance by optimizing images, implementing caching, and minimizing code.",
        "Implementing best practices for SEO, including meta tags, keyword integration, and ensuring clean, semantic code.",
      ],
    },
    {
      title: "Software Engineer",
      company_name: "ADR Technologies",
      icon: adr,
      iconBg: "#ffffff",
      date: "Jul 2024 - Present",
      points: [
        "Designing, building, and deploying custom applications using the Mendix low-code platform to address specific business needs.",
        "Creating and optimizing complex microflows within Mendix to handle business logic, data processing, and system integrations.",
        "Designing and implementing data models within Mendix, including defining entities, attributes, and relationships to ensure efficient data management.",
        "Setting up and maintaining user accounts, profiles, and permissions to ensure secure and efficient access to Salesforce features.",
        "Automating workflows, creating and customizing Salesforce objects, fields, and page layouts to fit business requirements.",
        "Collaborated closely with clients to understand and implement new features, ensuring alignment with their business goals.",
        "Worked alongside UX designers to transform client needs and ideas into functional, user-friendly interfaces.",
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
        "Francisco Quintero consistently demonstrated his ability to write clean, efficient code, and he was always willing to go above and beyond to ensure the success of our project. His attention to detail and strong problem-solving skills were invaluable to our team.",
      name: "Pierre Barba",
      designation: "Full-Stack Web Developer",
      company: "",
      image: "https://avatars.githubusercontent.com/u/99061965?v=4",
    },
    {
      testimonial:
        "Francisco is a full-stack web developer with a solid grasp of both front-end and back-end development technologies. He can create, develop, and put into use web applications that satisfy the particular needs of each project, and he always makes sure that his work is of the greatest caliber.",
      name: "Juan Pablo Guerrero",
      designation: "Software developer",
      company: "",
      image: "https://avatars.githubusercontent.com/u/113477568?v=4",
    },
  ];
  
  const projects = [
    {
      name: "DawnBank",
      description:
        "DawnBank is a comprehensive and dynamic single-page application built using React, Tailwind CSS, and Vite. The application is designed with a focus on usability, ease of navigation, and smooth interactions for users, ensuring a positive experience while using the financial website.",
      tags: [
        {
          name: "React",
          color: "blue-text-gradient",
        },
        {
          name: "Tailwind CSS",
          color: "green-text-gradient",
        },
        {
          name: "Vite",
          color: "pink-text-gradient",
        },
      ],
      image: dawnbank,
      live_demo: "https://hunterx-7.github.io/DawnBank/",
      source_code_link: "https://github.com/HunterX-7/DawnBank",
    },
    {
      name: "ThinkArt",
      description:
        "ThinkArt is a DALL-E clone using a fusion of React, Tailwind CSS, and Vite that brings creativity to life. Integrated with Node, Express, MongoDB, OpenAI, and Cloudinary, it empowers users to explore art through AI technology. Unleash creativity, and share masterpieces on this dynamic platform.",
      tags: [
        {
          name: "React",
          color: "blue-text-gradient",
        },
        {
          name: "Tailwind CSS",
          color: "green-text-gradient",
        },
        {
          name: "MongoDB",
          color: "pink-text-gradient",
        },
        {
          name: "OpenAI",
          color: "yellow-text-gradient",
        },
      ],
      image: thinkart,
      live_demo: "",
      source_code_link: "https://github.com/HunterX-7/ThinkArt",
    },
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
      name: "Space Mission Dashboard",
      description:
        "The Space Mission Dashboard project provides a comprehensive analysis of all space missions conducted from 1957 to August 2022. Leveraging Power BI, this project dives into a rich dataset, encompassing crucial details such as launch location, date, and outcomes, as well as the responsible space agency.",
      tags: [
        {
          name: "Power BI",
          color: "blue-text-gradient",
        },
        {
          name: "Power Query",
          color: "green-text-gradient",
        },
        {
          name: "Excel",
          color: "pink-text-gradient",
        },
      ],
      image: spacedashboard,
      live_demo: "",
      source_code_link: "https://github.com/HunterX-7/Space-Missions-DA",
    },
    {
      name: "COVID-19 Data Analysis",
      description:
        "The COVID-19 Data Analysis project is an in-depth exploration conducted in Python and Jupyter Notebooks. Leveraging powerful libraries such as Pandas, NumPy, Seaborn, and Matplotlib, the study aims to establish a correlation between the COVID infection rate and the World Happiness Record, a dataset endorsed by the United Nations.",
      tags: [
        {
          name: "Python",
          color: "blue-text-gradient",
        },
        {
          name: "Jupyter Notebooks",
          color: "green-text-gradient",
        },
      ],
      image: covid,
      live_demo: "",
      source_code_link: "https://github.com/HunterX-7/COVID-19-Data-Analysis",
    },
    {
      name: "Call Center Dashboard",
      description:
        "The Call Center Data Analysis repository offers an in-depth exploration of call center operations during the month of October 2020, focus on a United States-based office. Utilizing analytics and visualizations in Power BI, the project delves into a diverse dataset, capturing key metrics and insights crucial to understanding call center performance.",
      tags: [
        {
          name: "Power BI",
          color: "blue-text-gradient",
        },
        {
          name: "Power Query",
          color: "green-text-gradient",
        },
        {
          name: "Excel",
          color: "pink-text-gradient",
        },
      ],
      image: callcenter,
      live_demo: "",
      source_code_link: "https://github.com/HunterX-7/Call-Center-DA",
    },
    {
      name: "Vet Clinic",
      description:
        "Vet Clinic is a project, that uses a relational database to create the initial data structure for a vet clinic. I create a table to store animals' information, insert some data into it, and query it.",
      tags: [
        {
          name: "SQL",
          color: "blue-text-gradient",
        },
        {
          name: "PostgreSQL",
          color: "green-text-gradient",
        },
        {
          name: "Relational database",
          color: "pink-text-gradient",
        },
      ],
      image: vetclinic,
      live_demo: "",
      source_code_link: "https://github.com/HunterX-7/vet_clinic",
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
      name: "L.A. Mountains",
      description:
        "Los Angeles Mountains is a single-page application built using React, Tailwind CSS, and Vite. Focus on usability, ease of navigation, and smooth interactions for users, ensuring a positive experience while using the hiking website.",
      tags: [
        {
          name: "React",
          color: "blue-text-gradient",
        },
        {
          name: "Tailwind CSS",
          color: "green-text-gradient",
        },
        {
          name: "Vite",
          color: "pink-text-gradient",
        },
      ],
      image: mountains,
      live_demo: "https://hunterx-7.github.io/angeles-mountains/",
      source_code_link: "https://github.com/HunterX-7/angeles-mountains",
    },
    {
      name: "HR Dashboard",
      description:
        "The HR Data Analysis project is a detailed exploration of a sample dataset from an anonymous HR company. Utilizing Power BI, the study uncovers valuable insights, metrics related to the company's recruitment process and employee performance.",
      tags: [
        {
          name: "Power BI",
          color: "blue-text-gradient",
        },
        {
          name: "Power Query",
          color: "green-text-gradient",
        },
        {
          name: "Excel",
          color: "pink-text-gradient",
        },
      ],
      image: hrdashboard,
      live_demo: "",
      source_code_link: "https://github.com/HunterX-7/HR-Data-Analysis",
    },
    {
      name: "Forever Summer",
      description:
        "An online retail store for clothing, Forever Summer offers a seamless shopping experience where users can browse a variety of fashion items, filter products by categories, and easily add items to their cart for purchase.",
      tags: [
        {
          name: "WordPress",
          color: "blue-text-gradient",
        },
        {
          name: "woocommerce",
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
      image: fspanama,
      live_demo: "https://www.foreversummerpanama.com/",
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
      live_demo: "",
      source_code_link: "https://github.com/HunterX-7/Budget-App",
    },
    {
      name: "A-LIGN",
      description:
        "I worked on improving their website's performance and functionality, specifically focusing on ensuring seamless communication of their services. I revamped their WordPress site to reflect their role in helping businesses become compliant with security certifications.",
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
      image: align1,
      live_demo: "https://www.a-lign.com/",
    },
  ];
  
  export { socials, services, technologies, experiences, testimonials, projects };
  
