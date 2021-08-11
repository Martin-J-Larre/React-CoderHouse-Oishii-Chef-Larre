// import Item from "./item";
// No me carga la ruta y me sale error

const { useEffect, useState } = require("react")

export default function ItemList(){

    const [products, setProducts] = useState([])

    useEffect(() => {
        new Promise((resolve, reject) => {

            const data = [
                {
                    "id":1,
                    "price": 50,
                    "title": "Pita yogurt con hierbas",
                    "pictureUrl": "img/meal-1.jpg"
                  }
                ]
                setTimeout(() => resolve(data),2000);
        })
        .then((dataResolve) => {
            console.log('data resolve', dataResolve)
            setProducts(dataResolve);
        })
        .catch((error)=>{
            console.log('error', error);
        });
}, [])

return(
    <div>
        {products.map((itemProducto) => ( 
        // Primer Intento
        // <Item> {itemProducto.id} </Item> 

        //1ro :No entendí como pasar lo desde props desde Item.js así que me fije en la    clase y más que otro tutorial y google

        //2do :Me da error al querer importar la ruta ---> import Item from "./item";

        // Abajo lo pase directamente para ver si funcionaba//No me carga la imagen problema de ruta again.
        <>
        <p>{itemProducto.id}</p>
        <p>{itemProducto.price}</p>
        <p>{itemProducto.title}</p>
        <p>{itemProducto.pictureUrl}</p>

        {/* Intento 2 con error en la ruta y no se si es el uso correcto de los props en una sola etqueta del continente*/}

        {/* <Item title={itemProducto.title} price={itemProducto.price} id={itemProducto.id} img={itemProducto.pictureUrl} />  */}

        {/*Intento 3 una etiqueta < Item para cada prop */}

        {/* <Item title={itemProducto.title} />
        <Item price={itemProducto.price} />
        <Item id={itemProducto.id} />
        <Item img={itemProducto.pictureUrl} /> */}
        </>
        ))}
      
    </div>
  );
}