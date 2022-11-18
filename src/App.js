import React from 'react';
import styled from 'styled-components';
import FondoEstrellas from './assets/estrellas2.jpg';
import Header from './componentes/Header';
import Informacion from './componentes/Informacion';
import { BrowserRouter } from 'react-router-dom';

const App = () => {
  return (
    <BrowserRouter>
      <Contenedor100 className='vh-100'>
        <Estrellas className='container-fluid h-100 pb-2 pb-md-0'>
          <Header />
          <Informacion />
        </Estrellas>
      </Contenedor100>
    </BrowserRouter>
  );
}

const Estrellas = styled.div`
  background-image: url(${FondoEstrellas});
  background-position: center;
  background-size: cover;
`;

const Contenedor100 = styled.div`
  @media screen and (max-width: 575px){
        height: auto!important;
    }
`;

export default App;