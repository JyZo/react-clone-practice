import React, { useEffect } from 'react';
import './Payment.scss';
import { useStateValue } from './StateProvider';
import { Link, useNavigate } from 'react-router-dom';
import CheckoutProduct from './CheckoutProduct';
import CurrencyFormat from 'react-currency-format';
import { getBasketTotal } from './Reducer';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import { useState } from 'react';
import axios from './axios';
import { db } from './firebase';

const Payment = () => {
  const [{ basket, user }, dispatch] = useStateValue();
  const navigate = useNavigate();
  const [error, setError] = useState(null);
  const [disable, setDisable] = useState(true);
  const [processing, setProcessing] = useState('');
  const [succeeded, setSucceeded] = useState(false);

  const [clientSecret, setClientSecret] = useState(true);

  const stripe = useStripe();
  const elements = useElements();

  useEffect(() => {
    const getClientSecret = async () => {
      const response = await axios({
        method: 'post',
        url: '/payments/create?total=' + getBasketTotal(basket) * 100,
      });
      setClientSecret(response.data.clientSecret);
    };

    getClientSecret();
  }, [basket]);

  console.log('client 비밀은 다음과 같아요', clientSecret);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setProcessing(true); //결제중 글자관련 세팅

    const payload = await stripe
      .confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
        },
      })
      .then(({ paymentIntent }) => {
        // paymentIntent = payment 확인 및 정보

        db.collection('users')
          .doc(user?.uid)
          .collection('orders')
          .doc(paymentIntent.id)
          .set({
            basket: basket,
            amount: paymentIntent.amount,
            created: paymentIntent.created,
          });

        setSucceeded(true);
        setError(null);
        setProcessing(false);

        // 딜레이가 생겻을때 버튼이 비활성화 된다. 하지만 너무 빨리 넘어가서 확인이 불가능

        dispatch({
          type: 'EMPTY_BASKET',
        });

        navigate('/orders');
      });
  };
  const handleChange = (e) => {
    setDisable(e.empty);
    setError(e.error ? e.error.message : '');
  };

  return (
    <div className="payment">
      <div className="payment_container">
        <Link to="/checkout" className="checkoutlink">
          <h1>
            장바구니 돌아가기 ({basket?.length} 개의 상품목록이 존재합니다. )
          </h1>
        </Link>

        <div className="payment_section">
          <div className="payment_title">
            <h1>배달 받을 곳</h1>
          </div>
          <div className="payment_address">
            <p>{user?.email} 의 주소</p>
            <p>강원도</p>
            <p>철원</p>
          </div>
        </div>
      </div>

      <div className="payment_section">
        <div className="payment_title">
          <h1>상품 목록</h1>
        </div>
        <div className="payment_items">
          {basket.map((item) => (
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
      </div>

      <div className="payment_section">
        <div className="payment_title">
          <h1> 결제 </h1>
        </div>

        <div className="payment_details">
          <form onSubmit={handleSubmit}>
            <CardElement onChange={handleChange} />

            <div className="payment_priceContainer">
              <CurrencyFormat
                renderText={(value) => (
                  <>
                    <p>
                      총액({basket?.length} 개) : <strong> {value} 원</strong>
                    </p>
                    <small className="subtatla_gift">
                      <input type="checkbox" />
                      체크박스 입니다
                    </small>
                  </>
                )}
                decimalScale={2}
                value={getBasketTotal(basket)}
                displayType={'text'}
                thousandSeparator={true}
                prefix="₩"
              />

              <button disabled={processing || disable || succeeded}>
                <span>{processing ? <p>결제중입니다.</p> : '결제하기'}</span>
              </button>
            </div>

            {error && <div>{error}</div>}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Payment;
