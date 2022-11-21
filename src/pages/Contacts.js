import React from 'react'
import { useRef } from 'react';
import './Contacts.css'
import emailjs from '@emailjs/browser';


export default function Contacts() {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        e.target.reset();

        emailjs.sendForm('service_eho9f7k', 'template_2r4zxag', form.current, 'u3HAzsC02W8Hw9v_4')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };


    return (



        <div>

            <div className='backgroundTwo'></div>

            <div className='backgroundContactUs'>

                <div className='contactsRow'>

                    <form ref={form} onSubmit={sendEmail}>

                        <div className='contactsText'>
                            <h1 >Susisiekime</h1>
                        </div>

                        <div>
                            <input type='text' placeholder='Vardas...' className='contactsInput' name='name'></input>
                        </div>

                        <div>
                            <input type='email' placeholder='El. Paštas...' className='contactsInput' name='email'></input>
                        </div>

                        <div>
                            <input type='text' placeholder='Tel. numeris...' className='contactsInput' name='Phone'></input>
                        </div>

                        <textarea type="text" placeholder='Žinutės tekstas...' className='tableText' name='message' ></textarea>

                        <div className='contactsInputBtnHover'>
                            <input type='submit' value='Siųsti' className='contactsInputBtn' ></input>
                        </div>


                    </form>
                </div>
            </div>

        </div>
    )
}
