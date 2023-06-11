import React from 'react';
import Tilt from 'react-parallax-tilt';
import { motion } from 'framer-motion';
import styles from '../styles';
import { services } from '../constants/index';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc';

const ServiceCard = ({index, title, icon}) => {

  return (
    <Tilt className='xs:w-[250px] w-full'>
      <motion.div variants={fadeIn("right", "spring", 0.5*index, 0.75)} className='w-full white-green-gradient p-[1px] rounded-[20px] shadow-card'>
        <div options={{max:45, scale: 1, speed: 350}} className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'>
          <img src={icon} alt={title} className='w-24 h-24 object-contain' />
          <h3 className='text-white text-[20px] font-bold text-center'>{title}</h3>
        </div>
      </motion.div>
    </Tilt>
  )
}

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={`${styles.sectionHeadText} text-[#07BEB8] tracking-wider`}>Summary</h2>
      </motion.div>
      <motion.p variants={fadeIn("", "", 0.1, 1)} className='mt-4 text-[18px] max-w-3xl leading-[30px]'>
      Skilled Full Stack Web Developer with a Mechanical Engineering background. Expertise in JavaScript, React, and Node.js. Adaptable and eager to learn new languages and frameworks. Strong remote collaboration, problem-solving, and communication skills. Passionate about innovative web development and delivering exceptional results. Ready to contribute to your team's success!
      </motion.p>
      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(About, "about");
