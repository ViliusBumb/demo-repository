import React from 'react'
import { HiLocationMarker } from 'react-icons/hi'

const Menu = ({ items }) => {
    return (
        <div className='sectionCenter'>
            {items.map((menuItem) => {
                const { id, date, img, country, price, camp, desc } = menuItem;
                return (
                    <div className='rowOffers'>
                        <div key={id} className='offerCardMargin'>
                            <div className='cardImg'>
                                <img className='test55' src={img} />
                                <div className='locationTextAbsolute'>
                                    <HiLocationMarker className='location'></HiLocationMarker>
                                    <p>{country}</p>
                                </div>
                                <span className='price'> <p className='priceText'>Nuo</p> {price} <p className='priceText'>€</p></span>
                            </div>

                            <div className='contentOffferCard'>
                                <h3> {camp} </h3>
                                <p className='leavingDate'>Išvykimo data:  <b className='datePadding'>{date} </b></p>
                                <p className='descText'> {desc} </p>
                                <div>
                                    <div className='cardFooterOffer'>
                                        <a className='readMore' href='' >Domina... </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};



export default Menu;