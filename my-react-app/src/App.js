import { useEffect } from "react";
import { useSelector } from "react-redux";

import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";

function App() {
  const showCart = useSelector((state) => state.uiSliceReducer.cartIsVisible);

  // useSelector sets up a subscription to Redux, whenever Redux store does change,
  // the "App" component function will be re-executed and we will get to the latest state of "cart"
  const cart = useSelector((state) => state.cartSliceReducer);

  useEffect(() => {
    fetch(
      "https://react-http-post-example-default-rtdb.asia-southeast1.firebasedatabase.app/cart.json",
      {
        method: "PUT", // override existing data
        body: JSON.stringify(cart),
      }
    );
  }, [cart]);

  return (
    <Layout>
      {showCart && <Cart />}
      <Products />
    </Layout>
  );
}

export default App;
