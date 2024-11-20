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
    At the previous example we saw how to close an open restaurnt and that all we was able to do. 
    Now we want to see how to make that logic more flexible. 
    We set the initial status to the boolean true. 
   */
  const [status, setStatus] = useState(true);

  return (
    <div>
      <h1>
        {/*
          Here we set the status to be open if status true, else closed. So now it will be open. 
          */}
        The restaurant is currently {status ? "open" : "closed"}.
      </h1>
      {/*
        Now here we create the button. 
        If status == true means the restaurant open so the button will be 'Close restaurant' and vice versa. 
        And setStatus will get the oposite of current status. 
       */}
      <button onClick={() => setStatus(!status)}>
        {status ? "Close" : "Open"} Restaurant
      </button>
      <Header name="Alex" year={new Date().getFullYear()} />
      <Main dishes={dishObjects} />
    </div>
  );
}

export default App;
