import React, { useState, useEffect } from 'react';
import { authService } from '../../services';
import Cards from '../../components/cards/index';
import './product.css';

const Product = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [dataProduct, setDataProduct] = useState([]);

  const getProduct = () => {
    authService
      .getProduct()
      .then((res) => {
        // eslint-disable-next-line no-console
        console.log(res);
        setDataProduct(res.data);
      })
      .catch((err) => {
        // eslint-disable-next-line no-console
        console.log(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  useEffect(() => {
    getProduct();
  }, []);

  return (
    <div>
      {isLoading ? <p>loading...</p> : <h1>Data Product</h1>}
      <div className="content">
        {dataProduct.map((product) => {
          return (
            <Cards key={[product.id]}>
              <h3 className="product">{product.description}</h3>
              <div>
                <div className="discount">
                  <p>{product.display_promo_price_percentage}</p>
                </div>
                <h4>{product.display_normal_price}</h4>
              </div>
              <h5>{product.display_price}</h5>
              <p>{product.name}</p>
            </Cards>
          );
        })}
      </div>
    </div>
  );
};

export default Product;
