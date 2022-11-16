import React from 'react';
import { motion } from 'framer-motion';

const Error404 = () => {
    return ( 
        <>
            <motion.h3 
                drag 
                whileHover={{cursor: 'grab'}} 
                whileTap={{cursor: 'grabbing'}}
            >Error 404</motion.h3>
            <motion.p 
                drag 
                whileHover={{cursor: 'grab'}} 
                whileTap={{cursor: 'grabbing'}}
            >
                Lo sentimos, la información que intentas buscar no existe.
            </motion.p>
        </>
    );
}

export default Error404;