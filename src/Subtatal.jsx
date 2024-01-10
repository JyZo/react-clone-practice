import React from 'react';
import './Subtatal.scss'
import CurrencyFormat from 'react-currency-format';
import { useStateValue } from './StateProvider';
import { getBasketTotal } from './Reducer';
import { useNavigate } from 'react-router-dom';

const Subtatal = () => {
    const [{basket}, dispatch] = useStateValue();
    const navigate = useNavigate();

    return (
        <div className='subtatal'>
            <CurrencyFormat
                renderText={(value) => (
                    <>
                        <p>
                            총액({basket?.length} 개) : <strong> {value} 원</strong>
                        </p>
                            <small className='subtatla_gift'>
                                <input type='checkbox'/>체크박스 입니다
                            </small>
                    
                    </>

                )}

                decimalScale={2}
                value={getBasketTotal(basket)}
                displayType={'text'}
                thousandSeparator= {true}
                prefix='₩'
                />
                <button onClick={e => navigate('/payment')}>결제하기</button>
        </div>
    );
};


export default Subtatal;