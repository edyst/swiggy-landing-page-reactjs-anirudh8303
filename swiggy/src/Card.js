import React from 'react'
import './Card.css'

function Card({ source, textHead, textPara }) {
    return (
        <div className="card">
            <center>
                <img src={source} />
                <div className="card_content">
                    <h2>{textHead}</h2>
                    <h3>{textPara}</h3>
                </div>
            </center>
        </div>
    )
}

export default Card
