import React from 'react';
import Counter from './Counter';

const ItemsListContainer = (props) => {
    
    return (
        <div className="itemsListContainer">
           <p className="Items-p">Producto: {props.producto}</p>
           <p className="Items-p">Precio: {props.precio}</p>
           <Counter />
        </div>   
    );
}

export default ItemsListContainer