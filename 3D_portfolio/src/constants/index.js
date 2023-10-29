import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
    
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
      title: "Unity Certified Developer",
      icon: web,
    },
    {
      title: "WebXR Developer",
      icon: mobile,
    },
    {
      title: "GCP cloud practicioner",
      icon: backend,
    },
    {
      title: "Machine Learning Prototyper",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "Unity",
      icon: html,
    },
    {
      name: "csharp",
      icon: css,
    },
    
    {
      name: "Varjo",
      icon: typescript,
    },
    {
      name: "c++",
      icon: reactjs,
    },
    {
      name: "MR",
      icon: redux,
    },
    {
      name: "ARCore",
      icon: tailwind,
    },
    {
      name: "javascript",
      icon: javascript,
    },
    {
      name: "unrealengine",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "webXR",
      icon: figma,
    },
    {
      name: "vuforia",
      icon: docker,
    },
    {
      name: "AndroidStudio",
      icon: nodejs,
    },
  ];
  
  const experiences = [
    {
      title: "XR Solution Architect",
      company_name: "Tech Mahindra",
      icon: starbucks,
      iconBg: "#383E56",
      date: "April 2022 - Present",
      points: [
        "Technical Lead/Developer for UBI Bank Metaverse.",
        "VR app for Collage of Military Engineering & M&M.",
        "Metaverse Testing Automation.",
        "Oman XR trainer program and Customer Interaction.",
      ],
    },
    {
      title: "Software Development Engineer",
      company_name: "HoloSuit",
      icon: tesla,
      iconBg: "#E6DEDD",
      date: "Jan 2020 - April 2022",
      points: [
        "Lead Developer for YOUWECAN AR.",
        "YOGA AR app, AI, Optimization.",
      ],
    },
    {
      title: "Intern - AR/VR",
      company_name: "Plutomen",
      icon: shopify,
      iconBg: "#383E56",
      date: "May 2019 – July 2019",
      points: [
        "Implemented API integration (AWS, Asset Bundle, Addressables) in Unity..",
      ],
    },
    {
      title: "Founder Student XR community",
      company_name: "XoRphilic",
      icon: meta,
      iconBg: "#E6DEDD",
      date: "Jan 2019 - Present",
      points: [
        "Mentored & Trained more than 1000 students in different XR oriented Skills.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "His ability to not give up until something was done right put him a notch above the rest of the team.",
      name: "Yashas C.J.",
      designation: "Test Architect / Scrum Master",
      company: "HP",
      image: "https://www.linkedin.com/in/yashascandadejayasimha/overlay/photo/",
    },
    
  ];
  
  const projects = [
    {
      name: "Banking Metaverse",
      description:
        `Fore-fronted technical planning and development. Integrated banking-related transactions, in-house
        developed chatbot, Medium to Dynamically switch contents, Customer acquisition, analytics, etc.`,
      tags: [
        {
          name: "Unity",
          color: "blue-text-gradient",
        },
        {
          name: "WebGl",
          color: "green-text-gradient",
        },
        {
          name: " ChatBot Implementation",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/",
    },
    {
      name: "Cricket AR app",
      description:
        `Created an AR & AI-enabled Android app for Yuvraj Singh Centre of Excellence (YSCE) which will
        help students get mentor-ship virtually.`,
      tags: [
        {
          name: "TensorFlowlight Unity plugin",
          color: "blue-text-gradient",
        },
        {
          name: "ARFoundation",
          color: "green-text-gradient",
        },
        {
          name: "Adobe XD",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/",
    },
    {
      name: "AR Workbench",
      description:
        `In this IoT is incorporated with AR to give lifelike real-time feedback to the user.`,
      tags: [
        {
          name: "Vuforia",
          color: "blue-text-gradient",
        },
        {
          name: "IoT",
          color: "green-text-gradient",
        },
        {
          name: "Firebase",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };