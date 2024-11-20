import "./App.css";
/* 
  In the previous example (02_06e) we were getting a warning in the web console,
  about the items that have no unique key for each item.
  in this example we will see how to solve that warning. 
   */
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

/* 
  Here we will create dishObjects. 
  dishObjects is a list of objects. 
  Each object is construct of 2 key values pair of id and title. 
*/
const dishObjects = items.map((dish, i) => ({
  id: i,
  title: dish
}));

// Now in Main we reference the 2 keys of each object but ofcourse displaying just the title. 
function Main({ dishes }) {
  return (
    <ul>
      {dishes.map((dish) => (
        <li key={dish.id} style={{ listStyleType: "none" }}>
          {dish.title}
        </li>
      ))}
    </ul>
  );
}

// Now in App component we will pass dishObjects to Main. 
function App() {
  return (
    <div>
      <Header name="Alex" year={new Date().getFullYear()} />
      <Main dishes={dishObjects} />
    </div>
  );
}

export default App;
