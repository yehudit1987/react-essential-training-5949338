// A react component is a function that return a little bit of UI. 
import "./App.css";

// This is the header component
function Header() {
  return (
    //These are jsx tags but we can think about them as html tags. 
    <header>
      <h1>Eve's Kitchen</h1>
    </header>
  );
}

//This is the app component
function App() {
  return (
    // We can render a component (such as header) as part of other component (=app). 
    // In case of multiple, we need to wrap them with <div> tags. 
    <div>
      <Header />
      <main>
        <h2>We serve the most delicious food around</h2>
      </main>
    </div>
  );
}

export default App;
