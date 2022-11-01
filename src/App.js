import Header from './components/header'
import Landing from './components/landing'
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
    </div>
  );
}

export default App;
