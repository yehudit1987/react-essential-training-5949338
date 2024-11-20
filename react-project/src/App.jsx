/*
  In this demo we will se how to add pictures.
  First notice we have an image file in the path specified below. 
  We then import that image. */
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

// In the Main component we will render the image. 
function Main({ dishes }) {
  return (
    <main>
      <img
        src={chef}  //image source
        height={200}  // size
        alt="A photo of a smiling chef owner"  // short description 
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
  );
}

function App() {
  return (
    <div>
      <Header name="Alex" year={new Date().getFullYear()} />
      <Main dishes={dishObjects} />
    </div>
  );
}

export default App;
