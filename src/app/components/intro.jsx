import React from 'react';
import { AiOutlineArrowRight } from 'react-icons/ai';


import './../scss/color.scss';
import './../scss/intro.scss';

const intro = () => {
    return (
        <div className='container'>
            <section>

                <h3 className='intro__heading'>Hey,<br /> I am <strong> Shrish</strong></h3>
                <h3 className='intro__heading'>A Freelance <br /> <span>Web Developer</span></h3>
                <p className='intro__para'>I am a <strong>Web Developer</strong> from Inida. I am currently working on <strong> MERN</strong> stack and building some cool projects</p>
                <button className='intro__button'>Have a look here<AiOutlineArrowRight /></button>
            </section>
        </div>
    )
}

export default intro
