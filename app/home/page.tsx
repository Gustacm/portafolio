import Image from 'next/image';
import Link from 'next/link';
import React from 'react';


function home() {

  
  return (
    <div className="min-h-screen  bg-[#020F1F] ease-in-out ">

      <div className=' bg-[#00000011]  h-32 flex justify-between'>
        <div className=' w-96 h-28 pl-20 py-20 '>
        {/* <Link href="/about" className='text-[#00FFFC] text-lg mr-4'> About Me </Link> */}
        <Link href="/about" className='text-[#00FFFC] text-lg mr-4'> Training</Link>
        <Link href="/about" className='text-[#00FFFC] text-lg mr-4'> Projects</Link>
        </div>

        <Link href="/about" className='text-[#00FFFC] py-20 text-lg px-14'> Contact Me </Link>


      </div>

<div className='h-20'>
<h1 className='text-white text-center font-Anton  text-4xl '>Bienvenido a mi Portafolio </h1>
</div>

<div className=' flex justify-between'>

<Image src="/img/marca2.gif" alt="Descripción de la imagen" width={400} height={200}  className='ml-48 h-90'/>

<iframe width="860" height="415" src="https://www.youtube.com/embed/AuegdLOxJp8?si=eexMhvl_Xoah6SyW" title="YouTube video player" frameBorder="0"
 allow="accelerometer; autoplay; clipboard-write; encrypted-media; 
 gyroscope; picture-in-picture; web-share" allowFullScreen
 className='px-2 mr-24 '
 ></iframe>

</div>

        <div  className='mt-16'>
          <h3 className='text-[#ffffff] text-center line-clamp-3 '>¡Hola! Soy Gustavo  castillo , Full stack Developer  y 
            este es mi espacio digital donde convergen mi pasión,
             habilidades y trayectoria profesional.   </h3>
        </div >

        
        <div className='font-Anton mt-8 shadow-cyan-500/50 animate-bounce '>
        <Link href="/about" > 
          <h2 className='text-white text-4xl text-center front hover:text-clip shadow-lg '>
          About Me

          </h2>

        </Link>
        </div>
        



    </div>
  );
}

export default home
