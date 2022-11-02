import WokoPng from '../img/projects/woko.png'
import WokoWebp from '../img/projects/woko.webp'
import RecipePng from '../img/projects/recipe-easy.png'
import RecipeWebp from '../img/projects/recipe-easy.webp'
import SimulationPng from '../img/projects/traffic.png'
import SimulationWebp from '../img/projects/traffic.webp'
import IbmPng from '../img/projects/ibm.png'
import IbmWebp from '../img/projects/ibm.webp'
import AmdocsPng from '../img/projects/amdocs.png'
import AmdocsWebp from '../img/projects/amdocs.webp'
import LinkedInShortPng from '../img/projects/linkedin-shortcuts.png'
import LinkedInShortWebp from '../img/projects/linkedin-shortcuts.webp'
import FoodBankPng from '../img/projects/food-bank.png'
import FoodBankWebp from '../img/projects/food-bank.webp'
import StorePng from '../img/projects/moda-store.png'
import StoreWebp from '../img/projects/moda-store.webp'
import TravelApiPng from '../img/projects/travelapi.png'
import TravelApiWebp from '../img/projects/travelapi.webp'
import EndlessRunPng from '../img/projects/endless-game.png'
import EndlessRunWebp from '../img/projects/endless-game.webp'
import LexicalPng from '../img/projects/lexical.png'
import LexicalWebp from '../img/projects/lexical.webp'


import html from '../img/tech-icons/html5.svg'
import css from '../img/tech-icons/css3.svg'
import javascript from '../img/tech-icons/javascript.svg'
import webpack from '../img/tech-icons/webpack.svg'
import bootstrap from '../img/tech-icons/bootstrap.svg'
import python from '../img/tech-icons/python.svg'
import threejs from '../img/tech-icons/threejs.svg'
import react from '../img/tech-icons/react.svg'
import nodejs from '../img/tech-icons/nodejs.svg'
import mysql from '../img/tech-icons/mysql.svg'
import android from '../img/tech-icons/androidstudio.svg'
import java from '../img/tech-icons/java.svg'
import kotlin from '../img/tech-icons/kotlin.svg'
import sequelize from '../img/tech-icons/sequelize.svg'
import postgres from '../img/tech-icons/postgresql.svg'
import unity from '../img/tech-icons/unity.svg'
import csharp from '../img/tech-icons/csharp.svg'
import figma from '../img/tech-icons/figma.svg'

