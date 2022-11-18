import React, {useState} from 'react';
import styled from 'styled-components';
import tierra from '../assets/Tierra.png';
import { motion, AnimatePresence } from 'framer-motion';
import { NavLink, Route, Routes } from 'react-router-dom';
import InicioTierra from './InicioTierra';
import Caracteristicas from './Caracteristicas';
import Tiempo from './Tiempo';
import SistemaSolar from './SistemaSolar';
import Error404 from './Error404';
import PlanetasSistema from './PlanetasSistema';

const Informacion = () => {

    const [mundos, cambiarMundos] = useState(true);

    return ( 
        mundos ? 
        <ContenedorInformacion className='row align-items-center'>
            <div className='col-12 col-md-6'>
                <motion.img 
                    src={tierra}
                    alt="Tierra | Todo sobre la tierra"
                    initial={{opacity:0}}
                    transition={{duration: 1.5}}
                    whileInView={{opacity: 1}}
                    whileHover={{cursor: 'grab'}}
                    whileTap={{cursor: 'grabbing'}}
                    drag
                    dragConstraints={{
                        top: -80,
                        left: -70,
                        right: 70,
                        bottom: 80,
                    }}
                />
            </div>

            <div className='col-12 col-md-6 p-md-1 mt-2 mt-md-0'>
                <h2>Tierra</h2>
                <nav>
                    <NavLink to="/">Tierra</NavLink>
                    <NavLink to="/caracteristicas">Características</NavLink>
                    <NavLink to="/tiempo">Tiempo</NavLink>
                    <NavLink to="/sistemaSolar">Sistema Solar</NavLink>
                </nav>
                <div className='mt-4 p-2' style={{height: '280px'}}>
                    <Routes>
                        <Route path='*' element={<Error404 />}/>
                        <Route path='/' element={<InicioTierra />}/>
                        <Route path='/caracteristicas' element={<Caracteristicas />}/>
                        <Route path='/tiempo' element={<Tiempo />}/>
                        <Route path='/sistemaSolar' element={<SistemaSolar cambiarMundos = {cambiarMundos}/>}/>
                    </Routes>
                </div>
            </div>
        </ContenedorInformacion>
        :
        <ContenedorSistemaSolar className='row align-items-center'>
            <PlanetasSistema />
        </ContenedorSistemaSolar>
        
    );
}

const ContenedorInformacion = styled.div`
    height: 90%;


    img{
        display: block;
        margin:auto;
        width: 400px;

        @media screen and (max-width: 575px){
            width: 200px;
        }
    }

    h2{
        font-size: 5.5rem;
        margin: 0;
        @media screen and (max-width: 575px){
            font-size: 4rem;
        }
    }

    nav{
        @media screen and (max-width: 575px){
            text-align: center;
        }
        a{
            padding: 10px 0px;
            margin: 0 7px;
            text-decoration: none;
            color: #a1a1a1;
            transition: all .3s ease;
            border-bottom: 2px solid transparent;

            @media screen and (max-width: 575px){
                font-size: 12px;
                padding: 6px 0px;
                margin: 0 6px;
            }

            &:hover{
                color: #fff;
                border-bottom: 2px solid #a1a1a1;
                border-radius: 0 0 2px 2px;
            }
            &.active{
                border-bottom: 2px solid #a1a1a1;
                border-radius: 0 0 2px 2px;
                color: #fff;
            }
        }
    }
    p{
        font-style: italic;
        @media screen and (max-width: 575px){
            font-size: 14px;
        }
    }
`;

const ContenedorSistemaSolar = styled.div`
    height: 90%;
`;

export default Informacion;