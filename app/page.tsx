// import Image from 'next/image';
// import Link from 'next/link';
// import React from 'react';


// function page() {

  
//   return (
//     <div className="min-h-screen  bg-[#020F1F] ease-in-out ">

//       <div className=' bg-[#00000011]  h-32 flex justify-between'>
//         <div className=' w-96 h-28 pl-20 py-20 '>
//         {/* <Link href="/about" className='text-[#00FFFC] text-lg mr-4'> About Me </Link> */}
//         <Link href="/about" className='text-[#00FFFC] text-lg mr-4'> Training</Link>
//         <Link href="/about" className='text-[#00FFFC] text-lg mr-4'> Projects</Link>
//         </div>

//         <Link href="/about" className='text-[#00FFFC] py-20 text-lg px-14'> Contact Me </Link>


//       </div>

// <div className='h-20'>
// <h1 className='text-white text-center font-Anton  text-4xl '>Bienvenido a mi Portafolio </h1>
// </div>

// <div className=' flex justify-between'>

// <Image src="/img/marca2.gif" alt="Descripción de la imagen" width={400} height={200}  className='ml-48 h-90'/>

// <iframe width="860" height="415" src="https://www.youtube.com/embed/AuegdLOxJp8?si=eexMhvl_Xoah6SyW" title="YouTube video player" frameBorder="0"
//  allow="accelerometer; autoplay; clipboard-write; encrypted-media; 
//  gyroscope; picture-in-picture; web-share" allowFullScreen
//  className='px-2 mr-24 '
//  ></iframe>

// </div>

//         <div  className='mt-16'>
//           <h3 className='text-[#ffffff] text-center line-clamp-3 '>¡Hola! Soy Gustavo  castillo , Full stack Developer  y 
//             este es mi espacio digital donde convergen mi pasión,
//              habilidades y trayectoria profesional.   </h3>
//         </div >

        
//         <div className='font-Anton mt-8 shadow-cyan-500/50 animate-bounce '>
//         <Link href="/about" > 
//           <h2 className='text-white text-4xl text-center front hover:text-clip shadow-lg '>
//           About Me

//           </h2>

//         </Link>
//         </div>
        



//     </div>
//   );
// }

// export default page




"use client"

import Image from 'next/image';
import Link from 'next/link';
import Navbar from './components/Navbar/navbar';
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

    <div className="min-h-screen  bg-[#020F1F] ease-in-out ">


<div className="relative  h-[500px] z-0">
      <div className="bg-[#000000af] absolute top-0 left-0 w-full h-full z-10">
        {photos.map((photo, index) => (
          <img
            key={index}
            src={photo}
            alt={`Photo ${index + 1}`}
            className={`absolute top-auto left-1/2  border-transparent transform -translate-x-1/2 -translate-y-1/2 transition-opacity duration-1000 ${
              index === currentPhotoIndex ? 'opacity-100 backdrop-brightness-200' : 'opacity-0'
            }`}
            style={{ width: '100%', height: '260%', objectFit: 'cover' }}
          />
        ))}
      </div>
      </div>

      

      <div className="absolute top-0 left-0 w-full h-[80%] z-20 flex items-center justify-center shadow-md">
        <div className='bg-[#00000036] shadow-inner text-white text-center front hover:text-clip  p-8 rounded-lg'>
          <div className='pb-8'>
<div  
  className='h-20'>
<motion.h1     
 initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  className='text-[#661919d7] text-center font-Anton z-200  break-all  text-7xl '>Bienvenido  </motion.h1>
</div >
            <h3 className='text-[#ffffff] capitalize break-all  text-xl md:text-6xl pb-6 text-center font-bold leading-tight'>
              ¡Hola! Soy Gustavo Castillo, Full stack Developer y este es mi espacio digital.
            </h3>
          </div>
          <Link href="/about">
            <motion.button 
         whileHover={{ scale: 1.2 }}
         whileTap={{ scale: 0.4 }}
         transition={{ type: "spring", stiffness: 400, damping: 17 }}
            
            className='text-white capitalize  text-2xl md:text-4xl px-4 py-1 rounded-none bg-[#000] hover:bg-[#dbdbdb8a] transition duration-300'>
              About Me
            </motion.button>
          </Link>
          <motion.button 
         whileHover={{ scale: 1.2 }}
         whileTap={{ scale: 0.4 }}
         transition={{ type: "spring", stiffness: 400, damping: 17 }}
         className='text-white text-2xl rounded-none md:text-4xl px-5 py-2 bg-[#661919] hover:bg-[#dbdbdb8a] transition duration-300'>
          <Link href="/about" > Contact Me </Link>
          </motion.button>
        </div>
      </div>
      <img width="24" height="24" src="https://img.icons8.com/external-tal-revivo-bold-tal-revivo/24/FFFFFF/external-github-with-cat-logo-an-online-community-for-software-development-logo-bold-tal-revivo.png" alt="external-github-with-cat-logo-an-online-community-for-software-development-logo-bold-tal-revivo"/>
    </div>
    
   



    </div>
  );
}

export default page

