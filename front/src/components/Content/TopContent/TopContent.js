import React from "react";
import './topcontent.css'

export default function TopContent(prop) {
    return (
        <section className="top_content">
            {prop.children}
        </section>
    )
}