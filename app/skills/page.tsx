"use client"

import Link from 'next/link'
import { FaHome,FaGithubSquare,FaLinkedin, FaNode } from 'react-icons/fa';
import { motion } from 'framer-motion'
import { SiTypescript,SiJavascript, SiRedux, SiReact, SiVercel, SiNextdotjs, SiNestjs, SiTailwindcss, SiGit, SiCss3, SiDiscord, SiIterm2, SiNotion, SiNpm, SiPostgresql, SiPostman, SiSlack, SiTorbrowser, SiWindows10, SiZoom, SiLinux, SiLinuxmint, SiHtml5, SiMysql, SiUbuntu, SiVite, SiTrello, SiFramer, SiFigma, SiExpress, SiMercadopago, SiFirebase } from 'react-icons/si';
import { TbBrandVscode } from 'react-icons/tb';
import { LiaCloudShowersHeavySolid } from 'react-icons/lia';
import { BsStripe } from 'react-icons/bs';

interface TecnologiaEnlaceProps {
    nombre: string;
    icono: JSX.Element;
    documentacionUrl: string;
  }

const TecnologiaEnlace: React.FC<TecnologiaEnlaceProps> = ({ nombre, icono, documentacionUrl }) => (
  <motion.div
    whileHover={{ scale: 1.1, color: '#ffffff' }}
  >
    <a
      href={documentacionUrl}
      target='_blank'
      rel='noopener noreferrer'
      className='flex flex-col items-center cursor-pointer'
    >
      <div>{icono}</div>
      <h3 className='text-xs'>{nombre}</h3>
    </a>
  </motion.div>
);

