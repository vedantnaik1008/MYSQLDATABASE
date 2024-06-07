import axios from 'axios';
import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const Update = () => {
    const [data, setData] = useState({
        title: '',
        description: '',
        cover: '',
        price: 0
    });
    const navigate = useNavigate();
    const location = useLocation()

    const bookId = location.pathname.split("/")[2]
    console.log(bookId);
    const handleChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (
            data.title.length === 0 ||
            data.description.length === 0 ||
            data.cover.length === 0 ||
            data.price === 0
        ) {
            alert('please fill in required input fields');
            return;
        }
        try {
            await axios.put(`http://localhost:8800/books/${bookId}`, data);
            navigate('/');
        } catch (error) {
            console.log(error);
        }
        console.log(data);
    };

    return (
        <form onSubmit={handleSubmit}>
            <h1>Update New Book</h1>
            <input
                type='text'
                placeholder='title'
                name='title'
                value={data.title}
                onChange={handleChange}
            />
            <input
                type='text'
                placeholder='description'
                name='description'
                value={data.description}
                onChange={handleChange}
            />
            <input
                type='text'
                placeholder='cover'
                name='cover'
                value={data.cover}
                onChange={handleChange}
            />
            <input
                type='number'
                placeholder='price'
                name='price'
                value={Number(data.price)}
                onChange={handleChange}
            />
            <button type='submit'>Submit</button>
        </form>
    );
};

export default Update;
