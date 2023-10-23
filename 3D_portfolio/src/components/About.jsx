import React from 'react'
import { Tilt } from 'react-tilt'
import {motion} from 'framer-motion'

import { styles } from '../Styles'
import { services } from '../constants'
import {fadeIn, textVariant} from '../utils/motion'

const ServiceCard = ({index, title, icon}) => {
  return(
    <p>{title}</p>
  )
}

const About = () => {
  return (
    <>
      <motion.div varients={textVariant()}>
      <p className={styles.sectionSubText}>
        Introduction
      </p>
      <h2 className={styles.sectionHeadText}>
        Overview.
      </h2>
      </motion.div>
      <motion.p
        variants={fadeIn("","",0.1,1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        I am an XR evangelist primarily focused on utilizing various emerging 
        technologies like IoT(Internet of Things), ML, Digital twin, etc with XR.
        In addition to the above-mentioned,
        I am a certified unity developer (Programmer, VR).
        I have sound knowledge of things like Augmented Reality,
        Virtual Reality, Mixed Reality, Optimization, Unity, C#, IoT,
        Digital Twin, ML-Agent, and am a Right to Education Activist. 

      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard 
            key = {service.title} index={index} {...service}
          />
        )
      )}
      </div>
    </>

  )
}

export default About