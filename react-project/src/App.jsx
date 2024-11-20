// In this video we are talking about jsx syntax.
import "./App.css";
// We can create vars which then we will use in the element.
let language = "React";
let moon = "🌙"; //To open emoji bar click on windows button + . (dot)

function App() {
  return (
    <h1>
      Hello {language.toUpperCase()} {moon}!!
    </h1>
  );
}

export default App;
