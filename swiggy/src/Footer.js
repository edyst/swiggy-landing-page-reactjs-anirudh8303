import React from "react";
import "./Footer.css";

function Footer() {
    return (
        <div class="headings">
            <section>
                <h3>COMPANY</h3>
                <nav>
                    <ul>
                        <li>
                            <a href="#">About us</a>
                        </li>
                        <li>
                            <a href="#">Team</a>
                        </li>
                        <li>
                            <a href="#">Careers</a>
                        </li>
                        <li>
                            <a href="#">Swiggy Blog</a>
                        </li>
                        <li>
                            <a href="#">Bug Bounty</a>
                        </li>
                        <li>
                            <a href="#">Swiggy Super</a>
                        </li>
                        <li>
                            <a href="#">Swiggy Corporate</a>
                        </li>
                        <li>
                            <a href="#">Swiggy Instamart</a>
                        </li>
                    </ul>
                </nav>
            </section>
            <section>
                <h3>Contact</h3>
                <nav>
                    <ul>
                        <li>
                            <a href="#"> Help & Support</a>
                        </li>
                        <li>
                            <a href="#">Partner with us</a>
                        </li>
                        <li>
                            <a href="#">Ride with us</a>
                        </li>
                    </ul>
                </nav>
            </section>
            <section>
                <h3>Legal</h3>
                <nav>
                    <ul>
                        <li>
                            <a href="#">Terms & Conditions</a>
                        </li>
                        <li>
                            <a href="#">Refund & Cancellation</a>
                        </li>
                        <li>
                            <a href="#">Privacy Policy</a>
                        </li>
                        <li>
                            <a href="#">Cookie Policy</a>
                        </li>
                        <li>
                            <a href="#">Offer Terms</a>
                        </li>
                        <li>
                            <a href="#">Phishing & Fraud</a>
                        </li>
                    </ul>
                </nav>
            </section>
            <section>
                <div class="img">
                    <a href=""><img src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_200,h_65/icon-AppStore_lg30tv" /></a>
                    <a href=""><img src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_200,h_65/icon-GooglePlay_1_zixjxl" /></a>
                </div>
            </section>
        </div>


    );
}
export default Footer;