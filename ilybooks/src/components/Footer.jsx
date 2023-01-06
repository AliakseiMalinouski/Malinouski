import React from "react";

export const Footer = () => {
    return (
        <div className='Footer'>
            <div className="WBlockFooter">
                <img src="https://i.ibb.co/vdKGBYM/ilybooks.png" alt="Logo" />
                <div className="FooterLists">
                    <ul>
                        <li>Company</li>
                        <li>Our shops</li>
                        <li>Careers</li>
                        <li>Privacy Policy</li>
                        <li>Privacy & Conditions</li>
                    </ul>
                    <ul>
                        <li>Services</li>
                        <li>Track Order</li>
                        <li>Refund</li>
                        <li>Payment</li>
                    </ul>
                    <ul>
                        <li>Contacts</li>
                        <li>4662 Gadwell Pl<br/>Waldorf, Maryland(MD), 20603</li>
                        <li>info@ilybooks.com</li>
                        <li>(301) 638-9463</li>
                    </ul>
                <div>
                    <h3>Subscribe to our newsletter</h3>
                    <input type='text' placeholder='Email'/>
                    <button>Subscribe</button>
                </div>
                </div>
            </div>
        </div>
    )
}