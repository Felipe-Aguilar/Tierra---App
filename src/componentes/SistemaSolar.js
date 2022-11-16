import React from 'react';
import Sistema from '../assets/SistemaSolar.png';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const SistemaSolar = () => {
    return ( 
        <ContenedorPlanetas>
            <p>
                Nuestro planeta forma parte del sistema solar, que es el sistema estelar de cuerpos orbitando al Sol, en trayectorias elípticas concéntricas, en cada una de las cuales se halla uno de los ocho planetas (en orden de proximidad al Sol): Mercurio, Venus, la Tierra, Marte, Júpiter, Saturno, Urano y Neptuno.
            </p>
            {/* <motion.img 
                src={Sistema} 
                alt="Sol | Sistema Solar" 

                initial={{opacity:0, scale: 0, width: '150px'}}
                transition={{delay: 0, duration: 10}}
                whileInView={{opacity:1, scale: [1,1.2,1], rotate: 360}}
            /> */}
        </ContenedorPlanetas>
    );
}

const ContenedorPlanetas = styled.div`
    /* img{
        width: 100px;
    } */
`;

export default SistemaSolar;