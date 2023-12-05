

"use client"

import Image from 'next/image';
import Link from 'next/link';

import { motion } from "framer-motion"



import React, { useState, useEffect } from 'react';

const photos = [
  "/img/photos/0843.JPEG",
  "/img/photos/0859.JPEG",
  "/img/photos/5032.JPEG",
  "/img/photos/5040.JPEG",
];


function page() {
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentPhotoIndex((prevIndex) => (prevIndex + 1) % photos.length);
    }, 5000); 

    return () => clearInterval(intervalId);
  }, []);

  

  
  return (
    <div>

    <div className="min-h-screen  bg-[#0e0404] ease-in-out ">


<div className="relative  h-[500px] z-0">
      <div className="bg-[#000000af] absolute top-0 left-0 w-full h-full z-10">
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

      

      <div className="absolute top-0 left-0 w-full h-[78%] z-20 flex items-center justify-center shadow-md">
        <div className='bg-[#ffffffa8] shadow-inner  text-center front hover:text-clip  px-96 py-20 rounded-lg'>
          <div className='pb-0'>
          <div className='h-40'>
  <motion.h1
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    className='text-[#661919d7] text-center font-lilita -z-0 text-4xl md:text-5xl lg:text-7xl leading-tight'>
    Bienvenido a <p className='text-5xl'> Mi Portafolio </p>
  </motion.h1>
</div>

<h3 className='bg-clip-text text-transparent bg-gradient-to-r from-[#8f8f8f] to-[#771b1b] capitalize break-all text-xl md:text-3xl pb-6 text-center font-Anton leading-tight'>
  ¡Hola! Soy Gustavo Castillo, <br/>
  <span className='text-[#9e2424] border-solid border-2 border-[#9e2424] inline-block p-1'>
    Full stack Developer
  </span> y este es mi espacio digital.
</h3>

          </div>
          <Link href="/about">
            <motion.button 
         whileHover={{ scale: 1.2 }}
         whileTap={{ scale: 0.4 }}
         transition={{ type: "spring", stiffness: 400, damping: 17 }}
            
            className='text-white capitalize  text-2xl md:text-2xl px-2 py-1 font-lilita rounded-none bg-[#000] hover:bg-[#e44f4f8a] transition duration-300'>
              About Me
            </motion.button>
          </Link>
          <motion.button 
         whileHover={{ scale: 1.2 }}
         whileTap={{ scale: 0.1 }}
         transition={{ type: "spring", stiffness: 400, damping: 17 }}
         className='text-white text-2xl rounded-none md:text-2xl px-4 py-2 font-lilita bg-[#661919] hover:bg-[#0000008a] transition duration-300'>
          <Link href="/about" > Contact Me </Link>
          </motion.button>
        </div>
      </div>
      <div className='absolute bottom-0 right-5 mb-4 '>
      <Link href="https://github.com/Gustacm">
  <img
    width="35"
    height="35"
    src="https://img.icons8.com/external-tal-revivo-bold-tal-revivo/24/FFFFFF/external-github-with-cat-logo-an-online-community-for-software-development-logo-bold-tal-revivo.png"
    alt="external-github-with-cat-logo-an-online-community-for-software-development-logo-bold-tal-revivo"
  />
</Link>
</div>
<div className='absolute bottom-0 right-16 mb-4 '>
      <Link href="https://github.com/Gustacm">
  <img
    width="35"
    height="35"
    src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/LinkedIn_icon.svg/768px-LinkedIn_icon.svg.png"
    alt="external-github-with-cat-logo-an-online-community-for-software-development-logo-bold-tal-revivo"
  />
</Link>
</div>
    <div className='pt-2'>
      <h3 className='text-center text-xs text-white pt-6'>
      "La programación es el arte de crear mundos digitales, donde las ideas se transforman en realidad a través de la lógica y la creatividad. En cada línea de código,
      <br/> se encuentra el poder de construir el futuro y resolver los desafíos del presente.
      <br/> ¡Programa con pasión y crea el cambio que deseas ver en el mundo digital!"
      </h3>
      <div className='pt-3'>
            <p className='text-center text-sm text-sky-400 overline'>GustavoCastilloma@gmail.com</p>
      </div>
    </div>
    </div>
   



    </div>
  );
}

export default page

