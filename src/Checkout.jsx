import React from 'react';
import './Checkout.scss';

const Checkout = () => {
    return (
        <div className='checkout'>
            <div className='checkout_left'>
                <img className="checkout_ad" src="https://opgg-gnb.akamaized.net/static/images/banners/970 x 92.png?image=q_auto,f_webp,w_1940,h_180&v=1702977255104"alt=""/>

                <h1 className='checkout_title'> 장바구니</h1>

            </div>

            <div className='checkout_right'>

                <h2>장바구니 총금액</h2>
            </div>
        </div>
    );
};

export default Checkout;