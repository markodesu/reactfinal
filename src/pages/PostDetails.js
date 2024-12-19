import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchProductDetails } from '../services/api';

const PostDetails = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        const getProductDetails = async () => {
            try {
                const data = await fetchProductDetails(id);
                setProduct(data);
            } catch (error) {
                console.error('Error fetching product details:', error);
            }
        };

        getProductDetails();
    }, [id]);

    if (!product) return <p>Loading...</p>;

    return (
        <div>
            <h1>{product.name}</h1>
            <p>{product.description}</p>
            <p>Price: ${product.price}</p>
            <img src={product.imageUrl} alt={product.name} />
        </div>
    );
};

export default PostDetails;
