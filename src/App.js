import Header from './components/Header'
import Landing from './components/Landing'
import Title from './components/Title'
import Experience from './components/Experience'
import AboutMePng from './img/about-me.png'
import AboutMeWebp from './img/about-me.webp'
import LinkedInPng from './img/logo-linkedin.png'
import LinkedInWebp from './img/logo-linkedin.webp'
import BoschPng from './img/logo-bosch.png'
import BoschWebp from './img/logo-bosch.webp'
import WokoPng from './img/logo-woko.png'
import WokoWebp from './img/logo-woko.webp'
import Project from './components/Project'
// import BGVideo from './img/banner-landing.mp4'

function App() {
  const aboutMeText = "Hi my name is Maribel Melendez. I’m currently studying Computer Science at Tecnológico de Monterrey. I like learning new things, learn from others and from previous experiences.  I am currently interested in UI/UX design, Web and mobile development. I also love to watch movies, crafts and arts! spending time outdoors and with my friends."
  const experience = [
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
      open: true
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
      open: false
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
      open: false
    }
  ]

  const project = [
    {
      name: "Amdocs Hiring Tracker",
      description: "Morbi rutrum ante vitae blandit volutpat. Duis auctor laoreet faucibus. Ut at vulputate ante. Aliquam sed eleifend massa. Maecenas convallis nulla id nulla faucibus sodales. ",
      imgPng: BoschPng,
      imgWebp: BoschWebp,
      hasGithub: true,
      hasLink: true,
      githubLink: "",
      link: "",
    }
  ]

  return (

    <div className="App">
      <div className="landing-bg">
        {/* <video autoPlay loop muted className='video'>
            <source src={BGVideo} type='video/mp4' />
        </video> */}
        <Header />
        <main>
          <Landing />
        </main>
      </div>

      <section className='section' id="about-me">
        <Title number="00" sectionTitle="About me" />
        <p>{aboutMeText}</p>
        <picture>
          <source srcSet={AboutMeWebp} type="image/webp" />
          <source srcSet={AboutMePng} type="image/png" />
          <img src={AboutMePng} alt="Girl with ceros and ones background" className='about-me-img'/>
        </picture>
      </section>

      <section className='section' id="experience">
        <Title number="01" sectionTitle="Experience" />
        <Experience data={experience[0]}/>
        <Experience data={experience[1]}/>
        <Experience data={experience[2]}/>

      </section>

      <section className='section' id="projects">
        <Title number="02" sectionTitle="Projects" />
        <Project project={project[0]}/>
      </section>
    </div>
  );
}

export default App;
