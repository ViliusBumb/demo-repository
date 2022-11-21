import React from 'react'
import './AboutUs.css'
import { BiCheck } from 'react-icons/bi'

export default function AboutUs() {
    return (
        <div>
            <div className='backgroundTwo'></div>
            <div className='rentColumn'>
                <h2 className='aboutsUsText'>Slidinėjimo kelionės - kelionių organizatorius numeris 1! </h2>
                <p className='aboutUsTextTwo'> <BiCheck className='BiCheckClass' />5 metų patirtis.</p>
                <p className='aboutUsTextTwo'> <BiCheck className='BiCheckClass' />Kainos atitinkančios aukščiausią kokybę.</p>
                <p className='aboutUsTextTwo'> <BiCheck className='BiCheckClass' />Geriausi  Prancūzijos, Italijos, Sakartvelo ir Austrijos slidinėjimo kurortai.</p>
                <p className='AboutUsFooter'>Mes esam bendruomenė, kuri yra pamišusi dėl sniego ir kalnų. Kalnai – mūsų gyvenimas jau dvylika metų, o per juos aplankėme geriausius slidinėjimo kurortus Italijoje, Prancūzijoje, Austrijoje, Gruzijoje ir Baltijos šalyse, tad jums turime pasiūlyti tik tokias keliones, į kurias patys norime sugrįžti. Jei tau sniegas yra daugiau nei snaigės, krentančios iš dangaus, prisijunk prie mūsų!</p>
            </div>
            <div className='AboutUsVideo'>
                <iframe width="650" height="315" src='https://www.youtube.com/embed/KAnzZEO8du8'></iframe>
            </div>
        </div>
    )
}
