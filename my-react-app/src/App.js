import { useEffect, Fragment } from "react";
import { useSelector, useDispatch } from "react-redux";

import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import Notification from "./components/UI/Notification";
import { sendCartData } from "./store/cart-slice";

let isInitial = true;

function App() {
  const dispatch = useDispatch();
  const showCart = useSelector((state) => state.uiSliceReducer.cartIsVisible);
  const notification = useSelector(
    (state) => state.uiSliceReducer.notification
  );

  // useSelector sets up a subscription to Redux, whenever Redux store does change,
  // the "App" component function will be re-executed and we will get to the latest state of "cart"
  const cart = useSelector((state) => state.cartSliceReducer);

  // execute when our app starts, It's a problem because this will send the initial (i.e. empty)
  // cart to our backend and overwrite any data stored there.
  useEffect(() => {
    if (isInitial) {
      isInitial = false;
      return;
    }

    // "dispatch" function accept action creators that return functions, redux execute the returned function for you
    // and will give "dispatch" function object as argument to that dispatch parameter automatically
    dispatch(sendCartData(cart));
  }, [cart, dispatch]);

  return (
    <Fragment>
      {notification && (
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />
      )}
      <Layout>
        {showCart && <Cart />}
        <Products />
      </Layout>
    </Fragment>
  );
}

export default App;
