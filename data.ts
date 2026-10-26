import {
  Briefcase,
  Cloud,
  Code2,
  Coffee,
  Cpu,
  Database,
  GitBranch,
  Globe,
  GraduationCap,
  Layers,
  Layers3Icon,
  Layout,
  Mail,
  MapPin,
  Palette,
  Phone,
  Server,
  Smartphone,
  Terminal,
} from "lucide-react";

import {
  FaWordpress,
  FaElementor,
  FaDocker,
  
  FaLinux,
  FaAws,
  FaPhp,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
} from "react-icons/fa6";

import {
  SiWoocommerce,
  SiMysql,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiCloudflare,
  SiVercel,
  SiGoogleanalytics,
  SiGit,
  SiBricks,
  SiGutenberg,
  SiChatbot,
  SiOpenrouter,
} from "react-icons/si";
import { FaGithub, FaLinkedin, FaLinkedinIn, FaTwitter } from "react-icons/fa6";
// import { Html } from "next/document";
import { BsJavascript } from "react-icons/bs";
import { RiNextjsFill } from "react-icons/ri";
import { PiOpenAiLogo } from "react-icons/pi";
import { AiFillAccountBook } from "react-icons/ai";
import { FcCustomerSupport } from "react-icons/fc";

export const stats = [
  { label: "Years of Professional Experiencev", value: "5+" },
  { label: "WordPress & WooCommerce Projects", value: "100+" },
  { label: "Happy Clients WorldWide", value: "40+" },
  { label: "Students Mentored", value: "500+" },
];

export const highlights = [
  { icon: Terminal, text: "WordPress, WooCommerce & AI Integration Specialist" },
  { icon: Briefcase, text: "Open for freelance work & Remote Projects" },
  { icon: MapPin, text: "Available Worldwide" },
  
];

export const userReviewData = [
  {
    id: 1,
    name: "David M.",
    profession: "Ecommerce Business Owner",
    userImage: "/images/u1.jpg",
    review:
      "Sana developed a custom WooCommerce store that perfectly matched our business requirements. The website is fast, mobile-friendly, easy to manage, and delivers an excellent shopping experience. Communication was professional throughout the project, and every milestone was completed on schedule.",
  },
  {
    id: 2,
    name: "Dr. Stéphane Narcis",
    profession: "Vice Chancellor",
    userImage: "/images/u2.jpg",
    review:
      "Sana built more than just a university website—he developed a complete digital platform tailored to our academic needs. His technical expertise, problem-solving approach, and attention to detail made him a reliable long-term technology partner for our institution.",
  },
  {
    id: 3,
    name: "Alex Johnson",
    profession: "Travel Agency Owner",
    userImage: "/images/u3.jpg",
    review:
      "Our travel website now showcases tour packages in a modern, engaging, and user-friendly way. Sana developed a custom WordPress solution that is easy to update, performs well across devices, and has significantly improved our online presence.",
  },
  {
    id: 4,
    name: "Emily Clark",
    profession: "Transpotation of Goods",
    userImage: "/images/u4.jpg",
    review:
      "Sana designed and developed a professional website that clearly presents our transportation services and strengthens our online brand. The website is responsive, fast, and easy for our team to manage, and we couldn't be happier with the outcome.",
  },
];

export const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "contact@devsanaa.com",
    href: "mailto:contact@devsanaa.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+92 (309) 954-3250",
    href: "tel:+923099543250",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Gujrat, Punjab, Pakistan ",
    href: "#",
  },
];

export const socialLinks = [
  { icon: FaGithub, href: "https://github.com/sanaach66/", label: "GitHub" },
  { icon: FaLinkedinIn, href: "https://www.linkedin.com/in/sana-ullah123/", label: "LinkedIn" },
  { icon: FaTwitter, href: "https://twitter.com", label: "Twitter" },
];

export const experiences = [
  {
    type: "work",
    title: "Senior WordPress Developer",
    company: "Studio Toronto",
    period: "2021 - Present",
    description:
      "Led the development of high-performance WordPress websites and WooCommerce stores using Elementor, Bricks Builder, Gutenberg, and custom PHP solutions. Delivered responsive, SEO-friendly, conversion-focused websites while optimizing performance, security, and user experience for international clients.",
    technologies: ["WordPress","Woocommerce","Elementor","Bricks","PHP", "REST API", "Server Management"],
  },
  {
    type: "work",
    title: "WordPress Web Developer",
    company: "Ziel Global",
    period: "2019 - 2021",
    description:
      "Developed and maintained custom WordPress websites for businesses across multiple industries. Collaborated with designers to transform Figma designs into responsive, pixel-perfect websites while implementing custom functionality using PHP, JavaScript, and MySQL.",
    technologies: ["WordPress","Woocommerce","Elementor","PHP", "REST API", "Server Management"],
  },
  
  {
    type: "work",
    title: "IT Administrator",
    company: "L&DD Punjab",
    period: "2017 - 2019",
    description:
      "Managed IT infrastructure, system administration, and technical support while contributing to website maintenance, server management, and internal web solutions. This role strengthened my understanding of hosting environments, networking, and website deployment.",
    technologies: ["Linux", "Windows Server", "Network Management"],
  },

  {
    type: "work",
    title: "Freelance Web Developer",
    company: "Self Employed",
    period: "2013 - 2017",
    description:
      "Worked with startups, agencies, and business owners to design, develop, and maintain custom WordPress websites, WooCommerce stores, and business portals. Delivered website optimization, bug fixing, custom functionality, and ongoing technical support for clients worldwide.",
    technologies: ["WordPress","Woocommerce","Elementor","PHP", "REST API", "Server Management"],
  },

  {
    type: "education",
    title: "Bachelor of Computer Science",
    company: "University of Gujrat",
    period: "2008 - 2012",
    description:
      "Completed a Bachelor's degree in Computer Science with a strong foundation in software engineering, databases, algorithms, object-oriented programming, and web technologies that continue to support my professional development.",
    technologies: ["Computer Science", "Mathematics", "Problem Solving"],
  },
];

