import React from 'react'
import styles from './Home.css'
import ReadMore from './HomeReadMore'
import { AiFillStar } from 'react-icons/ai'
import { HiLocationMarker } from 'react-icons/hi'
import ReviewTeam from './ReviewTeam'




export default function Home() {
    return (

        <div>
            <div className='background'></div>
            <div className='topKeliones'>
                <a className='topKelionesBorder'>Top Kelionės</a>
            </div>
            <div className='offersRow'>
                <div className='offerCard'>
                    <div className='cardImg offerOne'>
                        <div className='locationText'>
                            <HiLocationMarker className='location'></HiLocationMarker>
                            <p>Sakartvelas</p>
                        </div>
                        <span className='price'> <p className='priceText'>Nuo</p> 750 <p className='priceText'>€</p></span>
                    </div>
                    <div className='offerCardContent'>
                        <h3>Stovykla #1 @ GUDAURI 2023</h3>
                        <ReadMore limit={100}> Gudauri – didžiausias Sakartvelo (Gruzijos) slidinėjimo kurortas, įsikūręs Kazbegi regione, 120 km. nuo sostinės Tbilisio, tad slidinėjimas čia nesunkiai suderinamas su aktyvia kultūrine programa sostinėje. Gudauri kurorte keltuvai kelia į 3279 m. aukštį, yra 75 kilometrų gerai prižiūrimų trasų visų lygių slidinėjimui. Gausu plačių mėlynų trasų, itin tinkančių pradedantiesiems slidininkams.. </ReadMore>
                        <div className='offerCardFooter'>
                            <a className='readMore' href='' >Domina...</a>
                            <span className='fillStarPadding'>
                                <AiFillStar className='fillStar' />
                                <AiFillStar className='fillStar' />
                                <AiFillStar className='fillStar' />
                            </span>
                        </div>
                    </div>
                </div>

                <div className='offerCard'>
                    <div className='cardImg offerTwo'>
                        <div className='locationText'>
                            <HiLocationMarker className='location'></HiLocationMarker>
                            <p>Šveicarija</p>
                        </div>
                        <span className='price'> <p className='priceText'>Nuo</p> 1300 <p className='priceText'>€</p></span>
                    </div>
                    <div className='offerCardContent'>
                        <h3>Stovykla #2 @ LAAX 2023</h3>
                        <ReadMore limit={100}> Šveicarijos LAAX - čia dera aukščiausios klasės keltuvai, rūpestingai prižiūrimos trasos ir abejingų nepaliekantys mūsų siūlomi erdvūs apartamentai. Išbandykite net 220 km. plačių, žaismingų, miškingų trasų, tiesiog nepaliekančių abejingų šiam kurortui! Sukluskite ir puraus sniego mylėtojai, nes sausis čia – itin dosnus sniegu! Rinkitės tarp ski in – ski out apartamentų Rocks Resort, arba fantastišką SPA centrą turintį Peaks Place & Spa... </ReadMore>
                        <div className='offerCardFooter'>
                            <a className='readMore' href='' >Domina...</a>
                            <span className='fillStarPadding'>
                                <AiFillStar className='fillStar' />
                                <AiFillStar className='fillStar' />
                                <AiFillStar className='fillStar' />
                                <AiFillStar className='fillStar' />
                                <AiFillStar className='fillStar' />
                            </span>
                        </div>
                    </div>
                </div>

                <div className='offerCard'>
                    <div className='cardImg offerThree'>
                        <div className='locationText'>
                            <HiLocationMarker className='location'></HiLocationMarker>
                            <p>Italija</p>
                        </div>
                        <span className='price'> <p className='priceText'>Nuo</p> 950 <p className='priceText'>€</p></span>
                    </div>
                    <div className='offerCardContent'>
                        <h3>Stovykla #3 @ LIVINGO 2023</h3>
                        <ReadMore limit={100}> Livigno (tarti livinjo) yra visus metus veikiantis kurortas, kuris žiemą tampa vienu lankomiausių visose Alpėse. Šis miestas Alta Valtellina regione didingų vaizdų tikrai negaili. Jis įsikūręs prie pat Šveicarijos sienos, tarp dviejų šalių nacionalinių parkų. Miestas yra 1816 m virš jūros lygio, tęsiasi 15 km palei Alpių slėnį ir yra apsuptas dviejų kalnynų, kurių viršūnės siekia daugiau kaip 3000 m. Livigno yra šiauriausias Lombardijos miestas, o Trepalle kaimelis jo apskrityje yra įsikūręs 2250 m virš jūros lygio ir yra aukščiausias apgyvendintas taškas Europoje. </ReadMore>
                        <div className='offerCardFooter'>
                            <a className='readMore' href='' >Domina...</a>
                            <span className='fillStarPadding'>
                                <AiFillStar className='fillStar' />
                                <AiFillStar className='fillStar' />
                                <AiFillStar className='fillStar' />
                                <AiFillStar className='fillStar' />
                            </span>
                        </div>
                    </div>
                </div>

            </div>

            <div className='backgroundTeam'>
                <section className='ContainerTeam'>
                    <div className='title'>
                        <div className='teamText'>
                            <h2>Komanda</h2>
                        </div>

                    </div>
                    <ReviewTeam />
                </section>
            </div>


        </div>
    )
}
