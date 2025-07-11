import { StrictMode, useState, useEffect } from "react";
import { createRoot } from "react-dom/client";

const products = [
  { id: 1, name: "Product 1", price: 1 },
  { id: 2, name: "Product 2", price: 2 },
  { id: 3, name: "Product 3", price: 3 },
  { id: 4, name: "Product 4", price: 4 },
  { id: 5, name: "Product 5", price: 5 },
];

const Root = () => {
  const [cart, setCart] = useState([products[0]]);
  const [total, setTotal] = useState(products[0].price);
  const [cartToSubmit, setCartToSubmit] = useState(null);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  useEffect(() => {
    let total = 0;

    for (const temp of cart) {
      total = total + temp.price;
    }
    setTotal(total);
  }, [cart]);

  useEffect(() => {
    if (cartToSubmit !== null) {
      alert(JSON.stringify(cartToSubmit));
    }
  }, [cartToSubmit]);

  const handleBuy = () => {
    setCartToSubmit(cart.map((cart) => cart.id));
  };

  return (
    <div>
      <h2>Cart</h2>
      {cart.map((cart) => (
        <p>{cart.name}</p>
      ))}
      <p>TOTAL: {total}</p>
      <button onClick={handleBuy}>BUY CART</button>
      <h2>Products</h2>
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
  const handleBuyClick = () => {
    addToCart(product);
    alert("/checkout");
  };

  const handleCartClick = () => {
    addToCart(product);
  };

  return (
    <div
      style={{
        display: "flex",
        gap: 10,
      }}
    >
      <p>{product.name}</p>
      <p>{product.price}</p>
      <button type="button" onClick={handleBuyClick}>
        Add to cart and Buy
      </button>
      <button type="button" onClick={handleCartClick}>
        Add to cart
      </button>
    </div>
  );
};

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Root />
  </StrictMode>,
);
