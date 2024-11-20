/*
  useReducer is a React hook that works like useState, 
  but it allows you to use a reducer function to handle state updates. 
*/
import { useState, useReducer } from "react";
import "./App.css";
import chef from "./images/chef.jpg";

function Header({ name, year }) {
  return (
    <header>
      <h1>{name}'s Kitchen</h1>
      <p>Copyright {year}</p>
    </header>
  );
}
const items = [
  "Macaroni and Cheese",
  "Salmon with Potatoes",
  "Tofu with Vegetables",
  "Minestrone Soup"
];

const dishObjects = items.map((dish, i) => ({
  id: i,
  title: dish
}));

function Main({ dishes, openStatus, onStatus }) {
  return (
    <>
      <div>
        <button onClick={() => onStatus(true)}>
          I want to be open
        </button>
        <h2>
          Welcome to this beautiful restaurant!{" "}
          {openStatus ? "Open" : "Closed"}
        </h2>
      </div>
      <main>
        <img
          src={chef}
          height={200}
          alt="A photo of a smiling chef owner"
        />
        <ul>
          {dishes.map((dish) => (
            <li
              key={dish.id}
              style={{ listStyleType: "none" }}
            >
              {dish.title}
            </li>
          ))}
        </ul>
      </main>
    </>
  );
}

function App() {
  // const [status, setStatus] = useState(true);
  // useReducer gets the dispatch function (=switch between true false states) and initial state (=true). 
  const [status, toggle] = useReducer((status) => !status, true);
  return (
    <div>
      <h1>
        {/* We use the status as before. */}
        The restaurant is currently{" "}
        {status ? "open" : "closed"}.
      </h1>
      {/* We don't need to implement here the function logic, we just simply call it. */}
      <button onClick={toggle}>
        {status ? "Close" : "Open"} Restaurant
      </button>
      <Header name="Alex" year={new Date().getFullYear()} />
      <Main
        dishes={dishObjects}
        openStatus={status}
        onStatus={toggle}
      />
    </div>
  );
}

export default App;
