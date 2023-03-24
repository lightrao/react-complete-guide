// the first file to be executed
import ReactDOM from "react-dom/client";

import "./index.css";
import App from "./App"; // JSX component

// chose the div tag in index.html with id of "root" as a start point at which to render react UI
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
