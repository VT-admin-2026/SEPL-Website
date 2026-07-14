import { images } from "./images";

export const siteConfig = {
  name: "Suvidhinath Electronics Pvt. Ltd.",
  shortName: "Suvidhinath Electronics Pvt. Ltd.",
  description:
    "Established in 2013, SEPL delivers reliable electrical infrastructure, renewable energy solutions, turnkey government projects and rural development across Maharashtra. We Care!",
  url: "https://seplweb.in",
  ogImage: "/images/SEPL logo.png",
  founded: "23rd December 2013",
  contact: {
    phone: "9067149000",
    whatsapp: "8007528287",
    email: "Contact@seplweb.in",
    address: [
      "01 Swami Samarth Nagar",
      "Kalpataru Building",
      "Shirpur-Warwade 425405",
      "MH, IN",
    ].join("\n"),
    coordinates: {
      lat: 21.353007701888295,
      lng: 74.88804169295906,
    },
    mapEmbed:
      "https://maps.google.com/maps?q=21.353007701888295,74.88804169295906&hl=en&z=16&output=embed",
  },
  social: {
    linkedin: "https://linkedin.com",
    facebook: "https://facebook.com",
    twitter: "https://twitter.com",
    instagram: "https://instagram.com",
  },
};

export const companyDetails = {
  iso: "ISO 9001:2008 Certified Company",
  udyogAadhar: "MH04A0025348",
  gstin: "27AAUCS033B1Z1",
  cin: "U74120MH2013PTC251336",
};

export const heroStats = [
  { value: 12, suffix: "+", label: "Years Experience" },
  { value: 150, suffix: "+", label: "Villages Served" },
  { value: 4843, suffix: "+", label: "Service Connections" },
];

export const aboutContent = {
  intro:
    "Suvidhinath Electronics Private Limited was established on 23rd December 2013 with a vision that every small effort towards brightening the lives of our people is monumental. SEPL truly follows what we say — \"We Care!\"",
  growth:
    "Company started as a promising venture in LED technology. Soon under strong leadership, the company became a leading manufacturer in LED, Solar and Home appliances. Today, the company is one of the most trusted names in the field of electronics goods.",
  government:
    "SEPL not only holds significant market share in agriculture applications, it is also a Registered Government Contractor. The company has extensive experience working with Government agencies such as Public Work Department (PWD), MSEDCL, Indian Railways, and MIDC.",
  turnkey:
    "SEPL has successfully delivered numerous turnkey projects involving Grampanchayat Electrification, RSJ Pole, DTC commissioning and system improvement for prevention of high losses across various locations.",
  society:
    "SEPL is not only providing better, reliable and environmental friendly LED and solar solutions, but it is also working to make this society a better place by changing lives of the people.",
};

export const aboutCards = [
  {
    title: "Founded",
    content: "Established on 23rd December 2013 with a vision that every small effort towards brightening lives is monumental.",
    icon: "Calendar",
  },
  {
    title: "Mission",
    content:
      "To provide reliable, economical and energy efficient products and support public domain work with these products.",
    icon: "Target",
  },
  {
    title: "Vision",
    content:
      "To create products that help people make their lives better.",
    icon: "Eye",
  },
  {
    title: "Core Values",
    content:
      "Integrity — highest standards of honesty and ethics. Innovation — sustainable solutions. Teamwork — safe, open environment. Customer Commitment — quality products and service.",
    icon: "Heart",
  },
];

export const whyChoose = [
  {
    title: "Government Approved",
    description: "Registered contractor for PWD, MSEDCL, Indian Railways, and MIDC.",
    icon: "ShieldCheck",
  },
  {
    title: "ISO Certified",
    description: "ISO 9001:2008 certified company with rigorous quality management.",
    icon: "Award",
  },
  {
    title: "Turnkey Projects",
    description: "End-to-end execution from design, supply, erection to commissioning.",
    icon: "Layers",
  },
  {
    title: "Experienced Engineers",
    description: "Electrical supervisors and technicians executing complex turnkey projects.",
    icon: "Users",
  },
  {
    title: "Quality Assurance",
    description: "Rigorous testing and compliance with government standards.",
    icon: "CheckCircle2",
  },
  {
    title: "Timely Delivery",
    description: "Proven track record across Saubhagya and Grampanchayat schemes.",
    icon: "Clock",
  },
  {
    title: "Energy Efficient Solutions",
    description: "LED, Solar and smart solutions reducing costs and carbon footprint.",
    icon: "Leaf",
  },
];

