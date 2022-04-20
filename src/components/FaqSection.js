import React from 'react'
import styled from 'styled-components';
import { About } from '../style';
import Toggle from './Toggle';
import { AnimateSharedLayout } from 'framer-motion';
import { useScroll } from './useScroll';
import {scrollReveal} from '../animation';
const FaqSection = () => {
    const [element, controls] = useScroll();

    return (

    <Faq variants={scrollReveal} 
    ref={element} animate={controls} initial="hidden" >
        <h2>Any Questions?  <span>FAQ</span></h2>
        <AnimateSharedLayout>

     
        <Toggle title='How do I start'>
  
            <div className="answer">
                <p>Lorem ipsum dolor sit amet.</p>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis explicabo doloremque obcaecati magni dolores delectus quo porro atque!
                </p>
            </div>
            
                 
        </Toggle> 
        
        <Toggle title='Daily Schedule'>
          
            
            <div className="answer">
                <p>Lorem ipsum dolor sit amet.</p>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis explicabo doloremque obcaecati magni dolores delectus quo porro atque!
                    
                </p>
            </div>
    
        </Toggle>
       
        <Toggle title='Different payment methods'>
        
                    
                    <div className="answer">
                        <p>Lorem ipsum dolor sit amet.</p>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis explicabo doloremque obcaecati magni dolores delectus quo porro atque!    
                        </p>
                    </div>
                    
                
        </Toggle >
       
        <Toggle title='What product do I present?'>

         
          
            <div className="answer">
                <p>Lorem ipsum dolor sit amet.</p>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis explicabo doloremque obcaecati magni dolores delectus quo porro atque!
                </p>
            </div>
        
     
        
        </Toggle>
        </AnimateSharedLayout>
    </Faq>
  );
};
const Faq = styled(About)`
display: block;
span{
    display: block;

}
h2{
    padding-bottom: 2rem;
    font-weight: lighter;
}
.faq-line{
    background: #000000;
    height: 0.2rem;
    margin: 2rem 0rem;
    width: 100%;

}
.question{
    padding: 3rem 0rem;
    cursor:pointer;
}
.answer{
    padding: 2rem 0rem;
    p{
        padding: 1rem ;
    }
}
`;




export default FaqSection;