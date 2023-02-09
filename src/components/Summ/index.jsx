import React from 'react'
import s from "./style.module.css";

export default function Summ({basket}) {

    const summPrice = basket.reduce((ac, {count, price}) => ac + count * price, 0);
    const summPriceWithSale = basket.reduce((ac, {count, sale}) => ac + count * sale, 0);
    const summCount = basket.reduce((ac, {count}) => ac + count, 0);

  return (
    <div className={s.summ}>
        <span>Всего товаров:  {summCount}  </span> <span>Общая сумма (без скидки):  {summPrice} </span> <span>Общая сумма (со скидкой): {summPriceWithSale} </span>
    </div> 
  )
}
