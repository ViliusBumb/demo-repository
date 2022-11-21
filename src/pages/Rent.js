import React from 'react'
import './Rent.css'

export default function Rent() {
    return (
        <div>
            <div className='backgroundTwo'></div>
            <div className='rentColumn'>
                <div className=''>
                    <h2 className='RentText'>Vilnius/Kaunas/Klaipėda</h2>
                    <p className='RentTextTwo'>2021/2022 metų sezono slidinėjimo įranga jau laukia jūsų!</p>
                </div>
                <div className='boardRent RentTextthree'>
                    <div className='rentRow'>
                        <h3 className='paddingH3' >Snieglentės komplektas</h3>
                        <div className='priceFlex'>
                            <p className='rentPrice'>50€/7d.</p>
                            <p className='rentPrice'>80€/14d.</p>
                        </div>
                    </div>
                </div>

                <div className='boardRent RentTextthree'>
                    <div className='rentRow'>
                        <h3 className='paddingH3' >Slidžių komplektas</h3>
                        <div className='priceFlex'>
                            <p className='rentPrice'>50€/7d.</p>
                            <p className='rentPrice'>80€/14d.</p>
                        </div>
                    </div>
                </div>

                <div className='boardRent RentTextthree'>
                    <div className='rentRow'>
                        <h3 className='paddingH3' >Aprangos komplektas</h3>
                        <div className='priceFlex'>
                            <p className='rentPrice'>30€/7d.</p>
                            <p className='rentPrice'>50€/14d.</p>
                        </div>
                    </div>
                </div>

                <div className='rentInfo'>
                    <p>Išsinuomoti slidinėjimo įrangą galime pasiūlyti tiek patiems mažiausiems tiek aukščiausiems.</p>
                    <p> Turime slidžių nuo 67cm iki 190cm ilgio, slidžių batų dydžiai nuo 26 iki 49.</p>
                    <p>  Snieglenčių ilgiai nuo 80cm iki 165cm, batų dydžiai nuo 33 iki 49.</p>
                    <p> Visą nuomojamą įrangą kruopščiai prižiūrime, jai nuolat atliekame servisą, todėl galite būti tikri, kad gausite kokybišką ir paruoštą čiuožti inventorių.</p>
                </div>




            </div>
        </div>
    )
}
