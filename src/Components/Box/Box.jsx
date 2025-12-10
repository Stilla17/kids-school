import React from 'react'
import boximg1 from './../../assets/Vector(3).png';
import boximg2 from './../../assets/puzzle (1) 1.png';
import boximg3 from './../../assets/tv 1.png';
import boximg4 from './../../assets/chat-bubble (9) 1.png';

const Box = () => {
    return (
        <>
            <div className='max-w-[1150px] mx-auto mt-10 flex justify-between items-center'>

                <div className='w-[272px] h-[350px] p-8 text-left bg-white rounded-[20px]'>
                    <img className='mx-auto pb-10 flex' src={boximg1} alt="" />
                    <p className='text-left'>Карты развития ФГОС — перечни умений и навыков детей в разном возрасте и бланки для личных заметок — просто введите возраст ребенка, и приложение покажет, что он уже должен уметь. </p>
                </div>

                <div className='w-[272px] h-[350px] p-8 text-left bg-white rounded-[20px]'>
                    <img className='mx-auto pb-10 flex' src={boximg2} alt="" />
                    <p className='text-left'>Мультфильмы и мини-игры
                        с элементами дополненной реальности для вовлечения в образовательный процесс.  </p>
                </div>

                <div className='w-[272px] h-[350px] p-8 text-left bg-white rounded-[20px]'>
                    <img className='mx-auto pb-10 flex' src={boximg3} alt="" />
                    <p className='text-left'>Видеоуроки с подробными инструкциями по выполнению физических и логопедических упражнений.  </p>
                </div>

                <div className='w-[272px] h-[350px] p-8 text-left bg-white rounded-[20px]'>
                    <img className='mx-auto pb-10 flex' src={boximg4} alt="" />
                    <p className='text-left'>Чат со специалистами для оперативной поддержки и личных консультаций </p>
                </div>

            </div>

            <p className='text-gray-600 text-[25px] text-center mt-8'>Приложение удобно и интуитивно понятно.<br/> Все получится, даже если вы впервые пробуете такой формат обучения. </p>
            <button style={{borderRadius:"15px 50px 15px 50px"}} className='bg-[#EF584E] text-white p-5 text-[20px] font-bold mx-auto flex mt-10'>Получить демо-доступ</button>
        </>
    )
}

export default Box