export const services = [
  {
    title: "Electrical Infrastructure",
    description: "HT/LT lines, RSJ poles, DTC commissioning, AB cable conversion.",
    icon: "Zap",
  },
  {
    title: "Solar Solutions",
    description: "Solar street lights, solar power systems and renewable installations.",
    icon: "Sun",
  },
  {
    title: "Government Projects",
    description: "Saubhagya Scheme, Grampanchayat electrification and PWD contracts.",
    icon: "Building2",
  },
  {
    title: "Rural Electrification",
    description: "Residential meter installation, voltage lines and LT cables for MSEDCL.",
    icon: "Home",
  },
  {
    title: "LED Lighting",
    description: "Energy-efficient LED street and area lighting systems.",
    icon: "Lightbulb",
  },
  {
    title: "High Mast Lighting",
    description: "High mast installations for highways and industrial zones.",
    icon: "TowerControl",
  },
  {
    title: "Smart Village Solutions",
    description: "Anganwadi digitalization, village decoration and smart infrastructure.",
    icon: "Wifi",
  },
  {
    title: "Industrial Electrical Works",
    description: "System improvement projects and industrial electrical solutions.",
    icon: "Factory",
  },
];

export const completedProjects = [
  {
    title: "Saubhagya Scheme — Residential Connections",
    description:
      "Partial turnkey contract for providing and fixing material for new single phase residential connections in Shirpur I and Shirpur II subdivision under Dondaicha division. Executed 4,843 service connections benefiting rural households in Sayagaon, Kannad and surrounding areas.",
    image: images.projects.ruralElectrification,
    imageContain: true,
    category: "MSEDCL · Saubhagya",
    client: "MSEDCL",
    completion: "Completed",
    stats: [
      { label: "Connections", value: "4,843" },
      { label: "Tenders", value: "17" },
      { label: "Region", value: "Shirpur" },
    ],
  },
  {
    title: "Saubhagya — DTC & 11 KV Line Electrification",
    description:
      "Turnkey electrification for supply, test, transport, construction, erection, testing and commissioning of 11 KV lines on RSJ poles, 11KV AB switch, LT lines, 100 KVA DTC and service connections in Soyagaon and Fardapur sections under Kannad division, Aurangabad.",
    image: images.projects.dtcElectrification,
    category: "MSEDCL · Turnkey",
    client: "MSEDCL",
    completion: "Completed",
    stats: [
      { label: "Projects", value: "2" },
      { label: "Division", value: "Kannad" },
      { label: "District", value: "Aurangabad" },
    ],
  },
  {
    title: "Grampanchayat Electrification — PWD",
    description:
      "Electrification of Grampanchayat across 150+ villages covering solar street lights, LED street lights, high masts and Anganwadi digitalization. Districts: Dhule, Jalgaon, Nashik and Nandurbar.",
    image: images.projects.grampanchayat,
    category: "PWD · Rural",
    client: "PWD Maharashtra",
    completion: "Ongoing",
    stats: [
      { label: "Villages", value: "150+" },
      { label: "Districts", value: "4" },
      { label: "Schemes", value: "PWD" },
    ],
  },
  {
    title: "Private Sector — Reliance Jio & Commercial",
    description:
      "Successfully executed turnkey electrical projects in collaboration with Reliance Jio and various commercial enterprises, spanning comprehensive electrical installations to intricate network designs.",
    image: images.projects.privateSector,
    category: "Private Sector",
    client: "Reliance Jio & Others",
    completion: "Completed",
    stats: [
      { label: "Sectors", value: "Private" },
      { label: "Projects", value: "100+" },
      { label: "Quality", value: "ISO" },
    ],
  },
];

