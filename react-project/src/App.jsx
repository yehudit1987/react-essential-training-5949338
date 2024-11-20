/*
  In this demo we will see how to change states from child componenets. 
  We will do it by using props. 
 */
import { useState } from "react";
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

/*
  In here we create new butoon that is using the function. 
  We also print the current status as part of h2 
*/
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
  const [status, setStatus] = useState(true);
    /*
      So in this App component we define the status and setStatus as before. 
      Now we will also use it in the Main component. 
      We are sending openStatus which will represent the status. 
      We also send onStatus which will represent the function setStatus. */
  return (
    <div>
      <h1>
        The restaurant is currently{" "}
        {status ? "open" : "closed"}.
      </h1>
      <button onClick={() => setStatus(!status)}>
        {status ? "Close" : "Open"} Restaurant
      </button>
      <Header name="Alex" year={new Date().getFullYear()} />
      <Main
        dishes={dishObjects}
        openStatus={status}
        onStatus={setStatus}
      />
    </div>
  );
}

export default App;
