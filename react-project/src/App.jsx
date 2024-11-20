/*
  In this demo we will learn about managing states. 
  For that we will first import the useSatate function.
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
  "Minestrone Soup",
];

const dishObjects = items.map((dish, i) => ({
  id: i,
  title: dish,
}));

function Main({ dishes }) {
  return (
    <>
      <div>
        <h2>Welcome to this beautiful restaurant!</h2>
      </div>
      <main>
        <img src={chef} height={200} alt="A photo of a smiling chef owner" />
        <ul>
          {dishes.map((dish) => (
            <li key={dish.id} style={{ listStyleType: "none" }}>
              {dish.title}
            </li>
          ))}
        </ul>
      </main>
    </>
  );
}

function App() {
  /*
    To understand what is the useState function, we print here the what const. 
    From that we can see that useState returns an array, which in what first elemnt is undefind, 
    second element is a function. 
   */
  const what = useState();
  console.log(what);
  /*
    And this is how we use it. 
    We destruct the array that useState returns. We will reference the status with status and the function with setStatus. 
    The initial status - "Open" that will be stored in status. 
    Then later we can use setStatus to change the current status to what ever we want. 
     */
  const [status, setStatus] = useState("Open");

  return (
    <div>
      <h1>The restaurant is currently {status}.</h1>
      {/*
        Here we create a button "Close Restaurant". 
        When clicking on it we are calling the function referncing it with setStatus and sending "Closed"
        as the new state. 
       */}
      <button onClick={() => setStatus("Closed")}>Close Restaurant</button>
      <Header name="Alex" year={new Date().getFullYear()} />
      <Main dishes={dishObjects} />
    </div>
  );
}

export default App;
