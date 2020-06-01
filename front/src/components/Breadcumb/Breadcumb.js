import React from "react";
import {Link} from 'react-router-dom';
import './breadcumb.css';

export default function Breadcumb(prop) {

    function getItems() {
        const lastItem = prop.items.length - 1;
        return prop.items.map((item, index) => {
            if (index === lastItem) {
                if (index === 0) {
                    return <li><p>{item}</p></li>;
                }
                return (
                    <>
                        <li className="separator">></li>
                        <li><p>{item}</p></li>
                    </>)
            }

            if (index === 0) {
                return <li><Link to={prop.links[index]}>{item}</Link></li>;
            }
            return (
                <>
                    <li className="separator">></li>
                    <li><Link to={prop.links[index]}>{item}</Link></li>
                </>)
        });
    }

    return (
        <nav className={'breadcumb'}>
            <ol>
                {getItems()}
            </ol>
        </nav>
    )
}