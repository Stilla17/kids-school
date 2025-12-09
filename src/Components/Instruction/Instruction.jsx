import React from 'react'
import questions from './../../assets/Queations.png';




const Instruction = () => {
    return (
        <div>

            <main className='bg-[#F5F4FF]'>
                <section className='w-[1149px] mx-auto mt-34'>
                    <div className='flex justify-between items-center'>
                        <div>
                            <img src={questions} alt="img" />
                        </div>

                        <div>
                            <p className='text-[36px] font-bold w-[558px] '>Пошаговые инструкции
                                и обратная связь от экспертов </p>
                            <p className='text-[20px] text-[#6D698C] w-[563px] mt-10'>В обучающую методику интегрирована онлайн-школа KidsBe.
                                С первого дня вы получите доступ к пошаговым инструкциям
                                по домашнему обучению в целом и отдельным занятиям
                                в частности. Полезные советы и видеоинструкции
                                упростят обучение ребенка.


                                В онлайн-школе вы будете получать от педагогов обратную связь по прогрессу, проверку домашних заданий
                                и персональные рекомендации.
                            </p>
                        </div>

                    </div>
                </section>
            </main>


        </div>
    )
}

export default Instruction