import React from 'react'
import s from '../styles/Header.module.scss'
import Image from 'next/image'
import Logo from '../assets/Logo.png'
import {UilShoppingBag} from '@iconscout/react-unicons'

const Header = () => {
   return (
      <header className={s.header}>
         <div className={s.header__logo}>
            <Image src={Logo} alt='' width={50} height={50}/>
            <span>Fudo</span>
         </div>
         <nav className={s.header__menu}>
            <ul className={s.header__list}>
               <li>Home</li>
               <li>Menu</li> 
               <li>Contact</li>
            </ul>
         </nav>
         <div className={s.header__info}>
            <div className={s.header__cart}>
               <UilShoppingBag size={35} color='#2E2E2E'/>
               <div className={s.header__badge}>1</div>
            </div>
         </div>
      </header>
   )
}

export default Header