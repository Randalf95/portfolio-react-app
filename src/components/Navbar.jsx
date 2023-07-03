import React, {useState} from 'react';
import {FaBars, FaTimes, FaLinkedin, FaGithub, FaFacebook} from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill} from 'react-icons/bs';
import Logo from '../assets/logo.png';

const Navbar = () => {
    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)

  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300'>
        <div>
            <img src={Logo} alt='Logo image' style= {{width:'200px'}}/>
        </div>

        {/* menu */}
        
            <ul className='hidden md:flex'>
                <li>Home</li>
                <li>About</li>
                <li>Experience</li>
                <li>Skills</li>
                <li>Work</li>
                <li>Contact</li>
            </ul>
       

        {/* Hamburger */}
        <div onClick={handleClick} className='md:hidden z-10'>
            {!nav? <FaBars /> : <FaTimes/>}
        </div>

        {/* Mobile menu */}
        <ul className={
          !nav
            ? 'hidden'
            : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'
        }>
                <li className='py-6 text-2xl'>Home</li>
                <li className='py-6 text-2xl'>About</li>
                <li className='py-6 text-2xl'>Experience</li>
                <li className='py-6 text-2xl'>Skills</li>
                <li className='py-6 text-2xl'>Work</li>
                <li className='py-6 text-2xl'>Contact</li>
        </ul>

        {/* Social icons */}
        <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
            <ul>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
                    <a className='flex justify-between items-center w-full text-gray-300'
                     href='https://www.linkedin.com/in/alerandazzo/'>
                        Linkedin <FaLinkedin size={30}/>
                    </a>
                </li>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]'>
                    <a className='flex justify-between items-center w-full text-gray-300'
                     href='https://github.com/Randalf95'>
                        Github <FaGithub size={30}/>
                    </a>
                </li>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]'>
                    <a className='flex justify-between items-center w-full text-gray-300'
                     href='https://www.linkedin.com/in/alerandazzo/'>
                        Email <HiOutlineMail size={30}/>
                    </a>
                </li>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]'>
                    <a className='flex justify-between items-center w-full text-gray-300'
                     href='https://www.linkedin.com/in/alerandazzo/'>
                        Resume <BsFillPersonLinesFill size={30}/>
                    </a>
                </li>
            </ul>
        </div>

    </div>
  )
}
//////

export default Navbar
