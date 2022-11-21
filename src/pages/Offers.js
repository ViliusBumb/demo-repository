import React from 'react'
import Categories from './OffersCategories'
import items from './OffersData'
import Menu from './OffersMenu'
import './Offers.css'
import { useState } from 'react'


const allCategories = ['Visos Kelionės', ...new Set(items.map((item) => item.category))];

export default function Offers() {

    const [menuItems, setMenuItems] = useState(items);
    const [categories, setCategories] = useState(allCategories);


    const filterItems = (category) => {
        if (category === 'Visos Kelionės') {
            setMenuItems(items);
            return;
        }
        const newItems = items.filter((item) => item.category === category);
        setMenuItems(newItems);
    };


    return (
        <div>
            <div className='backgroundTwo'></div>
            <div className=''>
                <div className='tittle'>
                    <h2></h2>
                </div>
                <Categories categories={categories} filterItems={filterItems} />
                <Menu items={menuItems} />
            </div>

        </div>
    )
}
