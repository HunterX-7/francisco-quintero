import Tilt from 'react-parallax-tilt';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import styles from '../styles';
import { services } from '../constants/index';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc';

const ServiceCard = ({index, title, icon}) => {

  return (
    <Tilt options={{max:45, scale: 1, speed: 350}} className='xs:w-[250px] w-full'>
      <motion.div variants={fadeIn("right", "spring", 0.5*index, 0.75)} className='w-full white-green-gradient p-[1px] rounded-[20px] shadow-card'>
        <div className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'>
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
      <motion.p variants={fadeIn("", "", 0.1, 1)} className='text-white mt-4 text-[18px] max-w-3xl leading-[30px]'>
      Skilled Software Engineer with 3+ years of experience in full-stack web development. Proficient in JavaScript, TypeScript, Python, and a wide range of modern frameworks and tools, including React, Redux, Ruby on Rails, and Node.js. Adept at leveraging data analytics tools like Power BI, Tableau, and SQL to transform complex datasets into actionable insights. Certified in Azure, Salesforce, and Tableau, with a proven track record of delivering custom applications, optimizing websites, and enhancing user experiences.
      </motion.p>
      <div className='mt-20 flex flex-wrap gap-10 justify-center items-center'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  )
}

ServiceCard.propTypes = {
  index: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};

export default SectionWrapper(About, "about");
