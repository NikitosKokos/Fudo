import React from 'react'
import s from '../styles/Footer.module.scss'
import {UilGithub,UilArrow,UilLinkedin} from '@iconscout/react-unicons'
import Image from 'next/image'
import Logo from '../assets/Logo.png'

const Footer = () => {
   return (
      <footer className={s.footer}>
         <div className={`${s.footer__content} ${s.container}`}>
            <div className={s.footer__copy}>
               all rights reserved
            </div>
            <div className={s.footer__social}>
               <UilGithub size={45}/>
               <UilArrow size={100}/>
               <UilLinkedin size={45}/>
            </div>
            <div className={s.footer__logo}>
               <Image src={Logo} alt='' width={50} height={50}/>
               <span>Fudo</span>
            </div>
         </div>
      </footer>
   )
}

export default Footer