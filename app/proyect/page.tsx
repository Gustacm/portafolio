
import Link from 'next/link'
import { FaHome,FaGithubSquare,FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion"
import Cards from '../components/cards';



function page() {

    return (
        <motion.div className="min-h-screen bg-[#010326] ease-in-out  "
        initial={{ opacity: 0, filter: "blur(10px)" }}
        animate={{ opacity: 1, filter: "blur(0px)" }}
        transition={{ ease: [0.30, 0.67, 0.83, 0.67], duration: 1 }}
        >     
    
    
    <div className='h-16 flex items-center'>
    
      <Link href="/" className='text-[#BFC5D9] pl-24 pr-6 text-4xl  hover:text-[#8089A6]'><FaHome /></Link>
      
      <div className='font-lilita  shadow-cyan-500/50'>
  <Link href="/proyect"> 
    <h2 className='text-xl text-center font hover:text-clip text-[#010326] bg-[#BFC5D9] rounded w-16 hover:bg-[#8089A6] mx-auto'>
      About
    </h2>
  </Link>
</div>
      <h1 className='text-center font-lilita text-4xl pl-96 text-[#BFC5D9]'>Proyect</h1>

    
    </div>
    
    
    <div className="flex items-center justify-center  bg-gradient-to-r from-[#3d679e00] to-[#344459] ">
      <div className=" text-[#BFC5D9] ">
        <Cards />
      </div>
    </div>
    
    
    
    <div className='font-lilita mt-2 shadow-cyan-500/50'>
      <Link href="/skills"> 
        <h2 className='text-3xl text-center font hover:text-clip text-[#010326] bg-[#BFC5D9] rounded w-36 hover:bg-[#8089A6] mx-auto'>
        Skills
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
    
        <div className='text-center text-xs text-[#BFC5D9] pt-1'>
  <h4 className='font-bold mb-1'>¡Dato curioso! 🌟</h4>
  Estás utilizando mi proyecto, el cual desarrollé con Next.js, Tailwind y TypeScript. Esta pequeña aplicación es una muestra de mis habilidades, destrezas y creatividad.
  <br/>
  Te invito a visitar mi repositorio para ver cómo funciona. ¡Gracias por explorar! 🚀
</div>
<div className='pt-1'>
  <p className='text-center text-xs text-[#174dff] overline'>GustavoCastilloma@gmail.com</p>
</div>
        </div>
        
    
    
    
    
        
        </motion.div>
      )
    }

export default page