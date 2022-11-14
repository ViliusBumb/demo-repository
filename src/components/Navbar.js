import styles from './Navbar.css'
import { useRef } from 'react'
import { BsFacebook, BsInstagram } from 'react-icons/bs'
import { FaBars, FaTimes } from 'react-icons/fa'



export default function Navbar() {
    const navRef = useRef();

    const showNavBar = () => {
        navRef.current.classList.toggle("responsive_nav");
    }

    return (

        <header>
            <nav ref={navRef} className='navBarLinks'>
                <a className="navBarText" href='/'>Slidinėjimo kelionės</a>
                <a className="navBarText" href='Planuok Pats'>Planuok Pats</a>
                <a className="navBarText" href='Nuoma'>Nuoma</a>
                <a className="navBarText" href='Apie Mus'>Apie Mus</a>
                <a className="navBarText" href='Kontaktai'>Kontaktai</a>
                <button className='navBtn navCloseBtn' onClick={showNavBar}>
                    <FaTimes />
                </button>
            </nav>

            <button className='navBtn burger' onClick={showNavBar}>
                <FaBars />
            </button>
        </header >
    );
}