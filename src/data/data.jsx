import { FiCode, FiUsers, FiAward, FiBookOpen } from "react-icons/fi";
import FullStack from "/src/assets/Images/Full-Stack Web Development.png";
import DataScience from "/src/assets/Images/Data Science & Machine Learning.png";
import MobileApp from "/src/assets/Images/Mobile App Development.png";
import CloudArchitecture from "/src/assets/Images//Cloud Architecture & DevOps.png";
import Cybersecurity from "/src/assets/Images/Cybersecurity Fundamentals.png";
import Advanced from "/src/assets/Images/Advanced JavaScript Programming.png";
import Design from "/src/assets/Images/UIUX Design for Developers.png";
import Blockchain from "/src/assets/Images/Blockchain Development.png";
import Python from "/src/assets/Images/Python for Data Analysis.png";

export const NavLinks = [
  { name: "Home", path: "/" },
  { name: "Courses", path: "/courses" },
  { name: "Mentors", path: "/mentors" },
  { name: "About Us", path: "/about" },
  { name: "Contact", path: "/contact" },
];

export const Features = [
  {
    icon: <FiCode className="h-6 w-6" />,
    title: "Cutting-Edge Curriculum",
    description:
      "Our courses are constantly updated to reflect the latest industry trends and technologies.",
  },
  {
    icon: <FiUsers className="h-6 w-6" />,
    title: "Expert Mentors",
    description:
      "Learn from industry professionals with years of real-world experience.",
  },
  {
    icon: <FiAward className="h-6 w-6" />,
    title: "Recognized Certification",
    description:
      "Earn certificates that are recognized and valued by top tech companies.",
  },
  {
    icon: <FiBookOpen className="h-6 w-6" />,
    title: "Flexible Learning",
    description:
      "Study at your own pace with our flexible online learning platform.",
  },
];

export const Categories = [
  { id: "all", name: "All Courses" },
  { id: "web", name: "Web Development" },
  { id: "data", name: "Data Science" },
  { id: "mobile", name: "Mobile Development" },
  { id: "cloud", name: "Cloud Computing" },
  { id: "security", name: "Cybersecurity" },
];

export const Levels = [
  { id: "all", name: "All Levels" },
  { id: "beginner", name: "Beginner" },
  { id: "intermediate", name: "Intermediate" },
  { id: "advanced", name: "Advanced" },
];

export const Specialties = [
  { id: "all", name: "All Specialties" },
  { id: "web", name: "Web Development" },
  { id: "data", name: "Data Science" },
  { id: "mobile", name: "Mobile Development" },
  { id: "cloud", name: "Cloud Computing" },
  { id: "security", name: "Cybersecurity" },
];

export const CoursesData = [
  {
    id: 1,
    title: "Full-Stack Web Development",
    category: "web",
    level: "intermediate",
    image: FullStack,
    weeks: 12,
    students: 1240,
    rating: 4.9,
    price: 499,
    description:
      "Master modern web development with JavaScript, React, Node.js, and MongoDB. Build real-world projects and deploy them to the cloud.",
  },
  {
    id: 2,
    title: "Data Science & Machine Learning",
    category: "data",
    level: "advanced",
    image: DataScience,
    weeks: 10,
    students: 980,
    rating: 4.8,
    price: 599,
    description:
      "Learn to analyze data, build predictive models, and implement machine learning algorithms using Python, TensorFlow, and scikit-learn.",
  },
  {
    id: 3,
    title: "Mobile App Development",
    category: "mobile",
    level: "beginner",
    image: MobileApp,
    weeks: 8,
    students: 750,
    rating: 4.7,
    price: 449,
    description:
      "Create cross-platform mobile applications using React Native. Design beautiful UIs and implement native functionality.",
  },
  {
    id: 4,
    title: "Cloud Architecture & DevOps",
    category: "cloud",
    level: "intermediate",
    image: CloudArchitecture,
    weeks: 9,
    students: 620,
    rating: 4.6,
    price: 549,
    description:
      "Master cloud services, CI/CD pipelines, containerization, and infrastructure as code using AWS, Docker, and Kubernetes.",
  },
  {
    id: 5,
    title: "Cybersecurity Fundamentals",
    category: "security",
    level: "beginner",
    image: Cybersecurity,
    weeks: 8,
    students: 890,
    rating: 4.8,
    price: 499,
    description:
      "Learn to identify vulnerabilities, implement security measures, and protect systems from cyber threats and attacks.",
  },
  {
    id: 6,
    title: "Advanced JavaScript Programming",
    category: "web",
    level: "advanced",
    image: Advanced,
    weeks: 6,
    students: 1050,
    rating: 4.9,
    price: 399,
    description:
      "Deep dive into advanced JavaScript concepts, design patterns, performance optimization, and modern ES6+ features.",
  },
  {
    id: 7,
    title: "UI/UX Design for Developers",
    category: "web",
    level: "beginner",
    image: Design,
    weeks: 7,
    students: 830,
    rating: 4.7,
    price: 349,
    description:
      "Learn design principles, user research, wireframing, prototyping, and how to create beautiful, user-friendly interfaces.",
  },
  {
    id: 8,
    title: "Blockchain Development",
    category: "web",
    level: "advanced",
    image: Blockchain,
    weeks: 10,
    students: 580,
    rating: 4.6,
    price: 649,
    description:
      "Build decentralized applications (dApps) using Ethereum, Solidity, and Web3.js. Implement smart contracts and tokens.",
  },
  {
    id: 9,
    title: "Python for Data Analysis",
    category: "data",
    level: "intermediate",
    image: Python,
    weeks: 8,
    students: 920,
    rating: 4.8,
    price: 449,
    description:
      "Master data manipulation, visualization, and analysis using Python, Pandas, NumPy, and Matplotlib.",
  },
];

