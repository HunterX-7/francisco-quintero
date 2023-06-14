import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';
import 'react-vertical-timeline-component/style.min.css';
import styles from '../styles';
import { experiences } from '../constants';
import { SectionWrapper } from '../hoc';
import { textVariant } from '../utils/motion';

const ExpirienceCard = ({ experience }) => {

  return (
    <VerticalTimelineElement 
      contentStyle={{
        background: "#0B1232",
        color: "#ffffff",
      }}
      contentArrowStyle={{ borderRight: "10px solid  #0B1232" }}
      date={experience.date}
      dateClassName={"text-white"}
      iconStyle={{ background: experience.iconBg }}
      icon={
        <div className='flex justify-center items-center w-full h-full'>
          <img src={experience.icon} alt={experience.company_name} className='w-[100%] h-[100%] object-contain' />
        </div>
      }
    >
      <div>
        <h3 className='text-white text-[24px]'>{experience.title}</h3>
        <p className='text-cyan-300 text-[16px] text-semibold m-0'>{experience.company_name}</p>
        <ul className='mt-5 list-disc ml-5 space-y-2'>
          {experience.points.map((point, index) => (
            <li key={`experience-point-${index}`} className='text-white text-[14px] tracking-wider'>
              {point}
            </li>
          ))}
        </ul>
      </div>
    </VerticalTimelineElement>
  )
}

const Experience = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>What I have done so far</p>
        <h2 className={`${styles.sectionHeadText} text-[#07BEB8] tracking-wider`}>Work Experience</h2>
      </motion.div>

      <div className='mt-20 flex flex-col'>
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExpirienceCard key={index} experience={experience}/>
          ))}
        </VerticalTimeline>
      </div>
    </>
  )
}

ExpirienceCard.propTypes = {
  experience: PropTypes.shape({
    date: PropTypes.string.isRequired,
    iconBg: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    company_name: PropTypes.string.isRequired,
    points: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
};

export default SectionWrapper(Experience, "work");
