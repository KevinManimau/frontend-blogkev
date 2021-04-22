import React from 'react';
import './link.scss';

const Linkk = ({title, onClick}) => {
    return (
            <p className="link" onClick={onClick}>{title}</p>
    )
}

export default Linkk;
