import { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles';
import { navLinks, socials } from '../constants'
import { logo, menu, close } from '../assets'

const Navbar = () => {
  const [active, setActive] = useState('');
  const [toggle, setToggle] = useState(false);

  return (
    <nav className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}>
      <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
        <Link to="/" className='flex items-center gap-2' 
        onClick={() => {
          setActive("");
          window.scrollTo(0, 0);
        }}>
          <img src={logo} alt='FQ Logo' className='w-9 h-9 object-contain'/>
          <p className='text-white text-[18px] font-semibold cursor-pointer'>
            Francisco <span className='text-cyan-300 block sm:inline-block'>Quintero</span>
          </p>
        </Link>
        <ul className='list none hidden sm:flex flex-row gap-5'>
          {navLinks.map((nav) => (
            <li 
              key={nav.id} 
              className={`${active === nav.title ? "text-cyan-300" : "text-white"} hover:text-cyan-300 text-[18px] font-medium cursor-pointer`}
              onClick={() => setActive(nav.title)}
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
          {socials.map((social) => (
            <li 
              key={social.id} 
              className={`text-[18px] font-medium cursor-pointer`}
              onClick={() => window.open(social.title, "_blank")}
            >
              <img src={social.logo} className='w-4 h-4 object-contain mt-1 hover:mt-0 hover:w-5 hover:h-5' />
            </li>
          ))}
        </ul>
        <div className='sm:hidden flex flex-1 justify-end items-center'>
          <img 
            src={toggle ? close : menu} 
            alt='menu'
            className='w-[28px] h-[28px] object-contain cursor-pointer'
            onClick={() => setToggle(!toggle)}
          />
          <div className={`${!toggle ? 'hidden' : 'flex'} p-5 black-gradient absolute top-20 right-0 mx-6 min-w-[140px] z-10 rounded-xl`}>
            <ul className='list none flex flex-col justify-end items-start gap-3'>
              {navLinks.map((nav) => (
                <li 
                  key={nav.id} 
                  className={`${active === nav.title ? "text-cyan-300" : "text-white"} text-[16px] font-medium cursor-pointer`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(nav.title);
                  }}
                >
                  <a href={`#${nav.id}`}>{nav.title}</a>
                </li>
              ))}
              <div>
                <ul className='list none flex flex-row justify-end items-start gap-3'>
                  {socials.map((social) => (
                    <li 
                      key={social.id} 
                      className={`text-[18px] font-medium cursor-pointer`}
                      onClick={() => window.open(social.title, "_blank")}
                    >
                      <img src={social.logo} className='w-4 h-4 object-contain mt-1 hover:mt-0 hover:w-5 hover:h-5' />
                    </li>
                  ))}
                </ul>
              </div>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;
