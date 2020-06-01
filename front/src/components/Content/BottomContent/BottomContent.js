import React from "react";
import './bottomcontent.css'

export default function BottomContent(prop) {
    return (
        <section className='bottom_content'>
            <div className="filters">
                <input type="text" placeholder="Pesquisar..." value={prop.search} onChange={e => prop.setSearch(e.target.value)} />
            </div>
            <div className={`cards ${prop.large ? 'large' : ''}`}>
                {prop.cards}
            </div>
        </section>
    )
}