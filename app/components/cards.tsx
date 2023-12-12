"use client"

import React from 'react';
import proyectos from '@/app/proyectos';
import Card from './card';

const Cards: React.FC = () => {
  return (
    <section className="mx-auto max-w-screen-xl">


      <div className="mt-1">
        <p className="text-sm text-gray-500">Proyecto <span className='text-[#BFC5D9]'>{proyectos.length}</span> proyectos</p>
      </div>

      <div className=" grid gap-10  lg:grid-cols-2">
        {proyectos.map((proyecto, index) => (
          <Card key={index} proyecto={proyecto} />
        ))}
      </div>
    </section>
  );
};


export default Cards;
