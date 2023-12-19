import { FaReact, FaCss3, FaNodeJs, FaNode } from "react-icons/fa";
import { TbBrandRedux, TbBrandNextjs } from "react-icons/tb";
import { IoLogoJavascript } from "react-icons/io5";
import { SiMysql, SiNestjs,SiTypescript ,SiJavascript, SiCss3, SiExpress, SiRedux, SiMercadopago, SiFigma, SiFirebase   } from "react-icons/si";
import { BiLogoPostgresql, BiLogoTailwindCss,BiLogoTypescript } from "react-icons/bi";
import { LiaCloudShowersHeavySolid } from "react-icons/lia";
import { BsStripe } from "react-icons/bs";

interface Proyecto {
  id: string;
  nombre: string;
  fechas: string;
  descripcion: string;
  experienciaAcademica:string;
  logrosDestacados?: any;
  experienciaUsuario?: string[];
  tecnologias?: {
    lenguaje?: any ; 
    frontend?: any ;
    backend?: any;
    baseDeDatos?: any;
  };
  imagen?: string[];
}

const proyectos: Proyecto[] = [
  {
    id: "1",
    nombre: "Proyecto Nest",
    fechas: "oct. 2023 - nov. 2023",
    experienciaAcademica: "Henry Bootcamp",
    descripcion:
      "Alquiler y Venta de Inmuebles, un E-commerce para simplificar el proceso de alquiler, compra y venta de propiedades. Este proyecto ofrece una experiencia completa, segura y eficiente para usuarios en busca de alquileres, compras o ventas de propiedades",
    logrosDestacados: [
      "Backend y Base de Datos: Se diseñó la base de datos y endpoints del backend con Nest.js.",
      "Integración Backend y Frontend: Conexiones efectivas entre el servidor y el cliente con Next.js y React.js.",
      "Funcionalidades Excluyentes: Deploy en Render, autenticación con Firebase, pasarelas de pago con Coinbase y Stripe.",
      "Optimización y Experiencia del Usuario: Sistema de filtrado eficiente y tiempos de carga rápidos.",
      "Funcionalidades Adicionales: Smart Contract en Solidity para alquiler, ChatBot de soporte con Dialogflow CX, seguridad con JWT.",
    ],
    experienciaUsuario: [
      "Búsqueda eficiente con múltiples opciones de filtrado.",
      "Compra y alquiler de inmuebles de manera segura y eficiente.",
      "Transacciones con criptodivisas, tarjetas de crédito y débito.",
      "Selección flexible de fechas de disponibilidad.",
      "Registro y acceso seguro del usuario.",
      "Publicación sencilla y segura de inmuebles.",
    ],
    tecnologias: {
      lenguaje: [<div key="ts"  className="text-8xl hover:text-blue-600 transition duration-300 ease-in-out opacity-70 hover:opacity-80">
      <SiTypescript key="ns" />
    </div>],
      frontend: [
        <a  href="https://nextjs.org/" className="flex flex-col items-center text-center cursor-pointer"  key="nextjs" > <TbBrandNextjs key="nextjs"   /> <h3 className="text-xs text-center">Next.js</h3> </a>, 
        <a  href="https://redux-toolkit.js.org/" className="flex flex-col items-center text-center cursor-pointer"  key="nextjs" > <TbBrandRedux key="redux"   /> <h3 className="text-xs text-center">Redux Toolkit</h3> </a>,
        <a href="https://tailwindcss.com/"  className="flex flex-col items-center text-center cursor-pointer"  key="nextjs" > <BiLogoTailwindCss key="twcss"   /> <h3 className="text-xs text-center">Tailwind</h3> </a>,
        <a  href="https://cloudinary.com/" className="flex flex-col items-center text-center cursor-pointer"  key="nextjs" > <LiaCloudShowersHeavySolid key="cloudinary"   /> <h3 className="text-xs text-center">Cloudinary</h3> </a>, 
        <a  href="https://www.mercadopago.cl//" className="flex flex-col items-center text-center cursor-pointer"  key="nextjs" > <SiMercadopago key="mp"   /> <h3 className="text-xs text-center">Mercado pago</h3> </a>, 
        <a  href="https://www.figma.com/" className="flex flex-col items-center text-center cursor-pointer"  key="nextjs" > <SiFigma key="fig"   /> <h3 className="text-xs text-center">Figma</h3> </a>, 
 
      ],
      backend: [
        <a  href="https://nestjs.com/" className="flex flex-col items-center text-center cursor-pointer"  key="nextjs" > <SiNestjs key="ns"   /> <h3 className="text-xs text-center">Nest.js</h3> </a>, 
<a  href="https://nodejs.org/en" className="flex flex-col items-center text-center cursor-pointer"  key="nextjs" > <FaNode key="ads"   /> <h3 className="text-xs text-center">NodeJs</h3> </a>,
<a  href="https://www.coinbase.com/es-LA/" className="flex flex-col items-center text-center cursor-pointer"  key="nextjs" >  <h3 className="text-xs text-center">Coinbase</h3> </a>,
<a  href="https://stripe.com/es-us" className="flex flex-col items-center text-center cursor-pointer"  key="nextjs" > <BsStripe key="nextjs"   /> <h3 className="text-xs text-center">Stripe</h3> </a>,
      ],
      baseDeDatos:[
        <a  href="https://firebase.google.com/?hl=es-419" className="flex flex-col items-center text-center cursor-pointer"  key="nextjs" > <SiFirebase key="nextjs"   /> <h3 className="text-xs text-center">firebase</h3> </a>,
        <a  href="https://www.postgresql.org/" className="flex flex-col items-center text-center cursor-pointer"  key="nextjs" > <BiLogoPostgresql key="nextjs"   /> <h3 className="text-xs text-center">Postgresql</h3> </a>
      ],
    },
    imagen: [
      "/img/nestp/1.jpg", 
      "/img/nestp/2.jpg", 
      "/img/nestp/3.jpg", 
      "/img/nestp/4.jpg", 
    ],
  },
  {
    id: "2",
    nombre: "Proyect Pokemon",
    fechas: "sep. 2023 - oct. 2023",
    experienciaAcademica: "Henry Bootcamp",
    descripcion:
      "La aplicación tenía como objetivo gestionar el flujo de información desde la base de datos y la API hasta un sólido servidor, brindando una experiencia agradable al usuario.",
    logrosDestacados: [
     
          "Diseñé y desarrollé la estructura de la base de datos para almacenar información de Pokémon.",
          "Creé endpoints en la API para consultar, crear, actualizar y eliminar registros de Pokémon.",
          "Configuré un servidor backend sólido con Node.js y Express.js para manejar solicitudes HTTP y lógica de negocio.",
          "Implementé middleware para autenticación y autorización de usuarios.",
          "Integración de la información Base de Datos y la API con el Cliente.",
          "Establecí conexiones entre el servidor backend y el cliente frontend para la comunicación de datos.",
          "Implementé solicitudes HTTP en el cliente para mostrar información actualizada de Pokémon.",
          "Desarrollé el cliente frontend con React.js para una interfaz de usuario atractiva y receptiva.",
          "Creé componentes reutilizables para mostrar detalles y listas de Pokémon.",
    ],
    experienciaUsuario: [
      "Optimicé la experiencia del usuario con tiempos de carga rápidos y navegación fluida.",
      "Agregué funcionalidades interactivas como búsquedas y filtros para facilitar la exploración de Pokémon.",
    ],
    tecnologias: {
      lenguaje: [<div key="typescript" className="text-8xl hover:text-yellow-500 transition duration-300 ease-in-out opacity-70 hover:opacity-80">
      <SiJavascript key="java"  />
    </div>],
      frontend: [  
      <a  href="https://react.dev" className="flex flex-col items-center text-center cursor-pointer"  key="nextjs" > <FaReact key="nextjs"   /> <h3 className="text-xs text-center">React</h3> </a>,
      <a href="https://redux.js.org"  className="flex flex-col items-center text-center cursor-pointer"  key="nextjs" > <TbBrandRedux key="nextjs"   /> <h3 className="text-xs text-center">Redux</h3> </a>,
      <a href="https://tailwindcss.com/"  className="flex flex-col items-center text-center cursor-pointer"  key="nextjs" > <BiLogoTailwindCss key="twcss"   /> <h3 className="text-xs text-center">Tailwind</h3> </a>,
      <a href="https://developer.mozilla.org/en-US/docs/Web/CSS"  className="flex flex-col items-center text-center cursor-pointer"  key="nextjs" > <SiCss3 key="css"   /> <h3 className="text-xs text-center">CSS3</h3> </a>,],
      backend: [
        <a  href="https://nodejs.org/en" className="flex flex-col items-center text-center cursor-pointer"  key="nextjs" > <FaNode key="nextjs"   /> <h3 className="text-xs text-center">NodeJs</h3> </a>,
        <a  href="https://expressjs.com/" className="flex flex-col items-center text-center cursor-pointer"  key="nextjs" > <SiExpress key="nextjs"   /> <h3 className="text-xs text-center">Express</h3> </a>,
        ],
      baseDeDatos: [
        <a  href="https://www.mysql.com/" className="flex flex-col items-center text-center cursor-pointer"  key="nextjs" > <SiMysql key="nextjs"   /> <h3 className="text-xs text-center">Mysql</h3> </a>,
        <a  href="https://www.postgresql.org/" className="flex flex-col items-center text-center cursor-pointer"  key="nextjs" > <BiLogoPostgresql key="nextjs"   /> <h3 className="text-xs text-center">Postgresql</h3> </a>,       
  ],
    },
    imagen: [
      "/img/pokemonp/03.jpg", 
      "/img/pokemonp/1.jpg", 
      "/img/pokemonp/02.jpg", 
      "/img/pokemonp/04.jpg", 

    ],
  },
];

export default proyectos;

