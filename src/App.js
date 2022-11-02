import Header from './components/Header'
import Landing from './components/Landing'
import Title from './components/Title'
import Experience from './components/Experience'
import Project from './components/Project'

import aboutMe from './data/AboutMe'
import experiences from './data/Experience'
import projects from './data/Projects'
// import BGVideo from './img/banner-landing.mp4'

function App() {


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
        <p>{aboutMe.text}</p>
        <picture>
          <source srcSet={aboutMe.imgWebp} type="image/webp" />
          <source srcSet={aboutMe.imgPng} type="image/png" />
          <img src={aboutMe.imgPng} alt="Girl with ceros and ones background" className='about-me-img' />
        </picture>
      </section>

      <section className='section' id="experience">
        <Title number="01" sectionTitle="Experience" />
        {
          experiences.map(experience => <Experience data={experience} />)
        }
      </section>

      <section className='section' id="projects">
        <Title number="02" sectionTitle="Projects" />
        {
          projects.map(project => <Project project={project} />)
        }
      </section>
    </div>
  );
}

export default App;
