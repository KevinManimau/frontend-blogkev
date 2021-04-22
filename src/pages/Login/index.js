import React from 'react'
import { LoginBg } from '../../assets';
import { Input, Button, Gab, Linkk} from '../../components';
import { useHistory } from 'react-router-dom';

const Login = () => {
    const history = useHistory();
    return (
        <div className="main-page">
            <div className="left">
                <img src={LoginBg} className="bg-image" alt="imageBg" />
            </div>
            <div className="right">
                <p className="title">Login</p>
                <Input label="Email" placeholder="Email" />
                <Gab height={18} />
                <Input label="Password" type="password" placeholder="Password" />
                <Gab height={50} />
                <Button title="Login" OnClick={() => history.push('/')} />
                <Gab height={60}/>
                <Linkk title="Belum punya akun, silakan daftar" onClick={() => history.push('/register')} />
            </div>
        </div>
    )
}

export default Login
