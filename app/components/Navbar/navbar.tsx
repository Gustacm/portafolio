import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Navbar() {
  return (
    <div >
      <div className=' bg-[#020F1F]   h-24  flex justify-between '>
        <div className=' w-90 h-0 pl-20 py-10 '>
        <Link href="/" className='text-[#00FFFC] text-lg mr-4'> home </Link>
        <Link href="/about" className='text-[#00FFFC] text-lg mr-4'> About Me </Link>
        <Link href="/about" className='text-[#00FFFC] text-lg mr-4'> Training</Link>
        <Link href="/about" className='text-[#00FFFC] text-lg mr-4'> Projects</Link>
        </div>
        <Image src="/img/logoAnimation.gif" alt="Descripción de la imagen" width={120} height={200}  className='ml-22'/>


        <Link href="/about" className='text-[#00FFFC] py-10 text-lg px-14'> Contact Me </Link>

      </div>



    </div>
  )
}

export default Navbar