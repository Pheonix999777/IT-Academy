import FullStack from "/src/assets/Images/Full-Stack Web Development.png";
import DataScience from "/src/assets/Images/Data Science & Machine Learning.png";
import MobileApp from "/src/assets/Images/Mobile App Development.png";

export const Mentors = [
  {
    id: 1,
    name: "Dr. Sarah Johnson",
    title: "Lead Data Scientist",
    specialty: "data",
    image: "bg-gradient-to-br from-green-500 to-teal-600",
    company: "DataViz Inc.",
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
    social: {
      linkedin: "#",
      twitter: "#",
      github: "#",
    },
  },
];

export const PopularCoursesData = [
  {
    id: 1,
    title: "Full-Stack Web Development",
    category: "Web Development",
    level: "Intermediate",
    image: FullStack,
    weeks: 12,
    rating: 4.9,
    price: 499,
    description:
      "Master modern web development with JavaScript, React, Node.js, and MongoDB. Build real-world projects and deploy them to the cloud.",
    students: 1240,
  },
  {
    id: 2,
    title: "Data Science & Machine Learning",
    category: "Data Science",
    level: "Advanced",
    image: DataScience,
    weeks: 10,
    rating: 4.8,
    price: 599,
    description:
      "Learn to analyze data, build predictive models, and implement machine learning algorithms using Python, TensorFlow, and scikit-learn.",
    students: 980,
  },
  {
    id: 3,
    title: "Mobile App Development",
    category: "Mobile",
    level: "Beginner",
    image: MobileApp,
    weeks: 8,
    rating: 4.7,
    price: 449,
    description:
      "Create cross-platform mobile applications using React Native. Design beautiful UIs and implement native functionality.",
    students: 750,
  },
];

export const TestimonialsData = [
  {
    name: "Alex Johnson",
    role: "Full-Stack Developer",
    company: "TechCorp",
    image: "bg-gradient-to-br from-blue-500 to-purple-600",
    quote:
      "The curriculum was challenging but incredibly rewarding. I landed a job as a developer within a month of graduating.",
  },
  {
    name: "Sarah Williams",
    role: "Data Scientist",
    company: "DataViz Inc.",
    image: "bg-gradient-to-br from-green-500 to-teal-600",
    quote:
      "The instructors were incredibly knowledgeable and supportive. The hands-on projects prepared me for real-world challenges.",
  },
  {
    name: "Michael Chen",
    role: "Mobile App Developer",
    company: "AppWorks",
    image: "bg-gradient-to-br from-orange-500 to-pink-600",
    quote:
      "Switching careers was daunting, but IT Academy made the transition smooth. The mentorship program was invaluable.",
  },
];
