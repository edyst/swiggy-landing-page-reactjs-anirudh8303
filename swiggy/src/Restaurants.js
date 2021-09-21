import React from 'react'
import './Restaurants.css'

function Restaurants() {
    return (
        <div className="restaurants">
            <div className="restaurants_left">
                <h2>Restaurants in your pocket</h2>
                <h4>Order from your favorite restaurants & track on the go, with the all-new Swiggy app.</h4>
                <div className="app_icons">
                    <img src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_108/play_ip0jfp" />
                    <img src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_108/iOS_ajgrty" />
                </div>
            </div>
            <div className="restaurants_right">
                <img src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_768,h_978/pixel_wbdy4n" />
                <img src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_768,h_978/iPhone_wgconp_j0d1fn" />
            </div>

        </div>
    )
}

export default Restaurants
