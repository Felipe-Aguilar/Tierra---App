import React from 'react';
import styled from 'styled-components';

const Header = () => {
    return (
        <Encabezado className="row justify-content-between align-items-center">
            <div className='w-auto'>
                <h1>Tierra</h1>
            </div>
            <div className='w-auto'>
                <a
                    href="https://github.com/Felipe-Aguilar" 
                    target={'_blank'}
                >
                    <i className={"bi bi-github"}></i>
                </a>

                <a 
                    href="https://www.linkedin.com/in/felipe-aguilar-333996211/" 
                    target={'_blank'}
                >
                    <i className={"bi bi-linkedin"}></i>
                </a>
            </div>
        </Encabezado>
    );
}

const Encabezado = styled.div`
    padding: 10px 30px;
    background: #080808;


    h1{
        font-family: 'Bebas Neue', cursive;
        margin: 0px;
    }
    
    i{
        transition: all .3s ease-out;
        font-size: 1.5rem;
        margin: 0 5px;

        &:hover{
            color: #3e87d5;
        }
    }
`;

export default Header;