import React from 'react'
import { motion } from 'framer-motion';
import {pageAnimation, titleAnim} from '../animation';
import styled from 'styled-components';
const ContactMe = () => {
  return (
    <ContactStyle variants={pageAnimation} 
    initial="hidden" 
    animate="show"
    exit="exit" 
    style={{background:"#fff"}} >
     <Title>
       <Hide>
         <motion.div variants={titleAnim}>
          <h2>Get in touch. </h2> 
         </motion.div>  
       </Hide>
     </Title>  
     <div>
       <Hide>
           <Social variants={titleAnim}>
       <Circle/>
        <h2>
        Send Us 
        </h2>
       </Social > 
       </Hide>

       <Hide>
           <Social variants={titleAnim}>
       <Circle/>
        <h2>
        Send Us 
        </h2>
       </Social > 
       </Hide>

       <Hide>
           <Social variants={titleAnim}>
       <Circle/>
        <h2>
        Send Us 
        </h2>
       </Social > 
       </Hide>
      
     </div>
    </ContactStyle>
  );
};
const ContactStyle = styled(motion.div)`
padding:5rem 10rem ;
color:#353535;
min-height:90vh;
@media (max-width:1500px) {
  
  padding:2rem ;
  font-size:1rem ;
}
`;
const Title = styled.div`
margin-bottom:4rem ;
color:black;
@media (max-width:1500px) {
  margin-top:5rem ;
}
`;
const Hide = styled.div`
overflow:hidden;`
const Circle = styled.div`
border-radius:50%;
width:3rem;
height:3rem ;
background:#23de99 ;
`
const Circle1 = styled.div`
border-radius:50%;
width:3rem;
height:3rem ;
background:#23de99 ;
`
const Social = styled(motion.div)`
display:flex ;
align-items:center ;
h2{
  margin:2rem;
}
`

export default ContactMe;