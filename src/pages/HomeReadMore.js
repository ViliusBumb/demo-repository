import { useState } from "react"
import styles from './Home.css'

const ReadMore = ({ limit, children }) => {

    const text = children;


    const [isReadMoreShown, setisReadMoreShown] = useState(false);

    const toggleBtn = () => {
        setisReadMoreShown(prevState => !prevState)
    }

    return (
        <div className="textBtn">
            {isReadMoreShown ? text : text.substr(0, limit)}
            <button className="btn" href="" onClick={toggleBtn}>{toggleBtn}{isReadMoreShown ? 'Skaityti Mažiau' : 'Skaityti Daugiau'}</button>
        </div>
    )
}

export default ReadMore;