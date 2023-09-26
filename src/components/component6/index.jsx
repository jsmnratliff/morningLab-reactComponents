import React, { useState } from 'react';

function ProductDetailsToggle({ product }) {
  const [isVisible, setIsVisible] = useState(true);

  const handleToggle = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div className="product-details">
      <h2>{product.title}</h2>
      <button onClick={handleToggle}>Toggle Description</button>
      {isVisible && <div className="description">{product.description}</div>}
    </div>
  );
}

export default function App() {
  const product = {
    title: 'Product Title',
    description: 'Product Description goes here...',
  };

  return (
    <div className="App">
      <h1>Product Details Toggle</h1>
      <ProductDetailsToggle product={product} />
    </div>
  );
}