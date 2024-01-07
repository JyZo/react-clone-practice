import React, { useState } from 'react';
import './Login.scss';
import { Link , useNavigate} from 'react-router-dom';
import { auth } from './firebase';


const Login = () => {
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const navigate = useNavigate();   //리액트 URL주소를 변경시켜 URL주소와 일치하는 Route의 컴포넌트를 렌더링하기 위해 사용

    const signIn = e => {
        console.log("signin");
        e.preventDefault();
        auth.signInWithEmailAndPassword(email,password)
        .then(auth => {
            navigate('/')
        })
        .catch(error => alert(error.message()))
    }

    const register = e => {
        e.preventDefault();

        auth.createUserWithEmailAndPassword(email, password)
            .then((auth) => {
                if(auth) {
                    navigate('/')
                }
            })
            .catch(error => alert(error.message))
    }


    return (
        <div className='login'>
            <Link to='/'>
                <img className='login_logo' src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/2880px-Amazon_logo.svg.png' alt=''/>
            </Link>


            <div className='login_container'>

                <form>
                    <h5>이메일</h5>
                    <input value = {email} onChange={e => setEmail(e.target.value)} type='text' />
                    <h5>비밀번호</h5>
                    <input value = {password} onChange={e => setPassword(e.target.value)} type="password" />

                    <button onClick = {signIn} className='login_signInButton'>로그인</button>

                </form>

                <p>이용 약관에 동의하십니까?</p>
                <button onClick = {register} className='login_registerButton'>회원가입</button>
            </div>
        </div>
    );
};

export default Login;