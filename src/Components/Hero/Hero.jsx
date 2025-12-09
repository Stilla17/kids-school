import React from 'react'
import kid from './../../assets/kid1 2.png';



const Hero = () => {
    return (
        <>

            <div className='bg-[#7967FF] max-w-[1600px] mx-auto flex items-center justify-between'>

                <div className='max-w-[1150px] mx-auto'>
                    <h1 className='text-[48px] text-white font-bold'>33 занятия — и ваш ребенок<br />на <span className='text-amber-500'>новом уровне</span> знаний </h1>
                    <p className='text-[24px] text-white mt-5'>Учитесь без скуки и стресса с KidsBe</p>

                    <div className='flex mt-10'>
                        <div>
                            <label className='text-white font-bold' htmlFor="">Ваша имя</label><br />
                            <input style={{ borderRadius: "15px 50px 15px 50px" }} className='text-gray-600 bg-white w-[272px] p-5 font-bold border-none ' type="text" placeholder='Александр' /><br />
                            <button style={{ borderRadius: "15px 50px 15px 50px" }} className='text-white bg-[#2DBC7C] w-[272px] p-5 font-bold border-none mt-5 cursor-pointer'>Узнать стоимость</button>
                        </div>

                        <div>
                            <label className='text-white font-bold' htmlFor="">Ваш телевон</label><br />
                            <input style={{ borderRadius: "15px 50px 15px 50px" }} className='text-gray-600 bg-white w-[272px] p-5 font-bold border-none ' type="text" placeholder='+7' />
                        </div>
                    </div>

                </div>
                <img src={kid} alt="" />
            </div>



            <h1 className='text-[#2D2D2D] font-bold text-center text-[36px] mt-10'>Полный арсенал развивающих инструментов<br />в вашем смартфоне</h1>
            <p className='text-[#2D2D2D] text-center mt-5 text-[20px]'>Часть заданий и полезной информации для родителей доступна<br />в мобильном приложении. Оно включает: </p>

        </>
    )
}

export default Hero