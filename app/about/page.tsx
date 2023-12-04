"use client"
import React, { useEffect } from 'react'
import Navbar from '../components/Navbar/navbar'
import Image from 'next/image'
import Link from 'next/link'
import { motion, useScroll, useSpring } from "framer-motion";



function about() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="min-h-screen bg-[#ffffff] ease-in-out  ">     
        <>
      <motion.div className="progress-bar" style={{ scaleX }} />
      <Navbar/>
      
    </>


      <div className=' h-10'></div>
      <div className='h-20' >

      <div className='h-20'>
<h1 className=' text-center font-Anton  text-4xl '>About Me </h1>
</div>
</div>

<div className=' flex justify-between bg-gradient-to-r from-[#3d679e00] to-[#00fffb31] ring-offset-8 border-s-4'>
<div className="ml-20 w-5/12 ">
<h2 className='text-center mt-3 font-lilita text-2xl'>Mis Fortalezas</h2>
<br/>
      <ul className='mx-8  '>
      <li><h3 className='font-lilita text-xl '>🎨Creatividad sin Límites:</h3><h4 className='italic font-bold '> Encuentro inspiración en la cocina y la música, aplicando esa creatividad al código para ofrecer soluciones únicas.</h4></li>
        <br />
        <li><h3 className='font-lilita text-xl'>💡Innovador Resiliente:</h3><h4 className='italic font-bold'> Enfrento desafíos con humildad, utilizando mi experiencia pasada para superar obstáculos en el desarrollo.</h4></li>
        <br />
        <li><h3 className='font-lilita text-xl'>🚀Aprendiz Tecnológico Apasionado:</h3><h4 className='italic font-bold'> De cocinero a desarrollador en 6 meses, ansío aprender y crecer en el vasto mundo de la tecnología.</h4></li>
        <br />
        <li><h3 className='font-lilita text-xl'>🤝 Multifacético:</h3><h4 className='italic font-bold'> Contribuyo al equipo de manera efectiva, aprovechando las habilidades que he perfeccionado en la cocina y la música.</h4></li>
        <br />
      </ul>

</div >

<iframe width="900" height="455" src="https://www.youtube.com/embed/AuegdLOxJp8?si=eexMhvl_Xoah6SyW" title="YouTube video player" frameBorder="0"
 allow="accelerometer; autoplay; clipboard-write; encrypted-media; 
 gyroscope; picture-in-picture; web-share" allowFullScreen
 className='px-2 mr-10 '
 ></iframe>

</div>

<div  className='mt-10'>
          <h3 className='text-center '>¡Hola! Soy Gustavo  castillo , Full stack Developer  y 
            este es mi espacio digital donde convergen mi pasión,
             habilidades y trayectoria profesional.   </h3>
        </div>

        <div className='font-Anton mt-10 shadow-cyan-500/50 animate-bounce '>
        <Link href="/about" > 
          <h2 className=' text-4xl text-center front hover:text-clip  '>
          About Me

          </h2>

        </Link>
        </div>




    
    </div>
  )
}

export default about