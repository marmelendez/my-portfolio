import Header from './components/Header'
import Landing from './components/Landing'
import Title from './components/Title'
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

      <section>
            <Title id="about-me" number="00" sectionTitle="About me"/>
          </section>

          <section>
            <Title id="experience" number="01" sectionTitle="Experience"/>
          </section>

          <section>
            <Title id="projects" number="02" sectionTitle="Projects"/>
          </section>

    </div>
  );
}

export default App;
