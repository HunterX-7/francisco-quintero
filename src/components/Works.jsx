import React from 'react';
import Tilt from 'react-parallax-tilt';
import { motion } from 'framer-motion';
import styles from '../styles';
import { github } from '../assets';
import { SectionWrapper } from '../hoc';
import { projects } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';

const ProjectCard = ({ index, name, description, tags, image, live_demo, source_code_link }) => {
  return (
    <motion.div variants={fadeIn("down", "spring", index * 0.5, 0.5)}>
      <Tilt options={{ max: 45, scale: 1, speed: 350 }} className='bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full'>
        <div className='relative w-full h-[230px]'>
          <img src={image} alt={name} className='w-full h-full object-cover rounded-2xl' />
          {source_code_link && (
            <div className='absolute inset-0 flex justify-end m-3'>
              <div onClick={() => window.open(source_code_link, "_blank")} className='black-gradient w-8 h-8 rounded-full flex justify-center items-center cursor-pointer'>
                <img src={github} alt='source code' className='w-3/4 h-3/4 object-contain' />
              </div>
            </div>
          )}
        </div>
        <div className='flex-col mt-5'>
          <h3 className='text-white font-bold text-[24px]'>{name}</h3>
          <div className='mt-2 flex flex-wrap gap-2'>
            {live_demo && (
              <div onClick={() => window.open(live_demo, "_blank")} className='bg-gray-100 font-semibold px-2 py-0.5 rounded cursor-pointer'>
                <p className={`text-[14px] red-text-gradient`}>
                  LIVE DEMO
                </p>
              </div>
            )}
          </div>
          <p className='mt-2 text-secondary text-[14px]'>{description}</p>
        </div>
        <div className='mt-4 flex flex-wrap gap-2'>
          {tags.map((tag) => (
            <div className='bg-gray-100 font-semibold px-2 py-0.5 rounded' key={`${name}-${tag.name}`}>
              <p className={`text-[14px] ${tag.color}`}>
                {tag.name}
              </p>
            </div>
          ))}
        </div>
      </Tilt>
    </motion.div>
  )
}

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My Work</p>
        <h2 className={`${styles.sectionHeadText} text-[#07BEB8] tracking-wider`}>Projects</h2>
      </motion.div>

      <div className='w-full flex'>
        <motion.p variants={fadeIn("", "", 0.1, 1)} className='mt-4 text-[18px] max-w-3xl leading-[30px]'>
          These projects serve as tangible demonstrations of my skills and expertise, showcasing real-world examples of my work. These projects may include links to code repositories and live demos, but not all of them, as some projects might not have associated repositories. Nonetheless, they reflect my capability to tackle complex challenges and demonstrate my diverse range of skills.
        </motion.p>
      </div>

      <div className='mt-20 flex flex-wrap gap-8 justify-center items-center'>
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(Works, "");