export const ongoingProjects = [
  {
    title: "System Improvement — High Loss Feeder Prevention",
    description:
      "Full turnkey contract for system improvement on high loss feeder with LT AB cable lines, conversion of overhead to AB cable etc. under Power House sub-division, Aurangabad Urban-I division under Aurangabad Urban Circle.",
    image: images.ongoing.feederImprovement,
    client: "MSEDCL",
    location: "Aurangabad Urban Division",
    technology: "LT AB Cable, OH to AB Conversion",
    workOrder: "CE/AZ/AUC/HLF/T-29/2018-19/LOA DT 20 JUL 2019",
  },
  {
    title: "Grampanchayat Electrification — Expansion",
    description:
      "Continued PWD work installing solar street lights, LED street lights, high masts and Anganwadi digitalization across Dhule, Jalgaon, Nashik and Nandurbar districts.",
    image: images.ongoing.villageElectrification,
    client: "PWD Maharashtra",
    location: "150+ Villages",
    technology: "Solar LED, High Mast, Digitalization",
    workOrder: "Multiple ongoing contracts",
  },
];

export const governmentLogos = [
  { name: "PWD", image: images.associations.pwd, description: "Public Work Department of India" },
  { name: "MSEDCL", image: images.associations.msedcl, description: "Maharashtra State Electricity Distribution Co. Ltd." },
  { name: "Indian Railways", image: images.associations.indianRailways, description: "Registered Railway Contractor" },
  { name: "MIDC", image: images.associations.midc, description: "Maharashtra Industrial Development Corporation" },
  { name: "Zilla Parishad", image: images.associations.zillaParishad, description: "Zilla Parishad Partnership Projects" },
  { name: "Saubhagya Scheme", image: images.associations.saubhagya, description: "Pradhan Mantri Sahaj Bijli Har Ghar Yojana" },
  { name: "Jal Jeevan Mission", image: images.associations.jalJeevan, description: "Water Department Collaboration" },
  { name: "Reliance Jio", image: images.associations.relianceJio, description: "Private Sector Partnership" },
];

export const tradeMarks = [
  {
    name: "Padma",
    description:
      "SEPL's trademarked product line that has immensely helped increase the turnover of the company. A trusted brand in LED, Solar and home appliances.",
    category: "LED & Home Appliances",
  },
  {
    name: "SEPL",
    description:
      "Registered brand representing quality electrical goods, government contracting excellence and rural development commitment since 2013.",
    category: "Corporate Brand",
  },
];

export const ourTeam = {
  intro:
    "We are blessed to have well trained and technologically sound members as part of our team. Our team is highly trained to smoothly execute complex turnkey projects of prime importance.",
  description:
    "Our team consists of Electrical Supervisors and technicians who work tirelessly to meet project demands. Each and every member of this team is a key to our success. That is the reason SEPL works as one big happy family!",
  highlights: [
    "Electrical Supervisors & Technicians",
    "Turnkey Project Execution Specialists",
    "Government Scheme Implementation Experts",
    "LED, Solar & Infrastructure Engineers",
  ],
};

export const director = {
  name: "Mr. Sagar Girase",
  designation: "Managing Director",
  image: images.director,
  experience:
    "Leading Suvidhinath Electronics Pvt. Ltd. as Director, overseeing government contracting, rural electrification and turnkey infrastructure projects across Maharashtra.",
  philosophy:
    "SEPL truly follows what we say — \"We Care!\" Every project is a commitment to brightening the lives of our people. Leadership means accountability to the communities we serve.",
  vision:
    "To make SEPL the most trusted name in electronics goods and government infrastructure — powering villages, delivering quality, and changing lives across rural Maharashtra.",
  quote:
    "Every small effort towards brightening the lives of our people is monumental.",
};