function page() {
  return (
    <motion.div
      className='min-h-screen bg-[#010326] ease-in-out'
      initial={{ opacity: 0, filter: 'blur(10px)' }}
      animate={{ opacity: 1, filter: 'blur(0px)' }}
      transition={{ ease: [0.30, 0.67, 0.83, 0.67], duration: 1 }}
    >
 <div className='flex pt-4 pr-2 md:pr-6 flex-row items-center lg:text-4xl md:text-2xl'>
  <Link
    href='/'
    className='text-[#BFC5D9] pl-2 pr-2 lg:pr-6 text-2xl lg:text-4xl hover:text-[#8089A6] md:mr-2'
  >
    <FaHome />
  </Link>

  <div className='font-lilita shadow-cyan-500/50 pr- flex'>
    <Link className='pr-2' href='/about'>
      <h2 className='text-xl text-center font hover:text-clip text-[#010326] bg-[#BFC5D9] rounded w-24 hover:bg-[#8089A6] mx-auto'>
        Sobre Mi
      </h2>
    </Link>

    <Link href='/proyect'>
      <h2 className='text-xl text-center font hover:text-clip text-[#010326] bg-[#BFC5D9] rounded w-24 hover:bg-[#8089A6] mx-auto'>
        Proyectos
      </h2>
    </Link>
  </div>

  <h1 className='text-center font-lilita text-2xl md:pl-24 lg:text-4xl pl-2 lg:pl-80 text-[#BFC5D9] '>
    Skill
  </h1>
</div>

    
    
      <div className='flex items-center justify-center bg-gradient-to-r from-[#3d679e00] to-[#344459]'>
        <div className='text-[#BFC5D9]'>
      <div>
      <div className='flex flex-row flex-wrap justify-center'>

      <div className='pl-0 md:pl-8 w-72 md:w-96 h-52 pt-5 p relative'>
      <Link href='https://certificates.soyhenry.com/new-cert?id=ebef06262ca6f864668870433d51157da7302dbed00d938705525d7c49e1ca89'>
        <motion.div
          className='rounded-lg overflow-hidden cursor-pointer relative'
          whileHover={{ scale: 1.05 }}
        >
          <motion.img
            src='/img/Tch.jpg'
            alt='Description of the image'
            className='w-full h-full'
            whileHover={{ filter: 'blur(5px)' }}
            initial={{ filter: 'blur(0px)' }}
          />
          <div className='absolute top-0 left-0 w-full h-full flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300'>
            <div className=' h-full w-full  items-center justify-center  bg-[#010326b3]   '>
            <div className='text-white text-center p-3'>
                <h3 className='text-2xl font-semibold pt-2'> ¿Teaching Assistan👩‍🏫?</h3>
                <h4  className=' text-sm font-normal text-left pt-3 '>
                La figura de Teaching Assistant en Henry proporciona apoyo diario a los estudiantes durante su proceso en el Bootcamp,
                 ofreciendo asistencia y soluciones interactivas  en  proceso educativo.</h4>
            </div>
            </div>
          </div>
        </motion.div>
      </Link>
      <h2 className='text-center font-lilita'>Certificado Teaching Assistant</h2>
    </div>

     <div className='pl-0 md:pl-8 w-72 md:w-96 h-60 pt-5 p relative'>
        <Link href='https://certificates.soyhenry.com/new-cert?id=b1dd215a715580c6bed2adffdb999109251a810c261b6405d15580d2d9335131'>
          <motion.div
            className='rounded-lg overflow-hidden cursor-pointer relative'
            whileHover={{ scale: 1.05 }}
          >
          <motion.img
            src='/img/FS.jpg'
            alt='Description of the image'
            className='w-full h-full'
            whileHover={{ filter: 'blur(5px)' }}
            initial={{ filter: 'blur(0px)' }}
          />
          <div className='absolute top-0 left-0 w-full h-full flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300'>
            <div className=' h-full w-full  items-center justify-center  bg-[#010326b3]   '>
            <div className='text-white text-center p-3'>
                <h3 className='text-2xl font-semibold pt-1'>¿Que es Henry 🚀?</h3>
                <h4  className=' text-sm font-normal text-left pt-2 '>
Henry es una academia de desarrollo de software en Latinoamérica que ofrece formación intensiva en desarrollo web Full Stack.
 Henry busca democratizar el acceso a la educación en tecnología y preparar a los estudiantes para oportunidades laborales en la industria tecnológica regional.</h4>
            </div>
            </div>
          </div>
        </motion.div>
        </Link>
        <h2 className='text-center font-lilita'>Certificado Full Stack</h2>
      </div> 

 

      <div className='pl-0 md:pl-8 w-72 h-60 pt-5 p relative'>
        <Link href='https://i.ibb.co/vkPL7Jj/fundaU.jpg'>
          <motion.div
            className='rounded-lg overflow-hidden cursor-pointer relative'
            whileHover={{ scale: 1.05 }}
          >
          <motion.img
            src='/img/fundaU.jpeg'
            alt='Description of the image'
            className='w-full h-full'
            whileHover={{ filter: 'blur(5px)' }}
            initial={{ filter: 'blur(0px)' }}
          />
          <div className='absolute top-0 left-0 w-full h-full flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300'>
            <div className=' h-full w-full  items-center justify-center  bg-[#010326b3]   '>
            <div className='text-white text-center p-3'>
                <h3 className='text-xl font-semibold pt-2'>Oratoria y Liderazgo 🎙️</h3>
                <h4  className=' text-sm font-normal text-left pt-3 '>
                Cuento con habilidades comunicativas sólidas y técnicas efectivas para expresar 
                ideas con confianza, persuadir audiencias y liderar con impacto.</h4> 
            </div>
            </div>
          </div>
        </motion.div>
      </Link>
      <h2 className='text-center font-lilita'>Certificado Oratoria y Liderazgo </h2>
    </div>


    <div className='pl-0 md:pl-8 w-72 h-60 pt-5 p relative'>
        <Link href='https://www.linkedin.com/learning/certificates/a1ed43b5056c162efebd3cdc39540ce76b16dfa8ec5914ca7219b06305ae14d7'>
          <motion.div
            className='rounded-lg overflow-hidden cursor-pointer relative'
            whileHover={{ scale: 1.05 }}
          >
          <motion.img
            src='/img/cmc.png'
            alt='Description of the image'
            className='w-full h-full'
            whileHover={{ filter: 'blur(5px)' }}
            initial={{ filter: 'blur(0px)' }}
          />
          <div className='absolute top-0 left-0 w-full h-full flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300'>
            <div className=' h-full w-full  items-center justify-center  bg-[#010326b3]   '>
            <div className='text-white text-center p-3'>
                <h3 className='text-xl font-semibold pt-2'>Fundamentos profesionales del desarrollo de software</h3>
                <h4  className=' text-sm font-normal text-left pt-3 '>
                Desarrollé la capacidad para comprender y aplicar conceptos fundamentales de programación,
                 permitiéndome abordar problemas y escribir código de manera efectiva.</h4> 
            </div>
            </div>
          </div>
        </motion.div>
      </Link>
      <h2 className='text-center font-lilita'>Fundamentos profesionales del desarrollo de software</h2>
    </div>

    </div>


        <h2 className='font-lilita'>Tecnologias Que Manejo:</h2>
            
        <div className='flex flex-wrap bg-center space-x-4 space-y-4 text-4xl'>
            
          <TecnologiaEnlace nombre='TypeScript' icono={<SiTypescript />} documentacionUrl='https://www.typescriptlang.org/' />
          <TecnologiaEnlace nombre='JavaScript' icono={<SiJavascript />} documentacionUrl='https://developer.mozilla.org/en-US/docs/Web/JavaScript' />
          <TecnologiaEnlace nombre='Redux' icono={<SiRedux />} documentacionUrl='https://redux.js.org' />
          <TecnologiaEnlace nombre='Redux Toolkit' icono={<SiRedux />} documentacionUrl='https://redux-toolkit.js.org/' />
          <TecnologiaEnlace nombre='React' icono={<SiReact />} documentacionUrl='https://react.dev' />
          <TecnologiaEnlace nombre='Next.js' icono={<SiNextdotjs />} documentacionUrl='https://nextjs.org/' />
          <TecnologiaEnlace nombre='Nest.js' icono={<SiNestjs />} documentacionUrl='https://nestjs.com/' />
          <TecnologiaEnlace nombre='Tailwind CSS' icono={<SiTailwindcss />} documentacionUrl='https://tailwindcss.com/' />
          <TecnologiaEnlace nombre='Git' icono={<SiGit />} documentacionUrl='https://git-scm.com/' />
          <TecnologiaEnlace nombre='CSS3' icono={<SiCss3 />} documentacionUrl='https://developer.mozilla.org/en-US/docs/Web/CSS' />
          <TecnologiaEnlace nombre='Discord' icono={<SiDiscord />} documentacionUrl='https://discord.com/' />
          <TecnologiaEnlace nombre='Bash Windows' icono={<SiIterm2 />} documentacionUrl='https://learn.microsoft.com/en-us/training/modules/bash-introduction' />
          <TecnologiaEnlace nombre='Bash Linux' icono={<SiIterm2 />} documentacionUrl='https://learn.microsoft.com/en-us/training/modules/bash-introduction' />
          <TecnologiaEnlace nombre='Notion' icono={<SiNotion />} documentacionUrl='https://www.notion.so/es-es' />
          <TecnologiaEnlace nombre='Npm' icono={<SiNpm />} documentacionUrl='https://www.npmjs.com/' />
          <TecnologiaEnlace nombre='Postgresql' icono={<SiPostgresql />} documentacionUrl='https://www.postgresql.org/' />
          <TecnologiaEnlace nombre='Postman' icono={<SiPostman />} documentacionUrl='https://www.postman.com/' />
          <TecnologiaEnlace nombre='Slack' icono={<SiSlack />} documentacionUrl='https://slack.com' />
           <TecnologiaEnlace nombre='Torbrowser' icono={<SiTorbrowser />} documentacionUrl='https://www.torproject.org/es/' /> 
          <TecnologiaEnlace nombre='Windows' icono={<SiWindows10 />} documentacionUrl='https://support.microsoft.com/en-us/windows/find-your-documents-in-windows-5c7c8cfe-c289-fae4-f5f8-6b3fdba418d2' />
          <TecnologiaEnlace nombre='Linux' icono={<SiLinux />} documentacionUrl='https://en.wikipedia.org/wiki/Linux' />
          <TecnologiaEnlace nombre='Linux mint' icono={<SiLinuxmint />} documentacionUrl='https://linuxmint.com/documentation.php' />         
          <TecnologiaEnlace nombre='Mysql' icono={<SiMysql />} documentacionUrl='https://www.mysql.com/' />
          <TecnologiaEnlace nombre='Htm l5' icono={<SiHtml5 />} documentacionUrl='https://developer.mozilla.org/en-US/docs/Glossary/HTML5' />    
          <TecnologiaEnlace nombre='Ubuntu ' icono={<SiUbuntu  />} documentacionUrl='https://help.ubuntu.com/' />
          <TecnologiaEnlace nombre='Node js' icono={<FaNode/>} documentacionUrl='https://nodejs.org/en' />
          <TecnologiaEnlace nombre='Vite ' icono={<SiVite />} documentacionUrl='https://vitejs.dev' />
          <TecnologiaEnlace nombre='Vscode  ' icono={<TbBrandVscode />} documentacionUrl='https://vitejs.dev' />
          <TecnologiaEnlace nombre='Trello' icono={<SiTrello  />} documentacionUrl='https://trello.com/' />
          <TecnologiaEnlace nombre='Framer Motion ' icono={<SiFramer  />} documentacionUrl='https://www.framer.com/motion/' />
          <TecnologiaEnlace nombre='Figma' icono={<SiFigma />} documentacionUrl='https://www.figma.com/' />
          <TecnologiaEnlace nombre='Express ' icono={<SiExpress />} documentacionUrl='https://expressjs.com/' />
          <TecnologiaEnlace nombre='Cloudinary' icono={<LiaCloudShowersHeavySolid />} documentacionUrl='https://cloudinary.com/' />
          <TecnologiaEnlace nombre='Stripe ' icono={<BsStripe />} documentacionUrl='https://stripe.com/es-us' />
          <TecnologiaEnlace nombre='Mercado pago ' icono={<SiMercadopago />} documentacionUrl='https://www.mercadopago.cl/developers/es/docs/checkout-api/landing' />
          <TecnologiaEnlace nombre='Firebase ' icono={<SiFirebase/>} documentacionUrl='https://firebase.google.com/?hl=es-419' />.





        </div>
      </div>
    </div>
  </div>






     
    

      <div className='font-lilita mt-2 shadow-cyan-500/50'>
        <Link href='/img/CV_Gustavo_Castillo.pdf' download>
          <h2 className='text-3xl text-center font hover:text-clip text-[#010326] bg-[#BFC5D9] rounded w-60  hover:bg-[#8089A6] mx-auto p-1'>
            Mi CV
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
    
        <h3 className='md:text-center  text-left text-xs text-[#BFC5D9] pt-1 pl-1 '>
        🌟 Estoy abierto a oportunidades emocionantes y colaboraciones. ¡No dudes en contactarme en mi correo para cualquier consulta o propuesta! 📩
        <br/>Gacias por Visitar Mi app 
       
    </h3>
    <div className='pt-1'>
                <p className='md:text-center  text-left text-sm text-[#174dff] overline'>gcastillo.dev@gmail.com</p>
          </div>
        </div>
        
    
    
    
    
        
        </motion.div>
      )
    }

export default page