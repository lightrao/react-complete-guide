import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/Home";

const browserRouter = createBrowserRouter([
  { path: "/", element: <HomePage /> },
]);

function App() {
  return <RouterProvider router={browserRouter} />;
}

export default App;
