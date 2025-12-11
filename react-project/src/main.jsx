import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

const animals = ["giraffe", "zebra", "bear"]
console.log(animals[1])

createRoot(document.getElementById("root")).render(<App />);
