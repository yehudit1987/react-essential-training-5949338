import "./App.css";

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
];

/*
   Main is a component that get dishes which is a list of items.
   It iterates the items and for each dish it display the item. 
   Here we also use css styling. */
function Main({ dishes }) {
  return (
    <ul>
      {dishes.map((dish) => (
        <li style={{ listStyleType: "none" }}>{dish}</li>
      ))}
    </ul>
  );
}

/*
  In the App component, we render Main components with dishes prop that get the value of items.
  We can see the initialization of items above.
 */
function App() {
  return (
    <div>
      <Header name="Alex" year={new Date().getFullYear()} />
      <Main dishes={items} />
    </div>
  );
}

export default App;
