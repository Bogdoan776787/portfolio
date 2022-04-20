import React from 'react';  
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import athlete from '../img/athlete-small.png';
import theracer from '../img/theracer-small.png';
import goodtimes from '../img/goodtimes-small.png';
//import Animation
import { motion } from 'framer-motion';
import {pageAnimation,fade,photoAnim,lineAnim, slider,sliderContainer, scrollReveal} from '../animation';
import { useScroll } from '../components/useScroll';
import {ScrollTop} from '../components/ScrollTop';
const MyWork = () => {
    const [element, controls]= useScroll();
    const [element2, controls2]= useScroll();
  return (
    <Work variants={pageAnimation} initial="hidden" animate="show" exit="exit">
        <motion.div variants={sliderContainer}>
        <Frame1 variants={slider}></Frame1>
        <Frame2 variants={slider}></Frame2>
        <Frame3 variants={slider}></Frame3>
        <Frame4 variants={slider}></Frame4>    
        </motion.div>
     
        <Project>
            <motion.h2 variants={fade}>The Athlete</motion.h2>
            <motion.div 
            variants={lineAnim}

            className="line">

            </motion.div>
            <Link to="/work/the-athlete">
            
            <Hide>
              <motion.img variants={photoAnim} src={athlete} alt="the athlete" />  
            </Hide>
            </Link>
        </Project>

        <Project ref={element} variants={scrollReveal} initial="hidden" animate={controls} >
            <motion.h2 variants={fade}>The Racer</motion.h2>
            <motion.div 
            variants={lineAnim}
            className="line">

            </motion.div>
            <Link to="/work/the-racer">
            <img src={theracer} alt="the racer" />
            </Link>
        </Project>

        <Project ref={element2} variants={scrollReveal} initial="hidden" animate={controls2}>
            <motion.h2 variants={fade}>Good times</motion.h2>
            <motion.div  variants={lineAnim}className="line">

            </motion.div>
            <Link to="/work/good-times">
            <img src={goodtimes} alt="goodtimes" />
            </Link>
        </Project>
     <ScrollTop/>
    </Work>   
  );
};

const Work = styled(motion.div)`
    min-height: 100vh;
    overflow: hidden;
    padding: 5rem 10rem;
    background: #1b1b1b;
    @media (max-width:1300px) {
    padding:2rem 2rem ;
    }
    h2{
       padding :1rem 0rem ;
       color: #e6e6e6;
    }
`;
const Project = styled(motion.div)`
    padding-bottom: 10rem; 
    .line{
        height: 0.5rem;
        background: #23d997;
        margin-bottom: 3rem;
    }
    img{
        width: 100%;
        height: 70vh;
        object-fit: cover;
    }
`;

const Hide=styled.div`
overflow: hidden;
`;
//Frame animation
const Frame1=styled(motion.div)`
position: fixed;
left: 0;
top: 10%;
width: 100%;
height: 100vh;
background: #fffebf;
z-index: 2;
`;
const Frame2 = styled(Frame1)`
background: #ff8efb;
`
const Frame3 = styled(Frame1)`
background:#8ed2ff
`
const Frame4 = styled(Frame1)`
background:#8effa0
`

export default MyWork;