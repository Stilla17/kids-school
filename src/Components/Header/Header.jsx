import React from 'react'
import kids from './../../assets/kids 3.png';
const Header = () => {
  return (
    <div>

      <div className='w-[1149px] mx-auto'>

        <div className='flex justify-between mt-16'>
          <div>
            <h1 className='text-[46px] w-[640px] font-bold'>KidsBe - продуктивный подход к обучению детей
              от 3 до 7 лет </h1>
            <p className='text-[#8682A7] text-[20px] pt-10 w-[466px]'>Книга + мобильное приложение + онлайн-школа работают как единая система для развития речи,
              ума и навыков общения</p>
          </div>

          <div>
            <img src={kids} alt="kids" />
          </div>
        </div>

      </div>

    </div>
  )
}

export default Header