export const footerSocialLinks = [
  { icon: FaGithub, href: "https://github.com/sanaach66", label: "GitHub" },
  { icon: FaLinkedin, href: "https://www.linkedin.com/in/sana-ullah123/", label: "LinkedIn" },
  
  { icon: Mail, href: "mailto:contact@devsanaa.com", label: "Email" },
];

export const projects = [
  {
    title: "E-Commerce Electronics Store/Website",
    description:
      "Developed a modern WooCommerce electronics store with a custom shopping experience, responsive design, optimized product pages, and a streamlined checkout process to improve customer engagement and online sales.",
    image: "/images/tech-store.jpg",
    techStack: ["WordPress", "Woocommerce","Bricks", "Stripe", "MySQL"],
    demoUrl: "https://royaltech.pro/",
    githubUrl: "https://github.com/sanaach66",
  },
  {
    title: "International University Website",
    description:
      "Redesigned the university website using Elementor and custom WordPress development. Built reusable components, developed custom functionality, and improved usability for students, faculty, and administrators.",
    image: "/images/university-website.jpg",
    techStack: ["WordPress","Elementor", "PHP", "JS", "MySQL"],
    demoUrl: "https://pebblehills.edu.pl/",
    githubUrl: "vhttps://github.com/sanaach66",
  },
  {
    title: "Travel & Tour Packages Website",
    description:
      "Designed and developed a custom WordPress travel website to showcase tour packages through an engaging, user-friendly interface with dynamic content management and mobile-responsive layouts.",
    image: "/images/tours-travels-website-wordpress.jpg",
    techStack: ["ACF Pro", "Elementor Pro", "PHP", "Javascript"],
    demoUrl: "https://aclassleisure.com/",
    githubUrl: "https://github.com/sanaach66",
  },
  {
    title: "Ecommerce Grocery Store",
    description:
      "Developed a fully customized WooCommerce grocery store for an Australian business featuring category optimization, custom checkout enhancements, responsive layouts, and an intuitive shopping experience.",
    image: "/images/online-grocery-store-woocommerce.jpg",
    techStack: ["Woocommerce", "PHP", "MySQL", "Plugin Development"],
    demoUrl: "https://demo.devsanaa.com/groze",
    githubUrl: "https://github.com/sanaach66",
  },
  {
    title: "Transportation of Goods Website",
    description:
      "Built a modern transportation company website focused on presenting logistics services, improving brand credibility, and generating business inquiries through a responsive and professional design.",
    image: "/images/wordpress-logistics-website.jpg",
    techStack: ["Elementor", "Figma", "PHP", "Javascript"],
    demoUrl: "https://starin-transport.si/",
    githubUrl: "https://github.com/sanaach66",
  },
  {
    title: "Health Clinic Website",
    description:
      "Designed and developed a responsive healthcare website with an intuitive user experience, service pages, contact forms, and performance optimization to strengthen the clinic's online presence.",
    image: "/images/wordpress-health-clinic-website.jpg",
    techStack: ["WordPress", "Elementor", "PHP", "Javascript"],
    demoUrl: "https://www.novakliniek.nl/",
    githubUrl: "https://github.com/sanaach66v",
  },
];

export const skillCategories = [
  {
    title: "WordPress Development",
    skills: [
      { name: "WordPress", icon: FaWordpress },
      { name: "Woocommerce", icon: SiWoocommerce },
      { name: "Elementor", icon: FaElementor },
      { name: "Bricks", icon: SiBricks },
      { name: "Gutenberg", icon: SiGutenberg },
      { name: "ACF Pro", icon: Layout },
    ],
  },
  // frontend
  {
    title: "Frontend",
    skills: [
      { name: "HTML 5", icon: Globe },
      { name: "CSS 3", icon:  Palette},
      { name: "Javascript", icon: BsJavascript },
      { name: "Typescript", icon: SiTypescript },
      { name: "React", icon: Layers3Icon },
      { name: "Next JS", icon: RiNextjsFill },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", icon: Server },
      { name: "Express", icon: Layers },
      { name: "MongoDB", icon: Database },
      { name: "MySQL", icon: Database },
      { name: "GraphQL", icon: Cpu },
      { name: "REST APIs", icon: Cloud },
    ],
  },


  {
    title: "Tools & Others",
    skills: [
      { name: "Git", icon: GitBranch },
      { name: "Docker", icon: Server },
      { name: "AWS", icon: Cloud },
      { name: "Linux", icon: Terminal },
      { name: "Figma", icon: Palette },
      { name: "CI/CD", icon: Cpu },
    ],
  },

  // AI integration

  {
    title: "AI integration",
    skills: [
      { name: "AI Chatbots", icon: SiChatbot },
      { name: "Open AI API", icon: PiOpenAiLogo },
      { name: "Open Rounter", icon: SiOpenrouter },
      { name: "AI Customer Support", icon: FcCustomerSupport },
      { name: "RAG Basics", icon: Palette },
      { name: "AI Workflow Automation", icon: Cpu },
    ],
  },
];