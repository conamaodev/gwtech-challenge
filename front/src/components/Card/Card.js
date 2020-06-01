import {Link} from "react-router-dom";
import React from "react";
import './card.css';

export default function Card(prop) {

    function getItems() {
        return (
            <>
                {
                    prop.image &&
                    <img src={prop.image} alt="Card Image"/>
                }
                {
                    prop.title &&
                    <div className="card_title">
                        <p>{prop.title}</p>
                    </div>
                }
                {
                    prop.content &&
                    <div className="card_content">
                        <p>{prop.content}</p>
                    </div>
                }
            </>
        )
    }

    return prop.link ? <Link to={prop.link} className='card'>{getItems()}</Link> :<div className='card'>{getItems()}</div>
}