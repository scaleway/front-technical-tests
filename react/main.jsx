import { StrictMode, useState, useEffect } from "react";
import { createRoot } from "react-dom/client";

const Root = () => {
  const [products, setProducts] = useState([
    {
      name: "a",
      isInCart: false,
    },
  ]);

  const addToCart = (product) => {
    setProducts([...products, { ...product, isInCart: true }]);
  };

  return (
    <div>
      {products.map((product) => (
        <ProductPage
          key={product.name}
          product={product}
          addToCart={addToCart}
        />
      ))}
    </div>
  );
};

const ProductPage = ({ product, addToCart }) => {
  useEffect(() => {
    if (product.isInCart) {
      alert(`Added ${product.name} to the shopping cart!`);
    }
  }, [product]);

  const handleBuyClick = () => {
    addToCart(product);
  };

  const handleCheckoutClick = () => {
    addToCart(product);
    navigateTo("/checkout");
  };

  return (
    <div
      style={{
        display: "flex",
        gap: 10,
      }}
    >
      <p>{product.name}</p>
      <button type="button" onClick={handleBuyClick}>
        Buy
      </button>
      <button type="button" onClick={handleCheckoutClick}>
        Add to cart
      </button>
    </div>
  );
};

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Root />
  </StrictMode>
);
