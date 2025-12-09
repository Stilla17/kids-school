import React from 'react'
import lion from './../../assets/lion.png';
const Explore = () => {
    return (
        <div>


            <main>
                <section className='w-[1149px] mx-auto mt-19'>

                    <div className='flex gap-[51px] items-center'>
                        <div>
                            <p className='text-[36px] font-bold text-[#2D2D2D] w-[558px]'>Исследуйте мир
                                в дополненной реальности </p>
                            <p className='text-[20px] text-[#6D698C] w-[511px] mt-9.5'>С помощью фигурок героев и моделей KidsBe ребенок запомнит животных, углубит знания о природе и планете, а также разовьет мелкую моторику рук.

                                Яркие впечатления малышу подарят игры с элементами дополненной реальности: интересные персонажи
                                и звери оживут на экране телефона. Ассоциативные мультфильмы помогут детям вовлечься
                                в образовательный процесс и научиться
                                мыслить по-новому.
                            </p>
                        </div>
                        <div>
                            <img src={lion} alt="lion" />
                        </div>
                    </div>

                </section>
            </main>

        </div>
    )
}

export default Explore