import React from 'react'
import { useState } from 'react'
import TeamData from './ReviewTeamData'
import { FaQuoteRight, FaChevronLeft, FaChevronRight } from 'react-icons/fa'


const ReviewTeam = () => {
    const [index, setIndex] = useState(0);
    const { name, job, image, text, type } = TeamData[index]

    const checkNumber = (number) => {
        if (number > TeamData.length - 1) {
            return 0;
        }
        if (number < 0) {
            return TeamData.length - 1;
        }
        return number;
    }

    const nextPerson = () => {
        setIndex((index) => {
            let newIndex = index + 1;
            return checkNumber(newIndex);
        });
    }

    const prevPerson = () => {
        setIndex((index) => {
            let newIndex = index - 1;
            return checkNumber(newIndex);
        });
    }


    return (

        <article className='review'>
            <div className='imgContainer'>
                <img src={image} alt={name} className='personImg' />
                <span className='quoteIcon'>
                    <FaQuoteRight />
                </span>
            </div>

            <h4 className='author'>{name}</h4>
            <p className='job'>{job}</p>
            <p className='type'>{type}</p>
            <p className='text'>{text}</p>

            <div className='btnContainer'>
                <button className='leftBtn' onClick={prevPerson}>
                    <FaChevronLeft />
                </button>
                <button className='rightBtn' onClick={nextPerson}>
                    <FaChevronRight />
                </button>


            </div>

        </article>


    )
}

export default ReviewTeam;