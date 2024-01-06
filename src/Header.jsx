import React from 'react';
import './Header.scss';
import SearchIcon from '@mui/icons-material/Search';
import { ShoppingBasket } from '@mui/icons-material';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
  <header className="header">
    <Link to='./'>
      <img className='header_logo' src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"></img>

    </Link>


    <div className='header_search'>
      <input className='header_searchInput' type='text'></input>
      <SearchIcon className='header_searchIcon'></SearchIcon>
    </div>

    <nav className='header_nav'>

      <div className='header_option'>
        <span className='header_optionLineOne'>안녕하세요</span>
        <span className='header_optionLineTwo'>로그인하기</span>
      </div>

      <div className='header_option'>
        <span className='header_optionLineOne'>돌아가기</span>
        <span className='header_optionLineTwo'>주문내역</span>
      </div>

      <div className='header_option'>
        <span className='header_optionLineOne'>반가워요</span>
        <span className='header_optionLineTwo'>구독과좋아요</span>
      </div>

      <Link to='/checkout'>
        <div className='header_optionBasket'>
          <ShoppingBasket></ShoppingBasket>
          <span className="header_optionLineTwo header_basketCount"> 0 </span>
        </div>
      </Link>
      

    </nav>


  </header>
  );
};

export default Header;
