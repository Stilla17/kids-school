import React from 'react'
import gr97 from "./../../assets/Group 97.svg"

const Section = () => {
  return (
    <main className='max-w-[1150px] mx-auto'>
      <section className='bg-[#F5F4FF]'>
        <h1 className='w-[786px] font-bold text-[36px] text-center m-auto mt-[92px]'>Откройте ребенку радость увлекательного
          развития без скуки и стресса </h1>
        <div className='flex'>
          <div>
            <img src={gr97} alt="rasm" />
          </div>
          <div className='mt-[127px]'>
            <p className='text-[20px] font-normal w-[470px]'>Практическое пособие KidsBe создано
              для домашнего обучения детей чтению, письму, мышлению и другим навыкам </p>
            <div className='mt-[65px] flex gap-5'>
              <div className='bg-white w-[219px] h-[166px] rounded-[15px] '>
                <p className='w-[200px] pl-[26px] pt-[19px] '>Методика разработана специалистами по детскому развитию, поэтому эффективна
                  и безопасна
                </p>
              </div>
              <div className='bg-white w-[219px] h-[166px] rounded-[15px] '>
                <p className='w-[200px] pl-[26px] pt-[19px] '>
                  Задания продуманы таким образом, чтобы принести ребенку максимум пользы
                  и удовольствия
                </p>
              </div>
            </div>

            <p className='w-[540px] text-[20px] font-normal mt-[53px]  '>Вы получите материалы с подробными инструкциями —  просто следуйте рекомендациям, и все пройдет отлично</p>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Section