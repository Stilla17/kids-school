import React from 'react'

const Nav = () => {
  return (
    <div className='max-w-[1150px]'>
      <Nav className ='flex mt-[22px] justify-between pl-5 pr-5'>
        <img src="src/assets/logo_kidsbe 1.svg" alt="rasm" />
      <p className='w-[170px] text-[#AFACC9]'>продуктивный подход
        к обучению детей</p>
        <img src="src/assets/Group 87.svg" alt="rasm" />
        <p className='font-bold text-[20px]'>+ 7 212 342 39 49</p>
        <button className='w-[183px] h-[50px] text-[14px] text-[white] rounded-3xl bg-[#2DBC7C]'>Заказать звонок</button>
      </Nav>
    </div>
  )
}

export default Nav