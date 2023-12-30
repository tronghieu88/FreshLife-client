import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import { FaFacebook, FaInstagram } from 'react-icons/fa'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCreditCard } from '@fortawesome/free-solid-svg-icons';
import './Footer.css';
const PaymentAndSocialIcons = () => {
    return (
        <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
            <div>
                <h6>Phương thức thanh toán</h6>
                <div style={{ display: "flex", alignItems: "center" }}>
                    <FontAwesomeIcon icon={faCreditCard} style={{ width: 25, height: 25, marginRight: "15px" }} />
                    <img src="../../Footer/img/momo.png" style={{ width: 25, height: 25 }} alt="Momo" />
                </div>
            </div>

            {/* Mạng xã hội */}
            <div style={{ display: "flex", alignItems: "center", }}>
                <a href="#" className="social-link no-arrow"><FaFacebook size={30} color="#3b5998" /></a>
                <a href="#" className="social-link no-arrow" style={{ marginLeft: "15px" }} ><FaInstagram size={30} color="#e4405f" /></a>
            </div>
        </div>

    );
};

export default PaymentAndSocialIcons;