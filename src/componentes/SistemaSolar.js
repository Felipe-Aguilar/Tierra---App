import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const SistemaSolar = ({cambiarMundos}) => {
    return ( 
        <ContenedorPlanetas>
            <p>
                Nuestro planeta forma parte del sistema solar, que es el sistema estelar de cuerpos orbitando al Sol, en trayectorias elípticas concéntricas, en cada una de las cuales se halla uno de los ocho planetas (en orden de proximidad al Sol): Mercurio, Venus, la Tierra, Marte, Júpiter, Saturno, Urano y Neptuno.
            </p>
            <motion.p 
                initial={{opacity: 0}}
                whileInView={{opacity: 1}}
                animate={{x: [0,10,0]}}
                onClick={() => cambiarMundos(false)}
            >
                <span>
                    Sistema Solar <i className="bi bi-chevron-bar-right"></i>
                </span>
            </motion.p>
        </ContenedorPlanetas>
    );
}

const ContenedorPlanetas = styled.div`
    span{
        cursor: pointer;
        font-size: 20px;
        transition: all .3s ease-out;
        text-decoration: none;
        color: #3e87d5;
        i{
            color: #3e87d5;
        }
    }
`;

export default SistemaSolar;