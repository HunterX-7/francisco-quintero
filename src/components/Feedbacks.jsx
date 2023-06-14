import { motion } from "framer-motion";
import PropTypes from 'prop-types';
import Tilt from 'react-parallax-tilt';
import styles from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { testimonials } from "../constants";

const FeedbackCard = ({index, testimonial, name, designation, image}) => {
  
  return (
    <Tilt options={{ max: 45, scale: 1, speed: 350 }}>
      <motion.div
        variants={fadeIn("up", "spring", index*0.5, 0.75)}
        className='mt-10 bg-tertiary p-10 rounded-3xl xs:w-[320px] w-full'
      >
        <div className='mt-4 mb-4'>
          <p className='text-white tracking-wider text-[14px]'>&quot;{testimonial}&quot;</p>
          <div className='mt-7 flex justify-between items-center gap-1'>
            <div className='flex flex-col'>
              <p className='text-white font-medium text-[16px]'>
                {name}
              </p>
              <p className='mt-1 text-secondary text-[12px]'>
                {designation}
              </p>
            </div>
            <img src={image} alt={`feedback_by-${name}`} className='w-10 h-10 rounded-full object-cover' />
          </div>
        </div>
      </motion.div>
    </Tilt>
  )
};

const Feedbacks = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>What others say</p>
        <h2 className={`${styles.sectionHeadText} text-[#07BEB8] tracking-wider`}>Recommendations</h2>
      </motion.div>

      <div className={`${styles.paddingX} flex flex-wrap justify-center items-center gap-8`}>
        {testimonials.map((testimonial, index) => (
          <FeedbackCard key={testimonial.name} index={index} {...testimonial} />
        ))}
      </div>
    </>
  )
}

FeedbackCard.propTypes = {
  index: PropTypes.number.isRequired,
  testimonial: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  designation: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default SectionWrapper(Feedbacks, "");
