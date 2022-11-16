import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const InicioTierra = () => {
    return ( 
        <>
            <p>
                La Tierra, es un mundo diferente a los demás. Tercer planeta más alejado del sol, la Tierra es el único lugar del universo conocido en el que se ha confirmado que existe vida.
            </p>
            <p>
                La Tierra también es única en lo que respecta a su nombre. Todos los demás planetas del sistema solar recibieron el nombre de una deidad griega o romana, pero durante al menos 1000 años, algunas culturas han descrito nuestro mundo utilizando la palabra germánica "tierra", que significa simplemente "el suelo".
            </p>
            <Numeros>
                <motion.b
                    initial={{opacity:0}}
                    transition={{delay: 2}}
                    whileInView={{opacity:1}}
                    
                >8,</motion.b>
                <motion.b
                    initial={{opacity:0}}
                    transition={{delay: 2.5}}
                    whileInView={{opacity:1}}
                >034,</motion.b>
                <motion.b
                    initial={{opacity:0}}
                    transition={{delay: 3}}
                    whileInView={{opacity:1}}
                >646,</motion.b>
                <motion.b
                    initial={{opacity:0}}
                    transition={{delay: 3.5}}
                    whileInView={{opacity:1, scale: 1.1}}
                >688</motion.b> población mundial (2022)
            </Numeros>
        </>
    );
}

const Numeros = styled.p`
    b{
        font-size: 50px;
        /* font-family: 'Bebas Neue', cursive; */
        font-style: normal;
    
        @media screen and (max-width: 575px){
            font-size: 25px;
        }
    }
`;

export default InicioTierra;