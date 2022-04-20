import React from 'react'
//import image
import home1 from '../img/home1.png';
//import framer motion
import { motion } from 'framer-motion'; 

import {About, Description, Image, Hide } from '../style.js';
import { titleAnim,container,fade, photoAnim } from '../animation';
//import wave
import Wave from './Wave';

//frame motion example on title
 const AboutSection = () => {
//     const titleAnim = {
//         hidden:{opacity: 0},
//         show: {opacity: 1, transition: {duration:1.5}},
//     };

//     const container = {
//         hidden: {x: 100},
//         show: {x: 0, transition:{duration: 0.75, ease:"easeOut", staggerChildren: 0.75, when:"afterChildren"} },
//     }
  return (
    
    <About >
        <Description>
            <motion.div  className="title">
                <Hide>
                    <motion.h2 variants={titleAnim} >Lorem ipsum edem </motion.h2>
                </Hide>
                <Hide>
                    <motion.h2  variants={titleAnim} >Lorem <span>lorem</span>  ipsum</motion.h2>
                </Hide>
                <Hide>
                    <motion.h2 variants={titleAnim} >Lorem </motion.h2>
                </Hide>
            </motion.div>
            <motion.div variants={fade}>
            <motion.p > Contact me for any ideas that you have.	</motion.p>
            <motion.button variants={fade} >Contact me</motion.button>
            </motion.div>
           
        </Description>
        <Image>
            <motion.img variants={photoAnim}  src={home1} alt="Portfolio image" />
        </Image>
        <Wave/>
    </About>
  );
}

//Styled Component




export default AboutSection;