export const MentorsData = [
  {
    id: 1,
    name: "Dr. Sarah Johnson",
    title: "Lead Data Scientist",
    specialty: "data",
    image: "bg-gradient-to-br from-green-500 to-teal-600",
    company: "DataViz Inc.",
    experience: 12,
    bio: "Former Google AI researcher with a PhD in Machine Learning. Specializes in neural networks and computer vision.",
    courses: ["Data Science & Machine Learning", "Deep Learning Fundamentals"],
    social: {
      linkedin: "#",
      twitter: "#",
      github: "#",
    },
  },
  {
    id: 2,
    name: "James Wilson",
    title: "Senior Full-Stack Developer",
    specialty: "web",
    image: "bg-gradient-to-br from-blue-500 to-purple-600",
    company: "TechCorp",
    experience: 10,
    bio: "Full-stack developer with expertise in React, Node.js, and cloud architecture. Has built applications used by millions.",
    courses: ["Full-Stack Web Development", "Advanced JavaScript Programming"],
    social: {
      linkedin: "#",
      twitter: "#",
      github: "#",
    },
  },
  {
    id: 3,
    name: "Emily Chen",
    title: "Mobile App Architect",
    specialty: "mobile",
    image: "bg-gradient-to-br from-orange-500 to-pink-600",
    company: "AppWorks",
    experience: 8,
    bio: "Former lead developer at Uber. Expert in React Native, Swift, and Kotlin. Has launched over 20 successful mobile apps.",
    courses: ["Mobile App Development", "iOS Development with Swift"],
    social: {
      linkedin: "#",
      twitter: "#",
      github: "#",
    },
  },
  {
    id: 4,
    name: "Michael Rodriguez",
    title: "Cloud Solutions Architect",
    specialty: "cloud",
    image: "bg-gradient-to-br from-blue-400 to-cyan-600",
    company: "CloudTech Solutions",
    experience: 15,
    bio: "AWS certified architect with extensive experience in designing scalable cloud infrastructure for enterprise applications.",
    courses: ["Cloud Architecture & DevOps", "AWS Certification Prep"],
    social: {
      linkedin: "#",
      twitter: "#",
      github: "#",
    },
  },
  {
    id: 5,
    name: "Olivia Taylor",
    title: "Cybersecurity Expert",
    specialty: "security",
    image: "bg-gradient-to-br from-red-500 to-purple-600",
    company: "SecureNet",
    experience: 11,
    bio: "Former NSA security analyst. Specializes in penetration testing, threat analysis, and security infrastructure.",
    courses: ["Cybersecurity Fundamentals", "Ethical Hacking"],
    social: {
      linkedin: "#",
      twitter: "#",
      github: "#",
    },
  },
  {
    id: 6,
    name: "David Park",
    title: "UI/UX Design Lead",
    specialty: "web",
    image: "bg-gradient-to-br from-pink-500 to-purple-600",
    company: "DesignHub",
    experience: 9,
    bio: "Award-winning designer who combines aesthetics with functionality. Expert in user research and design systems.",
    courses: ["UI/UX Design for Developers", "Design Systems"],
    social: {
      linkedin: "#",
      twitter: "#",
      github: "#",
    },
  },
  {
    id: 7,
    name: "Sophia Martinez",
    title: "Blockchain Developer",
    specialty: "web",
    image: "bg-gradient-to-br from-indigo-500 to-blue-600",
    company: "BlockChain Innovations",
    experience: 7,
    bio: "Blockchain expert specializing in Ethereum and smart contract development. Has worked on several successful DeFi projects.",
    courses: ["Blockchain Development", "Smart Contract Security"],
    social: {
      linkedin: "#",
      twitter: "#",
      github: "#",
    },
  },
  {
    id: 8,
    name: "Robert Kim",
    title: "AI Research Scientist",
    specialty: "data",
    image: "bg-gradient-to-br from-purple-500 to-indigo-600",
    company: "AI Innovations",
    experience: 14,
    bio: "PhD in Artificial Intelligence with research focus on reinforcement learning and natural language processing.",
    courses: ["Advanced Machine Learning", "Natural Language Processing"],
    social: {
      linkedin: "#",
      twitter: "#",
      github: "#",
    },
  },
];

export const MentorsPageData = [
  {
    title: "Professional Experience",
    description:
      "Minimum 5 years of industry experience in your area of expertise.",
  },
  {
    title: "Teaching Ability",
    description:
      "Excellent communication skills and ability to explain complex concepts clearly.",
  },
  {
    title: "Commitment",
    description:
      "Ability to dedicate at least 5-10 hours per week to mentoring students.",
  },
  {
    title: "Technical Knowledge",
    description:
      "Deep understanding of current technologies and best practices in your field.",
  },
];
