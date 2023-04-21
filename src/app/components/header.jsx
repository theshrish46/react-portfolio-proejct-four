import React from 'react';
import { BsFillSunFill } from 'react-icons/bs';
import { BsFillMoonFill } from 'react-icons/bs';
import { FaTimes } from 'react-icons/fa';
import { FaBars } from 'react-icons/fa';

// Style files
import './../scss/global.scss';
import './../scss/color.scss';
import './../scss/header.scss';

const header = () => {

    return (

        <div className='container'>
            <header>

                {/* Smaller Screens */}



                <button id='open' className='button bars'><FaBars /></button>
                <button id='close' className='button times'><FaTimes /></button>

                <ul className='small__screen' id='menuBar'>
                    <li>
                        <a href="#about">About</a>
                    </li>
                    <li>
                        <a href="#work">Work</a>
                    </li>
                    <li>
                        <a href="#contact">Contact</a>
                    </li>
                    <li>
                        <a href="#">Resume</a>
                    </li>
                </ul>



                <ul className='large-screen'>
                    <li>
                        <a href="#about">About</a>
                    </li>
                    <li>
                        <a href="#work">Work</a>
                    </li>
                    <li>
                        <a href="#contact">Contact</a>
                    </li>
                    <li className='gap-li'></li>
                    <li>
                        <a href="#">Resume</a>
                    </li>
                </ul>
                <button className='button sun'><BsFillSunFill /></button>
                <button className='button moon'><BsFillMoonFill /></button>

            </header>
        </div>
    )
}

export default header