export const otherActivitiesContent = {
  intro:
    "SEPL has been at the forefront of rural development, undertaking a wide range of initiatives aimed at improving infrastructure and amenities in rural areas across Maharashtra.",
  initiatives: [
    "Village decoration works",
    "Jal Jeevan Mission — Water Department collaboration",
    "Dustbins for village panchayats",
    "Anganwadi painting & sitting arrangements",
    "Statue decoration — Chhatrapati Shivaji Maharaj & Dr. Babasaheb Ambedkar",
    "RO water plants installation",
    "Community toilet construction",
    "Community halls & school renovation",
    "Solar power systems for villages",
  ],
};

export const galleryItems = [
  {
    title: "Village Development",
    image: images.gallery.villageDevelopment,
    images: [...images.gallery.villageDevelopmentGallery],
    height: "h-64",
  },
  {
    title: "Community Toilets",
    image: images.gallery.toilets,
    images: [...images.gallery.toiletsGallery],
    height: "h-48",
  },
  {
    title: "RO Water Plants",
    image: images.gallery.roPlants,
    images: [...images.gallery.roPlantsGallery],
    height: "h-72",
  },
  {
    title: "School Beautification",
    image: images.gallery.schools,
    images: [...images.gallery.schoolsGallery],
    height: "h-56",
  },
  {
    title: "Street Lights",
    image: images.gallery.streetLights,
    images: [...images.gallery.streetLightsGallery],
    height: "h-64",
  },
  {
    title: "Solar Installations",
    image: images.gallery.solar,
    images: [...images.gallery.solarGallery],
    height: "h-52",
  },
  {
    title: "Water Projects",
    image: images.gallery.waterProjects,
    images: [...images.gallery.waterProjectsGallery],
    height: "h-60",
  },
  {
    title: "Beautification",
    image: images.gallery.beautification,
    images: [...images.gallery.beautificationGallery],
    height: "h-48",
  },
];

export const stats = [
  { value: 12, suffix: "+", label: "Years Experience" },
  { value: 150, suffix: "+", label: "Villages Served" },
  { value: 4843, suffix: "+", label: "Service Connections" },
];

export const turnover = {
  intro:
    "For any business, success is reflected in the numbers — not only in ever-increasing revenue, but also in the number of satisfied and loyal customers.",
  growth:
    "SEPL started in 2013 and has captured significant market share by understanding its customer base. What began as a promising venture is now on the verge of becoming a role model for similar businesses.",
  highlight:
    "Launch of trademarked products like Padma has immensely helped increase the turnover of SEPL, establishing the company as a trusted partner for both government and private sectors.",
};

export const testimonials = [
  {
    quote:
      "SEPL delivered our Saubhagya scheme electrification project with exceptional quality and timely execution across Shirpur subdivision.",
    author: "MSEDCL Official",
    role: "Maharashtra State Electricity Distribution Co. Ltd.",
    category: "Government",
  },
  {
    quote:
      "The Grampanchayat electrification work across our district has transformed villages with solar street lights and LED infrastructure.",
    author: "PWD Representative",
    role: "Public Work Department, Maharashtra",
    category: "Government",
  },
  {
    quote:
      "Working with SEPL on our electrical infrastructure was seamless. Their team executes complex turnkey projects with professionalism.",
    author: "Reliance Jio",
    role: "Infrastructure Partner",
    category: "Partners",
  },
  {
    quote:
      "SEPL's LED and solar solutions are reliable and economical. Their Padma brand products have been excellent for our requirements.",
    author: "Commercial Client",
    role: "Private Sector Enterprise",
    category: "Private Clients",
  },
];

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Company", href: "#company-details" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "Director", href: "#director" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
];

export const footerLinks = {
  quick: [
    { label: "About Us", href: "#about" },
    { label: "Company Details", href: "#company-details" },
    { label: "Our Team", href: "#our-team" },
    { label: "Trade Marks", href: "#trademarks" },
    { label: "Our Director", href: "#director" },
    { label: "Turnover", href: "#turnover" },
    { label: "Contact", href: "#contact" },
  ],
  services: services.map((s) => ({ label: s.title, href: "#services" })),
  projects: completedProjects.map((p) => ({ label: p.title, href: "#projects" })),
};

// Backward compat
export const projects = completedProjects;
