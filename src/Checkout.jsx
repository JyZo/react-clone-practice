import React from 'react';
import './Checkout.scss';
import Subtatal from './Subtatal';
import CheckoutProduct from './CheckoutProduct';
import { useStateValue } from './StateProvider';

const Checkout = () => {

    const [{basket, user}, dispatch] = useStateValue();

    return (
        <div className='checkout'>
            <div className='checkout_left'>
                <img className="checkout_ad" src="https://opgg-gnb.akamaized.net/static/images/banners/970 x 92.png?image=q_auto,f_webp,w_1940,h_180&v=1702977255104"alt=""/>

                <h1 className='checkout_title'> 
                {user?.email}의 장바구니 입니다.
                </h1>

                {basket.map(item => (
                             // eslint-disable-next-line react/jsx-key
                             <CheckoutProduct
                                 id={item.id}
                                 title={item.title}
                                 image={item.image}
                                 price={item.price}
                                 rating={item.rating}
                             />
                ))}

            </div>

            <div className='checkout_right'>
                <Subtatal />
                <h2>장바구니 총금액</h2>
            </div>
        </div>
    );
};

export default Checkout;