const projects = [
    {
      name: "Woko",
      description: "Morbi rutrum ante vitae blandit volutpat. Duis auctor laoreet faucibus. Ut at vulputate ante. Aliquam sed eleifend massa. Maecenas convallis nulla id nulla faucibus sodales. ",
      imgPng: WokoPng,
      imgWebp: WokoWebp,
      hasGithub: true,
      hasLink: true,
      githubLink: "",
      link: "",
      technologies: [html, css, javascript, bootstrap]
    },
    {
      name: "Recipe Easy",
      description: "Morbi rutrum ante vitae blandit volutpat. Duis auctor laoreet faucibus. Ut at vulputate ante. Aliquam sed eleifend massa. Maecenas convallis nulla id nulla faucibus sodales. ",
      imgPng: RecipePng,
      imgWebp: RecipeWebp,
      hasGithub: true,
      hasLink: true,
      githubLink: "",
      link: "",
      technologies: [html, css, javascript, webpack]
    },
    {
      name: "Traffic Simulations",
      description: "Morbi rutrum ante vitae blandit volutpat. Duis auctor laoreet faucibus. Ut at vulputate ante. Aliquam sed eleifend massa. Maecenas convallis nulla id nulla faucibus sodales. ",
      imgPng: SimulationPng,
      imgWebp: SimulationWebp,
      hasGithub: true,
      hasLink: true,
      githubLink: "",
      link: "",
      technologies: [python, threejs, javascript]
    },
    {
      name: "IBM Peripheral loan",
      description: "Morbi rutrum ante vitae blandit volutpat. Duis auctor laoreet faucibus. Ut at vulputate ante. Aliquam sed eleifend massa. Maecenas convallis nulla id nulla faucibus sodales. ",
      imgPng: IbmPng,
      imgWebp: IbmWebp,
      hasGithub: true,
      hasLink: true,
      githubLink: "",
      link: "",
      technologies: [react, nodejs, javascript, css, ]
    },
    {
      name: "Amdocs",
      description: "Morbi rutrum ante vitae blandit volutpat. Duis auctor laoreet faucibus. Ut at vulputate ante. Aliquam sed eleifend massa. Maecenas convallis nulla id nulla faucibus sodales. ",
      imgPng: AmdocsPng,
      imgWebp: AmdocsWebp,
      hasGithub: true,
      hasLink: true,
      githubLink: "",
      link: "",
      technologies: [html, css, javascript, mysql]
    },
    {
      name: "LinkedIn Inbox Shortcuts",
      description: "Morbi rutrum ante vitae blandit volutpat. Duis auctor laoreet faucibus. Ut at vulputate ante. Aliquam sed eleifend massa. Maecenas convallis nulla id nulla faucibus sodales. ",
      imgPng: LinkedInShortPng,
      imgWebp: LinkedInShortWebp,
      hasGithub: true,
      hasLink: true,
      githubLink: "",
      link: "",
      technologies: [android, java, kotlin]
    },
    {
      name: "Food Bank of Guadalajara",
      description: "Morbi rutrum ante vitae blandit volutpat. Duis auctor laoreet faucibus. Ut at vulputate ante. Aliquam sed eleifend massa. Maecenas convallis nulla id nulla faucibus sodales. ",
      imgPng: FoodBankPng,
      imgWebp: FoodBankWebp,
      hasGithub: true,
      hasLink: true,
      githubLink: "",
      link: "",
      technologies: [android, kotlin]
    },
    {
      name: "Moda Store",
      description: "Morbi rutrum ante vitae blandit volutpat. Duis auctor laoreet faucibus. Ut at vulputate ante. Aliquam sed eleifend massa. Maecenas convallis nulla id nulla faucibus sodales. ",
      imgPng: StorePng,
      imgWebp: StoreWebp,
      hasGithub: true,
      hasLink: true,
      githubLink: "",
      link: "",
      technologies: [android, java, kotlin]
    },
    {
      name: "TravelAPI",
      description: "Morbi rutrum ante vitae blandit volutpat. Duis auctor laoreet faucibus. Ut at vulputate ante. Aliquam sed eleifend massa. Maecenas convallis nulla id nulla faucibus sodales. ",
      imgPng: TravelApiPng,
      imgWebp: TravelApiWebp,
      hasGithub: true,
      hasLink: true,
      githubLink: "",
      link: "",
      technologies: [nodejs, sequelize, postgres]
    },
    {
      name: "Endless runner game",
      description: "Morbi rutrum ante vitae blandit volutpat. Duis auctor laoreet faucibus. Ut at vulputate ante. Aliquam sed eleifend massa. Maecenas convallis nulla id nulla faucibus sodales. ",
      imgPng: EndlessRunPng,
      imgWebp: EndlessRunWebp,
      hasGithub: true,
      hasLink: true,
      githubLink: "",
      link: "",
      technologies: [unity, csharp]
    },
    {
      name: "Lexical Analyzer",
      description: "Morbi rutrum ante vitae blandit volutpat. Duis auctor laoreet faucibus. Ut at vulputate ante. Aliquam sed eleifend massa. Maecenas convallis nulla id nulla faucibus sodales. ",
      imgPng: LexicalPng,
      imgWebp: LexicalWebp,
      hasGithub: true,
      hasLink: true,
      githubLink: "",
      link: "",
      technologies: [java, html, css]
    }
  ]

export default projects;