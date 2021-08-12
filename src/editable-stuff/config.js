// Navigation Bar SECTION
const navBar = {
  show: true,
};

// Main Body SECTION
const mainBody = {
  gradientColors: "#4484ce, #1ad7c0, #ff9b11, #9b59b6, #ff7f7f, #ecf0f1",
  firstName: "Saarthak",
  middleName: "",
  lastName: "Mehra",
  message: " Motivated to learn new things. ",
  icons: [
    {
      image: "fa-github",
      url: "https://github.com/saarthakmehra",
    },
    {
      image: "fa-linkedin",
      url: "https://www.linkedin.com/in/saarthakmehra/",
    },
  ],
};

// ABOUT SECTION
// If you want the About Section to show a profile picture you can fill the profilePictureLink either with:
//a) your Instagram username
//      i.e:profilePictureLink:"johnDoe123",
//b) a link to an hosted image
//      i.e:profilePictureLink:"www.picturesonline.com/johnDoeFancyAvatar.jpg",
//c) image in "editable-stuff" directory and use require("") to import here,
//      i.e: profilePictureLink: require("../editable-stuff/hashirshoaeb.png"),
//d) If you do not want any picture to be displayed, just leave it empty :)
//      i.e: profilePictureLink: "",
// For Resume either provide link to your resume or import from "editable-stuff" directory
//     i.e resume: require("../editable-stuff/resume.pdf"),
//         resume: "https://docs.google.com/document/d/13_PWdhThMr6roxb-UFiJj4YAFOj8e_bv3Vx9UHQdyBQ/edit?usp=sharing",

const about = {
  show: true,
  heading: "About Me",
  imageLink: require("../editable-stuff/profilepic.jpg"),
  imageSize: 212,
  message:
    "My name is Saarthak Mehra. I graduated in 2020 from UC San Diego with a B.S. in Cognitive Science, specializing in Machine Learning and Neural Computation, and a minor in Computer Science. I am passionate about data engineering and web development, but my skills go beyond that. My goal is to simplify and automate complex and tedious processes, allowing us to focus more on the 'what' than the 'how'. ",
  resume: require("../editable-stuff/resume.pdf"),
};

// PROJECTS SECTION
// Setting up project lenght will automatically fetch your that number of recently updated projects, or you can set this field 0 to show none.
//      i.e: reposLength: 0,
// If you want to display specfic projects, add the repository names,
//      i.e ["repository-1", "repo-2"]
const repos = {
  show: true,
  heading: "Recent Projects",
  gitHubUsername: "saarthakmehra", //i.e."johnDoe12Gh"
  reposLength: 0,
  specificRepos: [],
};

// Leadership SECTION
const leadership = {
  show: false,
  heading: "Leadership",
  message:
    "Teaching people about a skill or subject not only helps me reinforce that content, but also provides me with a fresh perspective on problem solving.",
  images: [
    { 
      img: require("../editable-stuff/hashirshoaeb.png"), 
      label: "San Diego Supercomputer Center", 
      paragraph: "Research Assistant at a satellite image classification lab." 
    },
    { 
      img: require("../editable-stuff/hashirshoaeb.png"), 
      label: "DataHacks: San Diego's Annual Hackathon", 
      paragraph: "Technical Director for the Hackathon's business/finance related tract." 
    },
  ],
  imageSize: {
    width:"615",
    height:"450"
  }
};

// SKILLS SECTION
const skills = {
  show: true,
  heading: "Skills",
  hardSkills: [
    { name: "Python", value: 90 },
    { name: "Java", value: 80 },
    { name: "SQL", value: 85 },
    { name: "C/C++", value: 65 },
    { name: "JavaScript", value: 80 },
    { name: "Spark/Scala", value: 65},
    { name: "ETL Tools", value: 80}
  ],
};

// GET IN TOUCH SECTION
const getInTouch = {
  show: true,
  heading: "Get In Touch",
  message:
    "I'm currently looking for full-time Software Engineering opportunities! If you know of any positions available, please feel free to email me at",
  email: "saarthakmehra99@gmail.com",
};

const experiences = {
  show: false,
  heading: "Experiences",
  data: [
    {
      role: 'Software Engineer',// Here Add Company Name
      companylogo: require('../assets/img/amex.png'),
      date: 'January 2021 – Present',
    },
    {
      role: 'Software Engineer Intern',
      companylogo: require('../assets/img/bedrock.jpeg'),
      date: 'June 2019 – September 2019',
    },
  ]
}

// Blog SECTION
// const blog = {
//   show: false,
// };

export { navBar, mainBody, about, repos, skills, leadership, getInTouch, experiences };
