import Header from './components/Header'
import Landing from './components/Landing'
import Title from './components/Title'
import AboutMePng from './img/about-me.png'
import AboutMeWebp from './img/about-me.webp'
import LinkedInPng from './img/logo-linkedin.png'
import LinkedInWebp from './img/logo-linkedin.webp'
import Experience from './components/Experience'
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
      location: "San Francisco, CA"
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
        <Experience company={experience[0].company}
                    position={experience[0].position}
                    date={experience[0].date}
                    imgWebp={experience[0].imgWebp}
                    imgPng={experience[0].imgPng}
                    description={experience[0].description}
                    location={experience[0].location}/>

      </section>

      <section className='section' id="projects">
        <Title number="02" sectionTitle="Projects" />
      </section>

    </div>
  );
}

export default App;
