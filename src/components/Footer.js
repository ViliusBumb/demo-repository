import React from 'react'
import Styles from './Footer.css'
import { BsFacebook, BsInstagram } from 'react-icons/bs'


export default function Footer() {
    return (
        <footer className='Footer'>
            <div className='FooterInfo'>
                <a >Susisiekime!</a>
                <a className='FooterContact'>+37066231042</a>
                <a className='BsFacebook' href='https://www.facebook.com/' target="blank">
                    <BsFacebook color="white" /></a>
                <a className='BsInstagram' href='https://www.instagram.com/' target="blank">
                    <BsInstagram color="white" /></a>
                <div>
                    <a className='FooterRights'>Visos Teises Yra Saugomos &copy; 2022 </a>
                </div>
            </div>

        </footer>
    )
}
