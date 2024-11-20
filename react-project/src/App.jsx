import { useEffect, useReducer } from "react";
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
  const [status, toggle] = useReducer(
    (status) => !status,
    true
  );
  /*
    useEffect gets a function and a dependency array. The dependency array will determine when to fire the function.
    So in case of empty array it will run once. 
    In other cases it will fire whenever the variables in the arrau will change. 
    In our case we print to console the restaurant state whenever it changes. 
   */
  useEffect(() => {
    console.log(
      `The restaurant is ${status ? "open" : "closed"}.`
    );
  }, [status]);

  return (
    <div>
      <h1>
        The restaurant is currently{" "}
        {status ? "open" : "closed"}.
      </h1>
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
