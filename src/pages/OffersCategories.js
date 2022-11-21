import React from 'react';
import { useState } from 'react';

const Categories = ({ categories, filterItems }) => {
    const [value, setValue] = useState(0)

    return (

        <div className="container">
            <div className="containerBorder">
                {categories.map((category, index) => {
                    return (
                        <div className={`filterText ${index === value && 'active-btn'}`}
                            type="button"
                            key={index}
                            onClick={() => {
                                filterItems(category, index);
                                setValue(index);
                            }}
                        >
                            {category}
                        </div>
                    );
                })}
            </div>
        </div >

    );
};

export default Categories;

