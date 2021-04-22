import React from 'react';
import './register.scss';
import { RegisterBg } from '../../assets';
import { Input, Button, Gab, Linkk} from '../../components';
import { useHistory } from 'react-router-dom';

const Register = () => {
    const history = useHistory();
    return (
        <div className="main-page">
            <div className="left">
                <img src={RegisterBg} className="bg-image" alt="imageBg" />
            </div>
            <div className="right">
                <p className="title">Register</p>
                <Input label="Full Name" placeholder="Full Name" />
                <Gab height={18} />
                <Input label="Email" placeholder="Email" />
                <Gab height={18} />
                <Input label="Password" type="password" placeholder="Password" />
                <Gab height={50} />
                <Button title="Register" onClick={() => history.push('/login')} />
                <Gab height={60}/>
                <Linkk title="Kembali ke Login" onClick={() => history.push('/login')} />
            </div>
        </div>
    )
}

export default Register
