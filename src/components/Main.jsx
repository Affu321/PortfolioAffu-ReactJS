import React from "react";
import { TypeAnimation } from "react-type-animation";
import {FaTwitter, FaInstagram, FaGithub, FaLinkedinIn} from 'react-icons/fa'


const Main = () => {
    return (
        <div id='main'>
            <img className='w-full h-screen object-cover object-left' src="https://images.unsplash.com/photo-1457305237443-44c3d5a30b89?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
            <div className='w-full h-screen absolute top-0 left-0 bg-white/40'>
            <div className='max-w-[700px] m-auto h-[80%] w-full flex flex-col justify-center lg:items-start items-center'>
                <h1 className='sm:text-5xl text 4xl font-bold text-gray-800'>Hi, I'm Affu Dina</h1>
                <h2 className='flex sm:text-3xl text-2xl pt-4 text-gray-800'>I'm a
                <TypeAnimation
      sequence={[
        'coder',
        2000,
        'backend Engineer',
        2000
      ]}
      wrapper="div"
      speed={50}
      style={{ fontSize: '1em',paddingLeft:'5px'}}
      repeat={Infinity}
    />
                </h2>
             <div className='flex justify-between pt-6 max-w-[200px] w-full'>
                <FaTwitter className='curor pointer' size={20} />
                <FaInstagram className='curor pointer' size={20}/>
                <FaGithub className='curor pointer' size={20}/>
                <FaLinkedinIn className='curor pointer' size={20}/>
             </div>
            </div>
            </div>
        </div>
    )
}

export default Main