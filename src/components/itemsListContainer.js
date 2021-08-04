import React from 'react';

const ItemsListContainer = (props) => {
    //console.log(props);
    return (
        <div className="itemsListContainer">
           <p className="Items-p">Producto: {props.producto}</p>
           <p className="Items-p">Precio: {props.precio}</p>
        </div>   
    );
}

export default ItemsListContainer