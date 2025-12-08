import React from 'react'
import logo from "./../../assets/logo_kidsbe 1.svg"
import gr87 from "./../../assets/Group 87.svg"
const Nav = () => {
    return (
        <div className='max-w-[1150px] mx-auto'>
            <nav className='flex mt-[22px] justify-between pl-5 pr-5'>
                <img src={logo} alt="rasm" />
                <p className='w-[170px] text-[#AFACC9]'>продуктивный подход
                    к обучению детей</p>
                <img src={gr87} alt="rasm" />
                <p className='font-bold text-[20px]'>+ 7 212 342 39 49</p>
                <button className='w-[183px] h-[50px] text-[14px] text-[white] rounded-3xl bg-[#2DBC7C]'>Заказать звонок</button>
            </nav>
        </div>
    )
}

export default Nav