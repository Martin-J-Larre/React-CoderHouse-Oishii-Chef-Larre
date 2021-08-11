import React from 'react';
import ItemCount from './ItemCount';
import ItemList from './ItemList';

const ItemsListContainer = (props) => {
    
    return (
        <div className="itemsListContainer">
           <p className="Items-p">Producto: {props.producto}</p>
           <p className="Items-p">Precio: {props.precio}</p>
           <ItemCount valorInicial={0} stock={10}/>
           <ItemList />
        </div>   
    );
}

export default ItemsListContainer