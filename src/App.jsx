import { BrowserRouter } from 'react-router-dom';
import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works } from './components';

const App = () => {

  return (
    <BrowserRouter>
      <div className='relative z-0 true-bg'>
        <div className='bg-hero-pattern-2 bg-cover bg-no-repeat bg-center'>
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Tech />
        <Works />
        <Feedbacks />
        <div>
          <Contact />
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App;
