"use client"
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Carousel from './Carousel';
import { VscChromeClose } from 'react-icons/vsc';

interface ModalProps {
  closeModal: () => void;
  images?: string[];
  projectName?: string;
  fechas?: string;
  descripcion?: string;
  experienciaAcademica?: string;
  logrosDestacados?: string;
  experienciaUsuario?: string[];
  tecnologias?: {
    lenguaje?: string[] | undefined;
    frontend?: string[] | undefined;
    backend?: string[] | undefined;
    baseDeDatos?: string[] | undefined;
  };
}

const Modal: React.FC<ModalProps> = ({
  closeModal,
  images,
  projectName,
  fechas,
  descripcion,
  experienciaAcademica,
  logrosDestacados,
  experienciaUsuario,
  tecnologias,
}) => {
  return (
    <AnimatePresence>
      {true && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-20 p-2  md:p-2  flex justify-end items-start bg-opacity-95 backdrop-blur-md overflow-y-auto"
        >
          <button onClick={closeModal} className="text-4xl">
            <VscChromeClose />
          </button>
          <motion.div
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -50, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="bg-white p-1  md:p-5  max-w-screen-sm mx-auto rounded-lg mt-10 flex flex-col items-start overflow-hidden"
            style={{ maxHeight: '90vh' }}
          >
            <div className="max-w-full text-[#011140]">
              {projectName && (
                <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-2xl xl:text-3xl text-center font-semibold">
                  {projectName}
                </h2>
              )}
              <p className="text-sm sm:text-base lg:text-lg xl:text-sm font-semibold">Descipcion :</p>
              {descripcion && <p className="text-sm sm:text-base lg:text-lg xl:text-sm overflow-hidden">{descripcion}</p>}
              {experienciaAcademica && (
                <p className="text-sm sm:text-base lg:text-lg xl:text-sm overflow-hidden">{experienciaAcademica}</p>
              )}
              {logrosDestacados && (
                <p className="text-sm sm:text-base lg:text-lg xl:text-sm overflow-hidden">{logrosDestacados}</p>
              )}
              {experienciaUsuario && (
                <div className="mt-2">
                  <p className="text-sm sm:text-base lg:text-lg xl:text-sm font-semibold">Experiencia Usuario:</p>
                  <ul className="list-disc pl-4">
                    {experienciaUsuario.map((experiencia, index) => (
                      <li key={index} className="text-sm sm:text-base lg:text-lg xl:text-sm overflow-hidden">
                        {experiencia}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              {tecnologias && (
                <div className="mt-2">
                  <p className="text-sm sm:text-base lg:text-lg xl:text-sm font-semibold">Tecnologías:</p>
                  <div className="flex items-center text-[#3444598d]">
                    {Object.entries(tecnologias).map(([tipo, tecnologia], index) => (
                      <div key={index} className="text-sm sm:text-base lg:text-lg xl:text-sm">
                        <ul className="list-outside flex text-2xl  md:text-3xl  ">
                          {(tecnologia as string[])?.map((item: string, index: number) => (
                            <li className='text-5xl  md:text-6xl  hover:text-[#011140]' key={index}>{item}</li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Modal;