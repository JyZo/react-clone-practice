import React from 'react';
import './Header.scss';
import SearchIcon from '@mui/icons-material/Search';
import { ShoppingBasket } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { useStateValue } from './StateProvider';
import { auth } from './firebase';

const Header = () => {
  const [{ basket, user }, dispatch] = useStateValue();

  const handleAuthentication = () => {
    if (user) {
      auth.signOut();
      console.log('signOut');
    } else {
      console.log('');
    }
  };

  return (
    <header className="header">
      <Link to="./">
        <img
          className="header_logo"
          src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
        ></img>
      </Link>

      <div className="header_search">
        <input className="header_searchInput" type="text"></input>
        <SearchIcon className="header_searchIcon"></SearchIcon>
      </div>

      <nav className="header_nav">
        <div className="header_option">
          <span className="header_optionLineOne">
            {!user ? '게스트' : user.email}
          </span>
          <Link to={!user && '/login'} className="homelogin">
            <span
              onClick={handleAuthentication}
              className="header_optionLineTwo"
            >
              {user ? '로그아웃' : '로그인'}
            </span>
          </Link>
        </div>

        <div className="header_option">
          <span className="header_optionLineOne">돌아가기</span>
          <Link to="/orders" className="orderlist">
            <span className="header_optionLineTwo">주문내역</span>
          </Link>
        </div>

        <div className="header_option">
          <span className="header_optionLineOne">반가워요</span>
          <span className="header_optionLineTwo">구독과좋아요</span>
        </div>

        <Link to="/checkout">
          <div className="header_optionBasket">
            <ShoppingBasket></ShoppingBasket>
            <span className="header_optionLineTwo header_basketCount">
              {' '}
              {basket?.length}{' '}
            </span>
            {/*  ? - 옵셔널 체인 앞대상(여긴basket)이 undefined,null을 반환할 시*/}
          </div>
        </Link>
      </nav>
    </header>
  );
};

export default Header;
