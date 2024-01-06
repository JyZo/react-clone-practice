import React from 'react';
import './Home.scss';
import Product from './Product';

const Home = () => {
    return (
        <div className='home'>
            <article className='home-container'>
                <img className="home_image" src="https://images.idgesg.net/images/article/2017/09/firetvad2-100736366-orig.jpg" alt=""/>

                <section className='home_row'>
                    <Product 
                    id="1" 
                    title="제품1" 
                    price={10000}
                    image="https://cdn-store.leagueoflegends.co.kr/images/v2/emotes/3154.png" 
                    rating={1}/>
                </section>

                <section className='home_row'>
                <Product 
                    id="2" 
                    title="제품2" 
                    price={20000}
                    image="https://cdn-store.leagueoflegends.co.kr/images/v2/emotes/1478.png" 
                    rating={2}/>
                    <Product 
                    id="3" 
                    title="제품3" 
                    price={30000}
                    image="https://cdn-store.leagueoflegends.co.kr/images/v2/emotes/1478.png" 
                    rating={3}/>
                    <Product 
                    id="4" 
                    title="제품4" 
                    price={40000}
                    image="https://cdn-store.leagueoflegends.co.kr/images/v2/emotes/1478.png" 
                    rating={4}/>
                </section>

                <section className='home_row'>
                <Product 
                    id="5" 
                    title="제품5" 
                    price={50000}
                    image="https://cdn-store.leagueoflegends.co.kr/images/v2/emotes/1492.png" 
                    rating={5}/>
                    <Product 
                    id="6" 
                    title="제품6" 
                    price={60000}
                    image="https://cdn-store.leagueoflegends.co.kr/images/v2/emotes/1492.png" 
                    rating={4}/>
                </section>

            </article>
        </div>
    );
};

export default Home;