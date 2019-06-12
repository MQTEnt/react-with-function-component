import React from 'react';
import axios from 'axios';

import Auth from './Auth';

const Blog = (props) => {
    const getProducts = () => {
        const token = localStorage.getItem('token');

        axios.get('http://localhost:8000/api/products?token=' + token)
        .then(function (response) {
            // handle success
            console.log(response.data);
        })
        .catch(function (error) {
            Auth.removeToken();
        })
    }

    return <div>
        <h3>Blog Title</h3>
        <p>Blog Content...</p>
        <p><button onClick={getProducts}>Get Products</button></p>
    </div>
}

export default Blog;