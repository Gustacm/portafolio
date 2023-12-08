"use client"
import Link from 'next/link'
import { FaHome,FaGithubSquare,FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion"



function about() {


  return (
    <motion.div className="min-h-screen bg-[#010326] ease-in-out  "
    initial={{ opacity: 0, filter: "blur(10px)" }}
    animate={{ opacity: 1, filter: "blur(0px)" }}
    transition={{ ease: [0.30, 0.67, 0.83, 0.67], duration: 1 }}
    >     


<div className='h-16 flex items-center'>

  <Link href="/" className='text-[#BFC5D9] pl-24 pr-20 text-4xl  hover:text-[#8089A6]'><FaHome /></Link>
  <h1 className='text-center font-lilita text-4xl pl-96 text-[#BFC5D9]'>About Me</h1>

</div>


<div className=' flex justify-between bg-gradient-to-r from-[#3d679e00] to-[#344459] ring-offset-8 '>
<div className="ml-16 w-5/12 text-[#BFC5D9] ">
<h2 className='text-center mt-1 font-lilita text-xl'>Mis Fortalezas</h2>
<br/>
      <ul className='mx-0  '>
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

<iframe width="900" height="390" src="https://www.youtube.com/embed/AuegdLOxJp8?si=eexMhvl_Xoah6SyW" title="YouTube video player" frameBorder="0"
 allow="accelerometer; autoplay; clipboard-write; encrypted-media; 
 gyroscope; picture-in-picture; web-share" allowFullScreen
 className='px-10 mr-2 '
 />

</div>



<div className='font-lilita mt-5 shadow-cyan-500/50'>
  <Link href="/proyect"> 
    <h2 className='text-4xl text-center font hover:text-clip text-[#010326] bg-[#BFC5D9] rounded w-40 hover:bg-[#8089A6] mx-auto'>
      Proyect
    </h2>
  </Link>
</div>


        <div className='absolute bottom-0 right-5 mb-1 '>
      <Link href="https://github.com/Gustacm " target='_black' className='text-[#BFC5D9] pt-10 text-5xl
      hover:text-[#8089A6]'>
      <FaGithubSquare />
</Link>
</div>
<div className='absolute bottom-0 right-16 pt-10 pr-1 mb-1 '> 
      <Link href="https://www.linkedin.com/in/gustavo-castillo-94a000252" target='_black' className='text-[#BFC5D9] pt-10 text-5xl
      hover:text-[#8089A6]'>

  <FaLinkedin />
</Link>
</div>
    <div className='pt-0'>

    <h3 className='text-center text-xs text-[#BFC5D9] pt-1'>
  "Cada interacción, cada línea de código, es una oportunidad para dar vida a nuevas ideas y solucionar desafíos. 
  <br/> ¡Convierte tus conceptos en realidad y únete a la revolución digital! Estoy aquí para escuchar tus ideas y colaborar en la creación de algo extraordinario.
  <br/> ¡Contáctame y comencemos a construir juntos el futuro que imaginamos!"
</h3>
<div className='pt-6'>
            <p className='text-center text-xs text-[#174dff] overline'>GustavoCastilloma@gmail.com</p>
      </div>
    </div>
    




    
    </motion.div>
  )
}

export default about