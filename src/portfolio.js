const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://MoonSulong.github.io',
  title: 'JS.',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Sulong Zhou',
  role: 'Full Stack Engineer',
  description:
    'Inquisitive computer science graduate with solid full-stack software engineering track in web application design, development and testing, and 5 years of Ph.D. research experience in machine learning applications. Expert in programming skills in Java, Rest API, React/Redux, UI/UX, and Agile Web Development. Proficient in communication, analytical thinking and learning new technologies.',
  // resume: 'https://example.com',
  social: {
    linkedin: 'https://www.linkedin.com/in/sulongzhou/',
    github: 'https://github.com/MoonSulong',
  },
}

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Redux',
  'Webpack',
]


const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'Project 1',
    description:
      'A Spring & Hibernate-based E-commerce System',
    stack: ['Spring', 'Hibernate', 'Java'],
    sourceCode: 'https://github.com/MoonSulong/Ecommerce',
    livePreview: 'http://13.58.22.177:8080/onlineShop/',
  },
  {
    name: 'Project 2',
    description:
      'Personal Event Recommendation System & Ticket Search Engine',
    stack: ['Java', 'MySQL', 'HTML/CSS/JS'],
    sourceCode: 'https://github.com/MoonSulong/EventRecommendation',
    livePreview: 'http://13.58.22.177:8080/Jupiter/',
  },
  {
    name: 'Project 3',
    description:
      'A React & Spring-based YouTube Video Manager Panel',
    stack: ['React', 'Spring', 'Hibernate'],
    sourceCode: 'https://github.com/MoonSulong/YouTubeEducation',
    livePreview: 'https://github.com/MoonSulong/YouTubeEducation',
  },
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'sulong@datachat.ai',
}

export { header, about, projects, skills, contact }
