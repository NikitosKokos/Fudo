import Image from 'next/image'
import React from 'react'
import s from '../styles/Hero.module.scss'
import Cherry from '../assets/Cherry.png'
import HeroImg from '../assets/HeroImage.png'
import {UilPhone} from '@iconscout/react-unicons'
import Pizza1 from '../assets/p1.jpg'

const Hero = () => {
  return (
    <div className={s.hero}>
      <div className={`${s.hero__content} container`}>
         <div className={s.hero__body}>
            <div className={s.hero__main}>
               <div className={s.hero__cherry}>
                  <span>More than Faster</span>
                  <Image src={Cherry} alt='' width={40} height={25}/>
               </div>
               <h1 className={s.hero__title}>
                  <span>Be The Fastest</span>
                  <span>In Delivering</span>
                  <span>Your <span>Pizza</span></span>
               </h1>
               <p className={s.hero__descr}>
                  Our Mission is to filling your tummy with delicious food and with fast and free delivery
               </p>
               <button className={`${s.hero__btn} btn`}>Get Started</button>
            </div>
            <div className={s.hero__right}>
               <div className={s.hero__image}>
                  <Image src={HeroImg} alt='' layout='intrinsic'/>
               </div>
               <div className={s.hero__contactUs}>
                  <span>Contact Us</span>
                  <div>
                     <UilPhone color='white'/>
                  </div>
               </div>
               <div className={s.hero__pizza}>
                  <div className={s.hero__preview}>
                     <Image src={Pizza1} alt='' objectFit='cover' layout='intrinsic'/>
                  </div>
                  <div className={s.hero__details}>
                     <p>Italian Pizza</p>
                     <p><span>$</span> 7.49</p>
                  </div>
               </div>
            </div>
         </div>
      </div>
    </div>
  )
}

export default Hero