"use client"
import Link from 'next/link'
import { FaHome,FaGithubSquare,FaLinkedin, FaNode } from "react-icons/fa";
import { motion } from "framer-motion"
import { SiTypescript,SiJavascript, SiRedux, SiReact, SiNextdotjs, SiNestjs, SiTailwindcss, SiGit, SiCss3, SiDiscord, SiIterm2, SiNotion, SiNpm, SiPostgresql, SiPostman, SiSlack, SiTorbrowser, SiWindows10, SiZoom, SiLinux, SiLinuxmint, SiHtml5, SiMysql, SiUbuntu, SiVite, SiTrello, SiFramer, SiFigma, SiExpress, SiMercadopago } from "react-icons/si";
import { TbBrandVscode } from 'react-icons/tb';
import { LiaCloudShowersHeavySolid } from "react-icons/lia";
import { BsStripe } from 'react-icons/bs';
import { ImGooglePlus3 } from "react-icons/im";
import CertificadoH from '../components/CertificadoH';
import PDFViewer from '../components/CertificadoH';

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
      target="_blank"
      rel="noopener noreferrer"
      className="flex flex-col items-center cursor-pointer"
    >
      <div>{icono}</div>
      <h3 className="text-xs">{nombre}</h3>
    </a>
  </motion.div>
);

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
  <Link href="/about"> 
    <h2 className='text-xl text-center font hover:text-clip text-[#010326] bg-[#BFC5D9] rounded w-16 hover:bg-[#8089A6] mx-auto'>
      About
    </h2>
  </Link>
  <Link href="/proyect"> 
    <h2 className='text-xl text-center font hover:text-clip text-[#010326] bg-[#BFC5D9] rounded w-16 hover:bg-[#8089A6] mx-auto'>
    Proyect
    </h2>
  </Link>
</div>
      <h1 className='text-center font-lilita text-4xl pl-96 text-[#BFC5D9]'>Skill</h1>

    
    </div>

<div>
    <h2> Certificado Full Stack </h2>
    <div className='w-5 h-5 border border-gray-300'>
    <PDFViewer  pdfUrl="/fs.pdf" />
    </div>
