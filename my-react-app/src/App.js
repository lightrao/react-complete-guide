import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/Home";
import ProductsPage from "./pages/Products";
import RootLayout from "./pages/Root";

const browserRouter = createBrowserRouter([
  {
    path: "/main",
    element: <RootLayout />,
    children: [
      { path: "/main/home", element: <HomePage /> },
      { path: "/main/products", element: <ProductsPage /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={browserRouter} />;
}

export default App;
