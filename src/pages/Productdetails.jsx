import React, { useEffect } from 'react';
import { getProduct } from '../redux/features/products/ProductSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

const Productdetails = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  const { product } = useSelector((state) => state.products); // Assuming your state has a `product` key
  console.log("product", product);

  useEffect(() => {
    if (id) {
      dispatch(getProduct(id));
    }
  }, [dispatch, id]);

  return (
    <div style={{
      padding: '40px',
      maxWidth: '900px',
      margin: '0 auto',
      display: 'flex',
      flexDirection: 'row',
      gap: '30px',
      fontFamily: 'Arial, sans-serif'
    }}>
      {product && (
        <div key={product.id}>
          <img
            src={product.image_url ||'placeholder.jpeg'}
            alt={product.name || 'Product Image'}
            style={{
              width: '350px',
              height: '350px',
              objectFit: 'cover',
              borderRadius: '8px',
              boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
            }}
          />

          <div style={{ flex: 1 }}>
            <h2 style={{ fontSize: '28px', marginBottom: '10px' }}>
              {product.name}
            </h2>
            <p style={{ fontSize: '16px', color: '#555', marginBottom: '20px' }}>
              {product.description}
            </p>
            <p style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '20px' }}>
              ₹{product.price.toLocaleString('en-In')}
            </p>

            <button style={{
              padding: '12px 24px',
              backgroundColor: '#007bff',
              color: '#fff',
              border: 'none',
              borderRadius: '4px',
              fontSize: '16px',
              cursor: 'pointer'
            }}>
              Add to Cart
            </button>
              <button style={{
              padding: '12px 24px',
              backgroundColor: '#007bff',
              color: '#fff',
              border: 'none',
              borderRadius: '4px',
              fontSize: '16px',
              cursor: 'pointer',
              marginLeft: '10px'
            }}>
            Buy now
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Productdetails;
