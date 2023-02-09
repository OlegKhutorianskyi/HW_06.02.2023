import React from 'react'
import { useEffect, useState } from "react";
import Products from '../Products';
import Summ from '../Summ';
import s from "./style.module.css";

export default function ProductContainer() {

    
    const [products, setProducts] = useState([]);
    const [basket, setBasket] = useState([]);

    useEffect(() => {
        (async () => {
        const resp  =await fetch('https://dummyjson.com/products');
        const data = await resp.json();
        const result = data.products.map(({id, title, price, description, images}) => 
        
        ({id, title, price, description, image: images[0], sale: price - Math.round(price / 100 * 15)}));
        
        setProducts(result) 
        
    }) ()
     }, []);

     const deleteProduct = (delid) => {setProducts( products.filter(product => product.id !== delid), setBasket([...basket]))}


     

     const addToBasket = (addId) => {
        const target = products.find(({id}) => id === addId)
        const saleResult = target.price / 100 * 10;
        setBasket([...basket, {...target, count: 1, sale: saleResult}]);
    };  

   

  return (
    <div className={s.gTitle}>
      <h1>Товары</h1>
        <div className={s.card}>
          {
              products.map(product => <Products key={product.id} {...product} 
                  deleteProduct={deleteProduct} 
                  addToBasket={addToBasket}
                  
                  />)
          }
        </div>
       <Summ basket={basket}/>
    </div>
  )
}
