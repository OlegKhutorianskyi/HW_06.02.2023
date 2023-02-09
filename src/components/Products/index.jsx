import React from 'react'
import s from "./style.module.css";

export default function Products({id, title, description, price, sale, image, deleteProduct, addToBasket}) {
  return (
    <div className={s.card}>
        <img src={image} alt={title}/>
        <h3>{title}</h3>
        <p className={s.oldPrice}><span className={s.newPrice}>{price}</span>{sale}</p>
        <p>{description}</p>
        <button onClick={() => deleteProduct(id)}>Удалить</button>
        <button onClick={() => addToBasket(id)}>Добавить</button>
    </div>
  )
}
