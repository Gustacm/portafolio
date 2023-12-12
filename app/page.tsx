

'use client'


import Link from 'next/link';

import { motion } from 'framer-motion'
import { FaLinkedin,FaGithubSquare } from 'react-icons/fa';


import React, { useState, useEffect } from 'react';

const photos = [
  '/img/photos/0843.JPEG',
  '/img/photos/0859.JPEG',
  '/img/photos/5032.JPEG',
  '/img/photos/5040.JPEG',
];


function Page() {
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentPhotoIndex((prevIndex) => (prevIndex + 1) % photos.length);
    }, 5000); 

    return () => clearInterval(intervalId);
  }, []);

  

  
  return (
<motion.div
  initial={{ opacity: 0, filter: 'blur(10px)' }}
  animate={{ opacity: 1, filter: 'blur(0px)' }}
  transition={{ ease: [0.30, 0.67, 0.83, 0.67], duration: 1 }}
>

    <div className='min-h-screen  bg-[#010326] ease-in-out '>


    <div className='relative h-[400px] md:h-[500px] '>
      <div className='bg-[#000000af] absolute top-0 left-0 w-full h-full z-10'>
        {photos.map((photo, index) => (
          <img
            key={index}
            src={photo}
            alt={`Photo ${index + 1}`}
            className={`absolute top-auto left-1/2  border-transparent transform -translate-x-1/2 -translate-y-1/2 transition-opacity duration-1000 ${
              index === currentPhotoIndex ? 'opacity-500 backdrop-brightness-200' : 'opacity-0'
            }`}
            style={{ width: '100%', height: '200%', objectFit: 'cover' }}
          />
        ))}
      </div>
      </div>
      

      <div className='absolute md:h-[80%]  top-0 left-0 w-full md:w-[100%] h-[69%]  z-20 flex items-center justify-center shadow-md'>
  <div className='bg-[#bfc5d98a] shadow-inner text-center front hover:text-clip px-40 md:px-96 py-14 md:py-36 rounded-lg'>

    <div className='w-full h-full '>
      <div className='w-full h-full'>
        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 2.0 }}
          className='text-[#344459] text-center font-lilita pl-2 text-3xl md:text-5xl leading-tight'>
          Bienvenido a <p className='text-3xl md:text-5xl'> Mi Portafolio </p>
        </motion.h1>
      </div>

      <h3 className='bg-clip-text text-transparent bg-gradient-to-r from-[#344459] to-[#344459] capitalize break-all text-xl md:text-3xl pb-4 text-center font-Anton leading-tight'>
        ¡Hola! Soy Gustavo Castillo, <br />
        <span className='text-[#011140] border-solid border-2 border-[#011140] inline-block p-1'>
          Full stack Developer
        </span> y este es mi espacio digital.
      </h3>

          </div>
          <Link href='/about'>
            <motion.button 
         whileHover={{ scale: 1.2 }}
         whileTap={{ scale: 0.4 }}
         transition={{ type: 'spring', stiffness: 400, damping: 17 }}
            
            className='text-[#ffffff] capitalize  text-xl md:text-4xl px-10 py-1 font-lilita rounded-none bg-[#344459] hover:bg-[#8089A6] transition duration-300'>
              About Me
            </motion.button>
          </Link>
          <motion.button 
         whileHover={{ scale: 1.2 }}
         whileTap={{ scale: 0.1 }}
         transition={{ type: 'spring', stiffness: 400, damping: 17 }}
         className='text-white text-xl rounded-none md:text-4xl px-10 py-1 font-lilita bg-[#011140] hover:bg-[#8089A6] transition duration-300'>
          <Link href='/proyect' > Proyect </Link>
          </motion.button>
        </div>
      </div>
      <div className='absolute bottom-0 right-5 mb-1 md:mb-1'>
      <Link href='https://github.com/Gustacm ' target='_black' className='text-[#BFC5D9] pt-10 text-5xl
      hover:text-[#8089A6]'>
      <FaGithubSquare />
</Link>
</div>
<div className='absolute bottom-0 right-16 pt-10 pr-1 mb-1 md:mb-1'> 
      <Link href='https://www.linkedin.com/in/gustavo-castillo-94a000252' target='_black' className='text-[#BFC5D9] pt-10 text-5xl
      hover:text-[#8089A6]'>

  <FaLinkedin />
</Link>
</div>
    <div className='pt-0'>
      <h3 className='text-center text-xs text-[#BFC5D9] pt-6'>
      La programación es el arte de crear mundos digitales, donde las ideas se transforman en realidad a través de la lógica y la creatividad. En cada línea de código,
      <br/> se encuentra el poder de construir el futuro y resolver los desafíos del presente.
      <br/> ¡Programa con pasión y crea el cambio que deseas ver en el mundo digital!
      </h3>
      <div className='pt-4'>
            <p className='text-center text-base text-[#174dff] overline'>GustavoCastilloma@gmail.com</p>
      </div>
    </div>
    </div>
   



    </motion.div >
  );
}

export default Page

