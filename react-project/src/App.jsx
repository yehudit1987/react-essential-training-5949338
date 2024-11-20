import "./App.css";
/* 
  Here we can see other way to refernce the props. 
  Instead of using the props.attribute we can chose in the child component, which attributes exactly we want to fetch. 
  Just receive their names in curly braces and then refer them by their names.*/
function Header({ name, year }) {
  return (
    <header>
      <h1>{name}'s Kitchen</h1>
      <p>Copyright {year}</p>
    </header>
  );
}

function App() {
  return (
    <div>
      <Header name="Alex" year={new Date().getFullYear()} />
      <main>
        <h2>We serve the most delicious food around</h2>
      </main>
    </div>
  );
}

export default App;
