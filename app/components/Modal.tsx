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
              className="fixed inset-0 z-50 px-20 flex justify-end items-start bg-opacity-95 backdrop-blur-md overflow-y-auto"
            >
              <button onClick={closeModal} className="  text-4xl">
                <VscChromeClose />
              </button>
              <motion.div
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -50, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="bg-white p-6 max-w-7xl rounded-lg mt-10 flex flex-col items-start"
                style={{ maxHeight: '90vh' }} 
              >
                <div className="max-w-full  text-[#011140]">
                  {projectName && <h2 className="text-3xl text-center font-semibold">{projectName}</h2>}
                  {fechas && <p className="text-sm text-[#011140]">{fechas}</p>}
                  {descripcion && <p className="text-sm">{descripcion}</p>}
                  {experienciaAcademica && <p className="text-sm">{experienciaAcademica}</p>}
                  {logrosDestacados && <p className="text-sm">{logrosDestacados}</p>}
                  {experienciaUsuario && (
                    <div className="mt-2">
                      <p className="text-sm font-semibold">Experiencia Usuario:</p>
                      <ul className="list-disc pl-4">
                        {experienciaUsuario.map((experiencia, index) => (
                          <li key={index} className="text-sm">
                            {experiencia}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  {tecnologias && (
                    <div className="mt-2">
                      <p className="text-sm font-semibold">Tecnologías:</p>
                      <div className="flex items-center text-[#3444598d]">
                        {Object.entries(tecnologias).map(([tipo, tecnologia], index) => (
                          <div key={index} className="text-sm   ">
                            {/* <p className='text-ms'>{tipo}:</p> */}
                            <ul className="list-outside flex   text-6xl">
                              {(tecnologia as string[])?.map((item: string, index: number) => (
                                <li className='text-8xl hover:text-[#011140]' key={index}>{item}</li>
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