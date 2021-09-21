import React from 'react'
import './CardSection.css'
import Card from './Card'

function CardSection() {
    return (
        <div className="cardSection">
            <Card source={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_210,h_398/4x_-_No_min_order_x0bxuf"} textHead={"No Minimum Order"} textPara={"Order in for yourself or for the group, with no restrictions on order value"} />
            <Card source={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_224,h_412/4x_Live_order_zzotwy"} textHead={"Live Order Tracking"} textPara={"Know where your order is at all times, from the restaurant to your doorstep"} />
            <Card source={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_248,h_376/4x_-_Super_fast_delivery_awv7sn"} textHead={"Lightning-Fast Delivery"} textPara={"Experience Swiggy's superfast delivery for food delivered fresh & on time"} />
        </div>
    )
}

export default CardSection
