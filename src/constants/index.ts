import type {
  TNavLink,
  TService,
  TTechnology,
  TExperience,
  TTestimonial,
  TProject,
} from "../types";

import peter from "../assets/person/peter.jpg";
import lois from "../assets/person/lois.jpg";
import meg from "../assets/person/meg.jpg";

import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  reactjs,
  nodejs,
  mongodb,
  git,
  docker,
  carrent,
  jobit,
  tripguide,
} from "../assets";

import python from "../assets/tech/python-icon.svg";
import java from "../assets/tech/java-icon.svg";
import mysql from "../assets/tech/mysql-icon.svg";
import scala from "../assets/tech/scala-lang-icon.svg";

import flask from "../assets/tech/pocoo_flask-icon.svg";

import spark from "../assets/tech/spark.png";
import fulljs from "../assets/company/full-stack-javascript-developer.jpg"
import full from "../assets/company/Full-Stack-Developer.png"
import bigdata from "../assets/company/bigdata.jpg"
import skills from "../assets/company/skills.jpg"

export const navLinks: TNavLink[] = [
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

const services: TService[] = [
  {
    title: "Big Data Analyst",
    icon: backend,
  },
  {
    title: "Web Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: web,
  },
  {
    title: "Ultimate Debugger",
    icon: creator,
  },
];

const technologies: TTechnology[] = [
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },

  {
    name: "Python",
    icon: python,
  },
  {
    name: "Flask",
    icon: flask,
  },
  {
    name: "Java",
    icon: java,
  },
  {
    name: "Scala",
    icon: scala,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "MySQL",
    icon: mysql,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "docker",
    icon: docker,
  },
  {
    name: "Spark",
    icon: spark,
  },
];


const experiences: TExperience[] = [
  {
    title: "Full Stack JavaScript Developer",
    companyName: "Home",
    icon: fulljs,
    iconBg: "#383E56",
    date: "January 2021 - June 2022",
    points: [
      "Mastered full stack JavaScript development, starting with HTML, CSS, and JavaScript.",
      "Advanced to front-end development using React.js and back-end development with Node.js.",
      "Built dynamic, full-fledged web applications.",
    ],
  },
  {
    title: "Full Stack Developer",
    companyName: "ISAMM",
    icon: full,
    iconBg: "#E6DEDD",
    date: "August 2022 - April 2023",
    points: [
      "Expanded skill set to include both web and mobile development.",
      "Enhanced web development skills with advanced frameworks and tools.",
      "Developed cross-platform applications using React Native.",
    ],
  },
  {
    title: "Big Data Analyst",
    companyName: "ISAMM/ESCT",
    icon: bigdata,
    iconBg: "#383E56",
    date: "September 2023 - May 2024",
    points: [
      "Gained proficiency in Python for data analysis.",
      "Learned big data technologies like Apache Spark and Hadoop.",
      "Extracted valuable insights from complex data sets.",
    ],
  },
  {
    title: "Skill Development",
    companyName: "ISAMM/ESCT",
    icon: skills,
    iconBg: "#E6DEDD",
    date: "May 2024 - Present",
    points: [
      "Delving into web scraping and data collection techniques.",
      "Using tools and libraries for efficient data gathering.",
      "Staying updated with the latest trends and technologies.",
      "Continuously improving skill set for robust and relevant expertise.",
    ],
  },
];


const testimonials: TTestimonial[] = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Firas proved me wrong.",
    name: "Peter Griffin",
    designation: "CFO",
    company: "Data Corp",
    image: peter,
  },
  {
    testimonial:
      "You need Data scraped, Firas is the guy to go to. He's fast, efficient, and a pleasure to work with. Highly recommended.",
    name: "Lois Lane",
    designation: "COO",
    company: "Daily Planet",
    image: lois,
  },
  {
    testimonial:
      "Analyzing data is a breeze with Firas. He's a master at what he does and a great team player.",
    name: "Meg Zuckerman",
    designation: "CTO",
    company: "Tech Co",
    image: meg,
  },
];

const projects: TProject[] = [
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
    sourceCodeLink: "https://github.com/",
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
    sourceCodeLink: "https://github.com/",
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
    sourceCodeLink: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };