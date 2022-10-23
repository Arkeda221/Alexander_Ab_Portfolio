// Skills icons - https://react-icons.github.io/react-icons/
import {
  FaHtml5,
  FaCss3Alt,
  FaBootstrap,
  FaReact,
  FaGitAlt,
  FaGithubSquare,
  FaLink,
  FaVuejs,
  FaPython,
  FaNode
} from 'react-icons/fa'
import {
  SiJavascript,
  SiExpress,
  SiPostgresql,
  SiMongodb,
  SiDjango
} from 'react-icons/si'

// Projects Images (add your images to the images directory and import below)
import Logo from './images/logo.png'
import Rated_Our from './images/rated-our.png'
import TunerHub from './images/tunerhub.png'
import Snake from './images/snake-game.png'

// Hero Images (add your images to the /images directory with the same names)
import HeroLight from './images/hero-light.jpg'
import HeroDark from './images/hero-dark.jpg'
// If you change the import names above then you need to change the export names below
export { HeroLight as Light }
export { HeroDark as Dark }

/* START HERE
 **************************************************************
  Add your GitHub username (string - "YourUsername") below.
*/
export const githubUsername = 'Arkeda221'

// Blog link icon (imported above)
export const Blog = <FaLink />

/* About Me
 **************************************************************
  Add a second paragraph for the about me section.
*/
export const moreInfo =
  'I am a Software Engineer with a background in electrical engineering, primarily in the field of MEP private consulting. I thrive in breaking down complex problems into smaller pieces and tackling each component individually. I am driven by my curiosity and desire to grow my technical skill set.'

/* Skills
 ************************************************************** 
  Add or remove skills in the SAME format below, there must be one icon imported above per skill below.
*/
export const skillData = [
  {
    id: 1,
    skill: <FaHtml5 className="display-4" />,
    name: 'HTML5'
  },
  {
    id: 2,
    skill: <FaCss3Alt className="display-4" />,
    name: 'CSS3'
  },
  {
    id: 3,
    skill: <SiJavascript className="display-4" />,
    name: 'JavaScript'
  },

  {
    id: 4,
    skill: <FaReact className="display-4" />,
    name: 'React'
  },
  {
    id: 5,
    skill: <FaVuejs className="display-4" />,
    name: 'Vue'
  },
  {
    id: 6,
    skill: <FaPython className="display-4" />,
    name: 'Python'
  },
  {
    id: 7,
    skill: <FaGitAlt className="display-4" />,
    name: 'Git'
  },

  {
    id: 8,
    skill: <SiExpress className="display-4" />,
    name: 'Express'
  },
  {
    id: 9,
    skill: <SiPostgresql className="display-4" />,
    name: 'PostgreSQL'
  },
  {
    id: 10,
    skill: <SiMongodb className="display-4" />,
    name: 'MongoDB'
  },
  {
    id: 11,
    skill: <FaNode className="display-4" />,
    name: 'NodeJS'
  },
  {
    id: 12,
    skill: <SiDjango className="display-4" />,
    name: 'Django'
  }
]

// Resume link (string - "https://YourResumeUrl") - I am using CloudFront to share my resume (https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/Introduction.html)
export const resume = 'https://pdfhost.io/v/8N3PGmrbg_Alexander_Ab_Resume_docx'

/* Projects
 ************************************************************** 
  List the repo names (string - "your-repo-name") you want to include (they will be sorted alphabetically). If empty, only the first 3 will be included.
*/
export const filteredProjects = [
  'Snake-Game',
  'TunerHub',
  'Rated-Our',
  'Vue_Rock_Paper_Scissors'
]

// Replace the defualt GitHub image for matching repos below (images imported above - lines 13-14)
export const projectCardImages = [
  {
    name: 'Snake-Game',
    image: Snake
  },
  {
    name: 'TunerHub',
    image: TunerHub
  },
  {
    name: 'Rated-Our',
    image: Rated_Our
  },
  {
    name: 'Vue_Rock_Paper_Scissors',
    image: Logo
  }
]

/* Contact Info
 ************************************************************** 
  Add your formspree endpoint below.
  https://formspree.io/
*/
export const formspreeUrl = 'https://formspree.io/f/xlevjadk'
