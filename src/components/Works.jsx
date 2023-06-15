import styles from '../styles';
import PropTypes from 'prop-types';
import { SectionWrapper } from '../hoc';
import { projects } from '../constants';

const ProjectCard = ({ name, description, tags, image, live_demo, source_code_link }) => {
  return (
    <div className='bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full'>
      <div className='relative w-full h-[230px]'>
        <img src={image} alt={name} className='w-full h-full object-cover rounded-2xl' />
      </div>
      <div className='flex-col mt-5'>
        <h3 className='text-white font-semibold text-[24px]'>{name}</h3>
        <div className='flex flex-row'>
          {live_demo && (
          <div className='mt-2 flex flex-wrap gap-2 mr-2'>
            <div onClick={() => window.open(live_demo, "_blank")} className='bg-white font-semibold px-2 py-0.5 rounded cursor-pointer'>
              <p className={`text-[14px] red-text-gradient`}>
                LIVE DEMO
              </p>
            </div>
          </div>
          )}
          {source_code_link && (
          <div className='mt-2 flex flex-wrap gap-2'>
            <div onClick={() => window.open(source_code_link, "_blank")} className='bg-white font-semibold px-2 py-0.5 rounded cursor-pointer'>
              <p className={`text-[14px] red-text-gradient`}>
                SOURCE CODE
              </p>
            </div>
          </div>
          )}
        </div>
        <p className='mt-2 text-secondary text-[14px]'>{description}</p>
      </div>
      <div className='mt-4 flex flex-wrap gap-2'>
        {tags.map((tag) => (
          <div className={`bg-gray-100 font-semibold px-2 rounded-full`} key={`${name}-${tag.name}`}>
            <p className={`text-[14px] ${tag.color}`}>
              {tag.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}

const Works = () => {
  return (
    <>
      <div>
        <p className={styles.sectionSubText}>My Work</p>
        <h2 className={`${styles.sectionHeadText} text-[#07BEB8] tracking-wider`}>Projects</h2>
        <p className='text-white mt-4 text-[18px] max-w-3xl leading-[30px]'>
          These projects serve as tangible demonstrations of my skills and expertise, showcasing real-world examples of my work. These projects may include links to code repositories and live demos, but not all of them, as some projects might not have associated repositories. Nonetheless, they reflect my capability to tackle complex challenges and demonstrate my diverse range of skills.
        </p>
      </div>
      <div className='mt-20 flex flex-wrap gap-8 justify-center items-center'>
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  )
}

ProjectCard.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  tags: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      color: PropTypes.string.isRequired,
    })
  ).isRequired,
  image: PropTypes.string.isRequired,
  live_demo: PropTypes.string,
  source_code_link: PropTypes.string,
};

export default SectionWrapper(Works, "work");
