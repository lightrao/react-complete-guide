import { Link } from "react-router-dom";

const ProductsPage = (props) => {
  return (
    <>
      <h1>The Products Page</h1>
      <p>
        Go to <Link to="/">Home page</Link>.
      </p>
    </>
  );
};

export default ProductsPage;
