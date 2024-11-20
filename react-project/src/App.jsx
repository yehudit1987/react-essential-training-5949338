import "./App.css";
//We spoke about using vars in the content we want to render, now we will demonstarte the use of props. 
/* In React, JSX props (short for properties) are a mechanism for passing data from a parent component 
    to a child component. They are similar to attributes in HTML but are more powerful because 
    they can handle dynamic data, functions, and other JavaScript expressions. 
*/
function Header(props) {
  return (
    <header>
      <h1>{props.name}'s Kitchen</h1>
      <p>Copyright {props.year}</p>
    </header>
  );
}

//App is the parent component which will pass properties to the child component Header. 
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
