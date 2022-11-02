import LinkedInPng from '../img/logo-linkedin.png'
import LinkedInWebp from '../img/logo-linkedin.webp'
import BoschPng from '../img/logo-bosch.png'
import BoschWebp from '../img/logo-bosch.webp'
import WokoPng from '../img/logo-woko.png'
import WokoWebp from '../img/logo-woko.webp'

const experiences = [
    {
      company: "LinkedIn",
      position: "Mobile Engineer Intern",
      date: "Jun-Sept 2022",
      imgPng: LinkedInPng,
      imgWebp: LinkedInWebp,
      description: `Phasellus laoreet ante non eleifend mollis.
      Nullam egestas lectus ac scelerisque sollicitudin.
      Suspendisse venenatis enim ac mattis maximus.
      Quisque vestibulum tellus vel libero pulvinar auctor.
      Morbi at erat porta, scelerisque urna nec, tincidunt dui.`,
      location: "San Francisco, CA",
      open: true,
      technologies: ["Android Studio", "Kotlin", "Java"]
    },
    {
      company: "Woko",
      position: "Software Engineer Intern",
      date: "Oct-Dec 2022",
      imgPng: WokoPng,
      imgWebp: WokoWebp,
      description: `Phasellus laoreet ante non eleifend mollis.
      Nullam egestas lectus ac scelerisque sollicitudin.
      Suspendisse venenatis enim ac mattis maximus.
      Quisque vestibulum tellus vel libero pulvinar auctor.
      Morbi at erat porta, scelerisque urna nec, tincidunt dui.`,
      location: "Monterrey, NL",
      open: false,
      technologies: ["HTML", "CSS", "JavaScript", "MySQL", "PHP"]
    },
    {
      company: "Bosch",
      position: "Software Engineer Intern",
      date: "Oct 2021 - Apr 2022",
      imgPng: BoschPng,
      imgWebp: BoschWebp,
      description: `Phasellus laoreet ante non eleifend mollis.
      Nullam egestas lectus ac scelerisque sollicitudin.
      Suspendisse venenatis enim ac mattis maximus.
      Quisque vestibulum tellus vel libero pulvinar auctor.
      Morbi at erat porta, scelerisque urna nec, tincidunt dui.`,
      location: "Guadalajara, JA",
      open: false,
      technologies: ["IBM DB", "vTest", "Canoe"]
    }
  ]

  export default experiences;