</div>
    
    

     <div className="flex items-center justify-center bg-gradient-to-r from-[#3d679e00] to-[#344459]">
    <div className="text-[#BFC5D9]">
      <div>

        <div className="flex flex-wrap bg-center space-x-4 space-y-4 text-4xl">
            
          <TecnologiaEnlace nombre="TypeScript" icono={<SiTypescript />} documentacionUrl="https://www.typescriptlang.org/" />
          <TecnologiaEnlace nombre="JavaScript" icono={<SiJavascript />} documentacionUrl="https://developer.mozilla.org/en-US/docs/Web/JavaScript" />
          <TecnologiaEnlace nombre="Redux" icono={<SiRedux />} documentacionUrl="https://redux.js.org" />
          <TecnologiaEnlace nombre="Redux Toolkit" icono={<SiRedux />} documentacionUrl="https://redux-toolkit.js.org/" />
          <TecnologiaEnlace nombre="React" icono={<SiReact />} documentacionUrl="https://react.dev" />
          <TecnologiaEnlace nombre="Next.js" icono={<SiNextdotjs />} documentacionUrl="https://nextjs.org/" />
          <TecnologiaEnlace nombre="Nest.js" icono={<SiNestjs />} documentacionUrl="https://nestjs.com/" />
          <TecnologiaEnlace nombre="Tailwind CSS" icono={<SiTailwindcss />} documentacionUrl="https://tailwindcss.com/" />
          <TecnologiaEnlace nombre="Git" icono={<SiGit />} documentacionUrl="https://git-scm.com/" />
          <TecnologiaEnlace nombre="CSS3" icono={<SiCss3 />} documentacionUrl="https://developer.mozilla.org/en-US/docs/Web/CSS" />
          <TecnologiaEnlace nombre="Discord" icono={<SiDiscord />} documentacionUrl="https://discord.com/" />
          <TecnologiaEnlace nombre="Bash Windows" icono={<SiIterm2 />} documentacionUrl="https://learn.microsoft.com/en-us/training/modules/bash-introduction" />
          <TecnologiaEnlace nombre="Bash Linux" icono={<SiIterm2 />} documentacionUrl="https://learn.microsoft.com/en-us/training/modules/bash-introduction" />
          <TecnologiaEnlace nombre="Notion" icono={<SiNotion />} documentacionUrl="https://www.notion.so/es-es" />
          <TecnologiaEnlace nombre="Npm" icono={<SiNpm />} documentacionUrl="https://www.npmjs.com/" />
          <TecnologiaEnlace nombre="Postgresql" icono={<SiPostgresql />} documentacionUrl="https://www.postgresql.org/" />
          <TecnologiaEnlace nombre="Postman" icono={<SiPostman />} documentacionUrl="https://www.postman.com/" />
          <TecnologiaEnlace nombre="Slack" icono={<SiSlack />} documentacionUrl="https://slack.com" />
           <TecnologiaEnlace nombre="Torbrowser" icono={<SiTorbrowser />} documentacionUrl="" /> 
          <TecnologiaEnlace nombre="Windows" icono={<SiWindows10 />} documentacionUrl="https://support.microsoft.com/en-us/windows/find-your-documents-in-windows-5c7c8cfe-c289-fae4-f5f8-6b3fdba418d2" />
          <TecnologiaEnlace nombre="Linux" icono={<SiLinux />} documentacionUrl="https://en.wikipedia.org/wiki/Linux" />
          <TecnologiaEnlace nombre="Linux mint" icono={<SiLinuxmint />} documentacionUrl="https://linuxmint.com/documentation.php" />         
          <TecnologiaEnlace nombre="Mysql" icono={<SiMysql />} documentacionUrl="https://www.mysql.com/" />
          <TecnologiaEnlace nombre="Htm l5" icono={<SiHtml5 />} documentacionUrl="https://developer.mozilla.org/en-US/docs/Glossary/HTML5" />    
          <TecnologiaEnlace nombre="Ubuntu " icono={<SiUbuntu  />} documentacionUrl="https://help.ubuntu.com/" />
          <TecnologiaEnlace nombre="Node js" icono={<FaNode/>} documentacionUrl="https://nodejs.org/en" />
          <TecnologiaEnlace nombre="Vite " icono={<SiVite />} documentacionUrl="https://vitejs.dev" />
          <TecnologiaEnlace nombre="Vscode  " icono={<TbBrandVscode />} documentacionUrl="https://vitejs.dev" />
          <TecnologiaEnlace nombre="Trello" icono={<SiTrello  />} documentacionUrl="https://trello.com/" />
          <TecnologiaEnlace nombre="Framer Motion " icono={<SiFramer  />} documentacionUrl="https://www.framer.com/motion/" />
          <TecnologiaEnlace nombre="Figma" icono={<SiFigma />} documentacionUrl="https://www.figma.com/" />
          <TecnologiaEnlace nombre="Express " icono={<SiExpress />} documentacionUrl="https://expressjs.com/" />
          <TecnologiaEnlace nombre="Cloudinary" icono={<LiaCloudShowersHeavySolid />} documentacionUrl="https://cloudinary.com/" />
          <TecnologiaEnlace nombre="Stripe " icono={<BsStripe />} documentacionUrl="https://stripe.com/es-us" />
          <TecnologiaEnlace nombre="Mercado pago " icono={<SiMercadopago />} documentacionUrl="https://www.mercadopago.cl/developers/es/docs/checkout-api/landing" />
          




        </div>
      </div>
    </div>
  </div>






     
    
    
    <div className='font-lilita mt-2 shadow-cyan-500/50'>
      <Link href="/skills"> 
        <h2 className='text-4xl text-center font hover:text-clip text-[#010326] bg-[#BFC5D9] rounded w-36 hover:bg-[#8089A6] mx-auto'>
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
    
        <h3 className='text-center text-xs text-[#BFC5D9] pt-1'>
        "Cada línea de código es una oportunidad para dar vida a nuevas ideas y superar desafíos. 
        <br/>¡Convierte tus conceptos en realidad y únete a la revolución digital! Estoy aquí para escuchar tus ideas y colaborar en la creación de algo extraordinario.
         <br/>¡Contáctame y construyamos juntos el futuro que imaginamos!"
    </h3>
    <div className='pt-1'>
                <p className='text-center text-xs text-[#174dff] overline'>GustavoCastilloma@gmail.com</p>
          </div>
        </div>
        
    
    
    
    
        
        </motion.div>
      )
    }

export default page