import React from 'react'
import brain from "./../../assets/Brains 2.svg"
import brain2 from "./../../assets/Brain2 1.svg"
import baby2 from "./../../assets/baby2 1.svg"
import orig from "./../../assets/Orig 1.svg"
import family from "./../../assets/family.svg"
import climb from "./../../assets/climb 1.svg"


const Section2 = () => {
    return (
        <main className='max-w-[1150px] mx-auto'>
            <section>
                <div>
                    <h1 className='text-[36px] font-bold w-[1054px] text-center m-auto mt-[93px]   '>Занимайтесь с удовольствием и достигайте новых вершин
                        следующие 2 месяца и всю жизнь </h1>

                    <p className='text-[20px] w-[738px] text-[#6D698C] text-center m-auto mt-6'>KidsBe — это комплексная программа, помогающая получить положительные результаты сразу в нескольких сферах</p>


                    <div className='flex flex-wrap gap-[157px] mt-[49px]'>
                        <div className='w-[332px] mt-[76px] '>
                            <img src={brain} alt="rasm" className='m-auto' />
                            <p className='w-[] text-[#6D698C] text-center pt-[59px] m-auto'>Равномерное развитие обоих полушарий
                                мозга и межполушарных связей</p>
                        </div>

                        <div className='w-[157px] mt-[76px] '>
                            <img src={brain2} alt="rasm" className='m-auto' />
                            <p className='w-[] text-[#6D698C] text-center pt-[43px] m-auto'>
                                Укрепление памяти
                                и внимания
                            </p>
                        </div>
                        <div className='w-[228px] mt-[76px] '>
                            <img src={baby2} alt="rasm" className='m-auto' />
                            <p className='w-[] text-[#6D698C] text-center pt-[48PX] m-auto'>
                                Развитие мышления
                                и познавательного интереса
                            </p>
                        </div>

                        <div className='flex flex-wrap gap-[157px] pl-[80px]'>

                            <div className='w-[181px] mt-[76px] '>
                                <img src={orig} alt="rasm" className='m-auto' />
                                <p className='w-[] text-[#6D698C] text-center pt-[55px] m-auto'>
                                    Раскрытие творческих
                                    способностей
                                </p>
                            </div>
                            <div className='w-[241px] mt-[76px] '>
                                <img src={family} alt="rasm" className='m-auto' />
                                <p className='w-[] text-[#6D698C] text-center pt-[38px] m-auto'>
                                    Налаживание эмоциональных
                                    связей с родителями
                                </p>
                            </div>
                            <div className='w-[332px] mt-[76px] '>
                                <img src={climb} alt="rasm" className='m-auto' />
                                <p className='w-[] text-[#6D698C] text-center pt-[37px] m-auto'>
                                    Повышение
                                    самостоятельности
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </main>

    )
}

export default Section2