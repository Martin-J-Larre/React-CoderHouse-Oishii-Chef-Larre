import React from 'react';

const Item = (props) => {
    
    return (
        <>
           <h2>Titulo{props.title} </h2>
           <p>Precio{props.price} </p>
           <h2>Id{props.id} </h2>
           <img>{props.img}</img>
        </>   
    );
}

export default Item;

// No se si esta bien implementado esto acá