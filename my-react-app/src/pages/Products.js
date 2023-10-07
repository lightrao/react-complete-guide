import { Link } from "react-router-dom";

const PRODUCTS = [
  { id: "p1", title: "Product 1" },
  { id: "p2", title: "Product 2" },
  { id: "p3", title: "Product 3" },
];

const ProductsPage = (props) => {
  return (
    <>
      <h1>The Products Page</h1>
      <p>
        Go to <Link to="/">Home page</Link>.
      </p>
      <div>
        <ul>
          {PRODUCTS.map((product) => (
            <li key={product.id}>
              <Link to={product.id}>{product.title}</Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default ProductsPage;
