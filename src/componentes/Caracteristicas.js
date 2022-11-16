import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';

const Caracteristicas = () => {
    return ( 
        <>
            <p>
                Tiene una superficie sólida y activa, con montañas, valles, cañones, llanuras y mucho más. La Tierra es especial porque es un planeta océano, ya que el agua cubre el 70% de su superficie.
            </p>
            <p>
                Nuestra atmósferaestá compuesta, en gran parte, por nitrógeno. También tiene mucho oxígeno, que nos permite respirar.
            </p>
            <p>
                <B>
                    Es posible que, como se trata de nuestro hogar, pienses que lo sabemos todo sobre la Tierra. ¡La verdad es que no!
                </B>
            </p>
        </>
    );
}

const B = styled.b`
    font-size: 18px;
`;

export default Caracteristicas;