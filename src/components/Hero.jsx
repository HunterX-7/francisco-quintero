import { motion } from 'framer-motion';
import styles from '../styles';
import { SpaceshipCanvas } from './canvas';
import { down } from '../assets';

const Hero = () => {
  return (
    <section className='relative w-full h-screen mx-auto'>
      <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
        <div className='flex flex-col items-center justify-center'>
          <h1 className={`${styles.heroHeadText}`}>Hi, I&apos;m <span className='text-[#07BEB8]'>Francisco</span></h1>
          <p className={`${styles.heroSubText} text-center w-[75%]`}>A passionate Software Engineer with expertise in full stack development and a keen interest in data analytics, dedicated to building innovative, user-friendly solutions. Let&apos;s collaborate and turn ideas into reality!</p>
        </div>
      </div>
      <SpaceshipCanvas />
      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='flex justify-center items-start'>
            <motion.div animate={{ y: [0, 24, 0] }} transition={{ duration: 1.5, repeat: Infinity, repeatType: 'loop' }} className='mt-6'>
                <img src={down} alt='down-arrow' className='w-[36px] h-[36px] object-contain cursor-pointer' />
            </motion.div>
          </div>
        </a>
      </div>
    </section>
  )
}

export default Hero;
