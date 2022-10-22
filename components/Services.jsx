import Image from 'next/image'
import React from 'react'
import s from '../styles/Services.module.scss'
import s1 from '../assets/s1.png'
import s2 from '../assets/s2.png'
import s3 from '../assets/s3.png'

const Services = () => {
  return (
    <div className={s.services}>
      <div className={s.services__heading}>
         <span>WHAT WE SERVE</span>
         <span>Your Favourite Food<br/>
               Delivery Partner
         </span>
      </div>
      <div className={s.services__items}>
         <div className={s.services__item}>
            <div className={s.services__img}>
               <Image src={s1} alt='' objectFit='cover' layout='intrinsic' />
            </div>
            <span className={s.services__title}>Easy to order</span>
            <p className={s.services__descr}>
               You only need a few steps in food ordering
            </p>
         </div>
         <div className={s.services__item}>
            <div className={s.services__img}>
               <Image src={s2} alt='' objectFit='cover' layout='intrinsic' />
            </div>
            <span className={s.services__title}>Easy to order</span>
            <p className={s.services__descr}>
               Delivery that is always on time even faster
            </p>
         </div>
         <div className={s.services__item}>
            <div className={s.services__img}>
               <Image src={s3} alt='' objectFit='cover' layout='intrinsic' />
            </div>
            <span className={s.services__title}>Easy to order</span>
            <p className={s.services__descr}>
               Not only fast for us, quality is also number one
            </p>
         </div>
      </div>
    </div>
  )
}

export default Services