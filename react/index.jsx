const Root = () => {
  const [products, setProducts] = useState([
    {
      name: "a",
      isInCart: false,
    },
  ]);

  const addToCart = (product) => {
    setProducts([...products, product]);
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
      showNotification(`Added ${product.name} to the shopping cart!`);
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
    <div>
      <button type="button" onClick={handleBuyClick}>
        Buy
      </button>
      <button type="button" onClick={handleCheckoutClick}>
        handleCheckoutClickt
      </button>
    </div>
  );
};
