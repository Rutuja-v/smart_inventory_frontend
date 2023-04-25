import React, { useState } from 'react';

const ReturnComponent = ({ productsApi }) => {
  const [productName, setProductName] = useState('');
  const [quantity, setQuantity] = useState(0);

  const handleProductNameChange = (e) => {
    setProductName(e.target.value);
  };

  const handleQuantityChange = (e) => {
    setQuantity(e.target.value);
  };

  const handleReturn = () => {
    // Create a new return object with the returned product information
    const returnObject = {
      productName,
      quantity
    };

    // Add the returned product to the products API
    productsApi.addReturnedProduct(returnObject)
      .then(() => {
        // Clear the input fields after successful return
        setProductName('');
        setQuantity(0);
      })
      .catch(error => {
        console.error('Failed to add returned product:', error);
      });
  };

  return (
    <div>
      <h2>Return Product</h2>
      <label htmlFor="productName">Product Name:</label>
      <input
        type="text"
        id="productName"
        value={productName}
        onChange={handleProductNameChange}
      />
      <br />
      <label htmlFor="quantity">Quantity:</label>
      <input
        type="number"
        id="quantity"
        value={quantity}
        onChange={handleQuantityChange}
      />
      <br />
      <button onClick={handleReturn}>Submit</button>
    </div>
  );
};

export default ReturnComponent;
