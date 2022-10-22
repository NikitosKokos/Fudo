import Image from 'next/image'
import React from 'react'
import { urlFor } from '../lib/client'
import s from '../styles/Menu.module.scss'

const Menu = ({pizzas}) => {
  return (
    <div className={s.menu}>
      <div className={`container ${s.menu__container}`}>
         <div className={s.menu__heading}>
            <span>OUR MENU</span>
            <span>Menu That Always<br/>
                  Make you Fall In Love
            </span>
         </div>
         <div className={s.menu__grid}>
            {
               pizzas.map((pizza,id) => {
                  const src = urlFor(pizza.image).url();
                  return(
                     <div className={s.menu__pizza} key={id}>
                        <div className={s.menu__img}>
                           <Image loader={()=> src} src={src} alt='' objectFit='cover' layout='fill' />
                        </div>
                        <div className={s.menu__name}>{pizza.name}</div>
                        <div className={s.menu__price}><span>$</span> {pizza.price[1]}</div>
                     </div>
                  )
               })
            }            
         </div>

      </div>
    </div>
  )
}

export default Menu