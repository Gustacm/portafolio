import { FaReact, FaCss3, FaNodeJs } from "react-icons/fa";
import { TbBrandRedux, TbBrandNextjs } from "react-icons/tb";
import { IoLogoJavascript } from "react-icons/io5";
import { SiMysql, SiNestjs,SiTypescript ,SiJavascript   } from "react-icons/si";
import { BiLogoPostgresql, BiLogoTailwindCss,BiLogoTypescript } from "react-icons/bi";

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
        <TbBrandNextjs key="nes" />,
        <TbBrandRedux key="redux" />,
        <BiLogoTailwindCss key="css" />,
        <h2 key="clou" className=" text-sm">Cloudinary</h2>,
      ],
      backend: [
        <SiNestjs key="njs"  />,
        <FaNodeJs key="node" />,
        <h2 key="c" className=" text-sm">Coinbase</h2>,
        <h2 key="clu"className=" text-sm">Stripe</h2>,
        <h2 key="ou"className=" text-sm">Solidity</h2>,
      ],
      baseDeDatos: [<h2 key="firebase"  className=" text-sm">Firebase</h2>, <BiLogoPostgresql key="ps" />],
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
      frontend: [ <FaReact key="nextjs"  />, <TbBrandRedux key="redux" />, <BiLogoTailwindCss key="twcss"   />,<FaCss3 key="css"  />],
      backend: [<FaNodeJs key="node" />, <h1  key="react" className="text-sm">Express.js</h1>],
      baseDeDatos: [<SiMysql key="nmys"  />, <BiLogoPostgresql key="neps"  />],
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

