import { Link } from "react-router-dom";

const ProductsPage = (props) => {
  return (
    <>
      <h1>The Products Page</h1>
      <p>
        Go to <Link to="/">Home page</Link>.
      </p>
      <p>
        <ul>
          <li>Product 1</li>
          <li>Product 2</li>
          <li>Product 3</li>
        </ul>
      </p>
    </>
  );
};

export default ProductsPage;
