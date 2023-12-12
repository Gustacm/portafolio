'use client'
import React, { useState } from 'react';
import Modal from './Modal';
import Carousel from './Carousel';

interface CardProps {
  proyecto: {
    id: string;
    nombre: string;
    fechas: string;
    descripcion: string;
    experienciaAcademica: string;
    logrosDestacados?: any;
    experienciaUsuario?: string[];
    tecnologias?: {
      lenguaje?: any;
      frontend?: any;
      backend?: any;
      baseDeDatos?: any;
    };
    imagen?: string[];
  };
}


const Card: React.FC<CardProps> = ({ proyecto }) => {
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div >
      <div className="mt-1 relative">
        {proyecto.imagen && proyecto.imagen.length > 0 && (
          <Carousel images={proyecto.imagen} />
        )}
        {proyecto.tecnologias && proyecto.tecnologias.lenguaje && (
          <div className="absolute bottom-0 right-auto">
            {proyecto.tecnologias.lenguaje}
          </div>
        )}
      </div>

      <a
        href={`#${proyecto.id}`}
        className="block rounded-lg p-2 shadow-sm shadow-indigo-100 mb-2 relative"
        onClick={openModal}
      >
        <div className="mt-1">
          <h2 className="text-xl text-center font-semibold">{proyecto.nombre}</h2>
          <p className="text-sm text-[#BFC5D9]">{proyecto.fechas}</p>
          <p className="mt-1 text-xs text-[#BFC5D9]">{proyecto.descripcion}</p>
        </div>
      </a>

      {modalOpen && (
        <Modal
          closeModal={closeModal}
          projectName={proyecto.nombre}
          fechas={proyecto.fechas}
          descripcion={proyecto.descripcion}
          experienciaAcademica={proyecto.experienciaAcademica}
          logrosDestacados={proyecto.logrosDestacados}
          experienciaUsuario={proyecto.experienciaUsuario}
          tecnologias={proyecto.tecnologias}
        />
      )}

      {proyecto.tecnologias && (
        <div className="mt-2">
          <p className="text-sm text-center font-semibold">Tecnologías:</p>
          {Array.isArray(proyecto.tecnologias) ? (
            <ul className="list-disc pl-2 text-xs shadow-inner">
              {proyecto.tecnologias.map((tecnologia, index) => (
                <li key={index}>{tecnologia}</li>
              ))}
            </ul>
          ) : (
            <>
              <div className="flex mt-1">
                <div className="text-sm font-semibold">Frontend:</div>
                <ul className="list-none pl-2 text-xl flex items-center">
                  {proyecto.tecnologias.frontend?.map((tecnologia: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | React.PromiseLikeOfReactNode | null | undefined, index: React.Key | null | undefined) => (
                    <li key={index} className="mr-2">
                      {tecnologia}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex mt-1">
                <div className="text-sm font-semibold">Backend:</div>
                <ul className="list-none pl-2 text-xl flex items-center">
                  {proyecto.tecnologias.backend?.map((tecnologia: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | React.PromiseLikeOfReactNode | null | undefined, index: React.Key | null | undefined) => (
                    <li key={index} className="mr-2">
                      {tecnologia}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex mt-1">
                <div className="text-sm font-semibold">Base de Datos:</div>
                <ul className="list-none pl-2 text-xl flex items-center">
                  {proyecto.tecnologias.baseDeDatos?.map((tecnologia: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | React.PromiseLikeOfReactNode | null | undefined, index: React.Key | null | undefined) => (
                    <li key={index} className="mr-2">
                      {tecnologia}
                    </li>
                  ))}
                </ul>
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default Card;
