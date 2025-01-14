import { BrowserRouter } from 'react-router-dom';
import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works } from './components';

const App = () => {

  return (
    <BrowserRouter>
      <div className='relative z-0 true-bg'>
        <Navbar />
        <div className='bg-hero-pattern-2 bg-cover bg-no-repeat bg-center'>
          <Hero />
        </div>
        <About />
        <Works />
        <Tech />
        <Experience />
        <Feedbacks />
        <Contact />
      </div>
    </BrowserRouter>
  )
}

export default App;
