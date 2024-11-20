import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

/* 
  In this demo we just do a previous to the next video. 
  We are demonstarting a way to create list with key and access those values by the keys. 
*/
const [, , third] = ["giraffe", "zebra", "bear"];
console.log(third);  // That will print to console - "bear"

createRoot(document.getElementById("root")).render(<App />);
