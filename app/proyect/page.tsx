'use client'
import Link from 'next/link'
import { FaHome, FaGithubSquare, FaLinkedin } from 'react-icons/fa';
import { motion } from 'framer-motion'
import Cards from '../components/cards';

function Page() {
  return (
    <motion.div
      className='min-h-screen bg-[#010326] ease-in-out'
      initial={{ opacity: 0, filter: 'blur(10px)' }}
      animate={{ opacity: 1, filter: 'blur(0px)' }}
      transition={{ ease: [0.30, 0.67, 0.83, 0.67], duration: 1 }}
    >

      <div className='h-16 flex items-center'>

        <Link href='/' className='text-[#BFC5D9] pl-2 md:pl-22 pr-2 lg:pr-6 text-4xl  hover:text-[#8089A6]'><FaHome /></Link>

        <div className='font-lilita shadow-cyan-500/50'>
          <Link href='/about'>
            <h2 className='text-xl text-center font hover:text-clip text-[#010326] bg-[#BFC5D9] rounded w-24 hover:bg-[#8089A6] mx-auto'>
              Sobre mi
            </h2>
          </Link>
        </div>

        <h1 className='text-center font-lilita text-2xl md:pl-24 lg:text-4xl pl-2 lg:pl-80 text-[#BFC5D9] '>Proyectos</h1>

      </div>

      <div className='flex items-center justify-center bg-gradient-to-r from-[#3d679e00] to-[#344459] '>
        <div className=' text-[#BFC5D9] '>
          <Cards />
        </div>
      </div>

      <div className='font-lilita mt-2 shadow-cyan-500/50'>
        <Link href='/skills'>
          <h2 className='text-3xl text-center font hover:text-clip text-[#010326] bg-[#BFC5D9] rounded w-36 hover:bg-[#8089A6] mx-auto'>
            Skills
          </h2>
        </Link>
      </div>

      <div id="floating-buttons">
  <div className='fixed bottom-0 right-1 mb-48 md:mb-4'>
    <Link href='https://github.com/Gustacm' target='_blank' className='text-[#BFC5D9] pt-5 text-5xl md:text-5xl hover:text-[#8089A6]'>
      <FaGithubSquare />
    </Link>
  </div>
  <div className='fixed bottom-0 right-12 pt-10 pr-1 mb-48 md:mb-4'> 
    <Link href='https://www.linkedin.com/in/gustavo-castillo-94a000252' target='_blank' className='text-[#BFC5D9] pt-10 text-5xl md:text-5xl hover:text-[#8089A6]'>
      <FaLinkedin />
    </Link>
  </div>
</div>

      <div className='pt-0'>
        <div className='md:text-center pl-1  text-left text-xs text-[#BFC5D9] pt-1'>
          <h4 className='font-bold pl-32 mb-1'>¡Dato curioso! 🌟</h4>
          Estás utilizando mi proyecto, el cual desarrollé con Next.js, Tailwind y TypeScript. Esta pequeña aplicación es una muestra de mis habilidades, destrezas y creatividad.
          <br />
          Te invito a visitar mi repositorio para ver cómo funciona. ¡Gracias por explorar! 🚀
        </div>
        <div className='pt-1'>
          <p className='md:text-center  text-left text-xs text-[#174dff] overline'>gcastillo.dev@gmail.com</p>
        </div>
      </div>

    </motion.div>
  )
}

export default Page;
