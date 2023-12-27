"use client"
import Link from 'next/link'
import { FaHome,FaGithubSquare,FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion"



function about() {


  return (
    <motion.div
      className="min-h-screen bg-[#010326] ease-in-out"
      initial={{ opacity: 0, filter: 'blur(10px)' }}
      animate={{ opacity: 1, filter: 'blur(0px)' }}
      transition={{ ease: [0.30, 0.67, 0.83, 0.67], duration: 1 }}
    >
      <div className="h-16 flex items-center">
        <Link href="/" className="text-[#BFC5D9] pl-4 md:pl-24 pr-4 md:pr-20 text-4xl hover:text-[#8089A6]">
          <FaHome />
        </Link>
        <h1 className="text-center font-lilita text-4xl pl-4 md:pl-96 text-[#BFC5D9]">Sobre Mi</h1>
      </div>

      <div className="flex flex-col md:flex-row bg-gradient-to-r from-[#3d679e00] to-[#344459] ring-offset-8">
        <iframe
          width="100%"
          height="390"
          src="https://www.youtube.com/embed/OBLfwMXvxgI?si=IEOzRwktDn4p3fnl"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          className="p-4 md:px-10 md:mr-2 order-1 md:order-1"
        />

        <div className="md:w-5/12 text-[#BFC5D9] bg-r p-4 md:ml-16 order-2 md:order-2">
          <h2 className="text-center mt-1 font-lilita text-xl">Mis Fortalezas</h2>
          <ul className="mx-0">
      <li><h3 className='font-lilita text-lg '>🎨Creatividad sin Límites:</h3><h4 className='italic font-bold  text-xs'> Encuentro inspiración en la cocina y la música, aplicando esa creatividad al código para ofrecer soluciones únicas.</h4></li>
        <br />
        <li><h3 className='font-lilita text-lg'>💡Innovador Resiliente:</h3><h4 className='italic font-bold   text-xs'> Enfrento desafíos con humildad, utilizando mi experiencia pasada para superar obstáculos en el desarrollo.</h4></li>
        <br />
        <li><h3 className='font-lilita text-lg'>🚀Aprendiz Tecnológico Apasionado:</h3><h4 className='italic font-bold   text-xs'> De cocinero a desarrollador en 6 meses, ansío aprender y crecer en el vasto mundo de la tecnología.</h4></li>
        <br />
        <li><h3 className='font-lilita text-lg'>🤝 Multifacético:</h3><h4 className='italic font-bold   text-xs'> Contribuyo al equipo de manera efectiva, aprovechando las habilidades que he perfeccionado en la cocina y la música.</h4></li>
        <br />
      </ul>

</div >


      </div>



      <div className="font-lilita mt-5 shadow-cyan-500/50">
        <Link href="/proyect">
          <h2 className="text-4xl text-center font hover:text-clip text-[#010326] bg-[#BFC5D9] rounded w-40 hover:bg-[#8089A6] mx-auto">
            Proyectos
          </h2>
        </Link>
      </div>


      <div id="floating-buttons">
  <div className='fixed bottom-0 right-1 mb-0 md:mb-4'>
    <Link href='https://github.com/Gustacm' target='_blank' className='text-[#BFC5D9] pt-5 text-5xl md:text-5xl hover:text-[#8089A6]'>
      <FaGithubSquare />
    </Link>
  </div>
  <div className='fixed bottom-0 right-12 pt-10 pr-1 mb-0 md:mb-4'> 
    <Link href='https://www.linkedin.com/in/gustavo-castillo-94a000252' target='_blank' className='text-[#BFC5D9] pt-10 text-5xl md:text-5xl hover:text-[#8089A6]'>
      <FaLinkedin />
    </Link>
  </div>
</div>

    <div className='pt-0'>

    <h3 className='md:text-center  text-left  pl-2 text-xs text-[#BFC5D9] pt-2'>
  Cada interacción, cada línea de código, es una oportunidad para dar vida a nuevas ideas y solucionar desafíos. 
  <br/> ¡Convierte tus conceptos en realidad y únete a la revolución digital! Estoy aquí para escuchar tus ideas y colaborar en la creación de algo extraordinario.

</h3>
<div className='pt-5 '>
            <p className='md:text-center  text-left text-xs text-[#174dff] overline'>gcastillo.dev@gmail.com</p>
      </div>
    </div>
    




    
    </motion.div>
  )
}

export default about