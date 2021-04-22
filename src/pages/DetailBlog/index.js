import React from 'react'
import { RegisterBg } from '../../assets'
import './detailblog.scss'
import { Gab, Linkk } from '../../components'
import { useHistory } from 'react-router-dom'

const DetailBlog = () => {
    const history = useHistory();
    return (
        <div className="detail-blog-wrapper">
            <img className="img-cover" src={RegisterBg} alt="thumb" />
            <p className="blog-title">title</p>
            <p className="blog-author">author</p>
            <p className="blog-body">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
            <Gab height={20} />
            <Linkk title="kembali Ke Home" onClick={() => history.push('/')} />
            <Gab height={20} />
        </div>
    )
}

export default DetailBlog
