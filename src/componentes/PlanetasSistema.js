import React from 'react';
import styled from 'styled-components';
import SolSistema from '../assets/SolSistema.png';
import MercurioSistema from '../assets/MercurioSistema.png';
import VenusSistema from '../assets/VenusSistema.png';
import TierraSistema from '../assets/TierraSistema.png';
import MarteSistema from '../assets/MarteSistema.png';
import JupiterSistema from '../assets/JupiterSistema.png';
import SaturnoSistema from '../assets/SaturnoSistema.png';
import UranoSistema from '../assets/UranoSistema.png';
import NeptunoSistema from '../assets/NeptunoSistema.png';
import { motion } from 'framer-motion';

const PlanetasSistema = () => {
    return ( 
        <ContenedorPlanetas className='col-12 p-md-3 text-center'>
            <motion.img
                src={SolSistema}
                alt="Sistema Solar"
                className='sol'

                initial={{opacity:0}}
                whileInView={{opacity: 1}}
                transition={{delay:1.1}}
                drag
                dragConstraints={{
                    right: 910,
                    left: -5,
                    top: -100,
                    bottom: 200
                }}
            />
            <motion.img
                src={MercurioSistema}
                alt="Sistema Solar"
                className='mercurio'

                initial={{opacity:0}}
                whileInView={{opacity: 1}}
                transition={{delay:1.3}}
                drag
                dragConstraints={{
                    right: 910,
                    left: -300,
                    top: -200,
                    bottom: 300
                }}
            />
            <motion.img
                src={VenusSistema}
                alt="Sistema Solar"
                className='venus'

                initial={{opacity:0}}
                whileInView={{opacity: 1}}
                transition={{delay:1.6}}
                drag
                dragConstraints={{
                    right: 800,
                    left: -320,
                    top: -200,
                    bottom: 300
                }}
            />
            <motion.img
                src={TierraSistema}
                alt="Sistema Solar"
                className='tierra'

                initial={{opacity:0}}
                whileInView={{opacity: 1}}
                transition={{delay:1.9}}
                drag
                dragConstraints={{
                    right: 700,
                    left: -400,
                    top: -200,
                    bottom: 290
                }}
            />
            <motion.img
                src={MarteSistema}
                alt="Sistema Solar"
                className='marte'

                initial={{opacity:0}}
                whileInView={{opacity: 1}}
                transition={{delay:2.2}}
                drag
                dragConstraints={{
                    right: 680,
                    left: -550,
                    top: -200,
                    bottom: 290
                }}
            />
            <motion.img
                src={JupiterSistema}
                alt="Sistema Solar"
                className='jupiter'

                initial={{opacity:0}}
                whileInView={{opacity: 1}}
                transition={{delay:2.5}}
                drag
                dragConstraints={{
                    right: 450,
                    left: -600,
                    top: -150,
                    bottom: 250
                }}
            />
            <motion.img
                src={SaturnoSistema}
                alt="Sistema Solar"
                className='saturno'

                initial={{opacity:0}}
                whileInView={{opacity: 1}}
                transition={{delay:2.8}}
                drag
                dragConstraints={{
                    right: 270,
                    left: -800,
                    top: -200,
                    bottom: 290
                }}
            />
            <motion.img
                src={UranoSistema}
                alt="Sistema Solar"
                className='urano'

                initial={{opacity:0}}
                whileInView={{opacity: 1}}
                transition={{delay:3.1}}
                drag
                dragConstraints={{
                    right: 150,
                    left: -950,
                    top: -200,
                    bottom: 250
                }}
            />
            <motion.img
                src={NeptunoSistema}
                alt="Sistema Solar"
                className='neptuno'

                initial={{opacity:0}}
                whileInView={{opacity: 1}}
                transition={{delay:3.4}}

                drag
                dragConstraints={{
                    right: 20,
                    left: -1090,
                    top: -200,
                    bottom: 290
                }}
            />
        </ContenedorPlanetas>
    );
}

const ContenedorPlanetas = styled.div`
    height: 80%;
    img{
        @media screen and (max-width: 575px){
            display: block;
            margin: auto;
        }
    }
    .sol{
        width: 300px;
    }
    .mercurio{
        width: 20px;
    }
    .venus{
        width: 100px;
    }
    .tierra{
        width: 110px;
    }
    .marte{
        width: 50px;
    }
    .jupiter{
        width: 200px;
    }
    .saturno{
        width: 180px;
    }
    .urano{
        width: 130px;
    }
    .neptuno{
        width: 138px;
    }
`;


export default PlanetasSistema;