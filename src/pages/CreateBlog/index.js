import React from 'react'
import { Input, Button, Upload, TextArea, Gab, Linkk } from '../../components'
import './createblog.scss'
import { useHistory } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { setForm, setImgPreview, postToAPI } from '../../config/redux/action'

const CreateBlog = () => {
    const {form, imgPreview} = useSelector(state => state.createBlogReducer);
    // const {title, body, image} = form;
    const dispatch = useDispatch();

    // const [title, setTitle] = useState('');
    // const [body, setBody] = useState('');
    // const [image, setImage] = useState('');
    // const [imagePreview, setImagePreview] = useState(null);
    const history = useHistory();

    const onSubmit = () => {
        postToAPI(form)
    }

    const onImageUpload = (e) => {
        const file = e.target.files[0];
        dispatch(setForm('image',file));
        dispatch(setImgPreview(URL.createObjectURL(file)))
    }
    return (
        <div className="blog-post">
            <Linkk title="kembali" onClick={() => history.push('/')} />
            <p className="title">Create New Blog Post</p>
            <Input label="Post title" onChange={(e) => dispatch(setForm('title', e.target.value))} />
            <Upload onChange={(e) => onImageUpload(e)} img={imgPreview} />
            <TextArea onChange={(e) => dispatch(setForm('body', e.target.value))} />
            <Gab height={20} />
            <div className="button-action">
                <Button title="save" onClick={onSubmit} />
            </div>
            <Gab height={20} />
        </div>
    )
}

export default CreateBlog
