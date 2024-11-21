/*
  This function defined with export default since other file is about to import it and use it or use a lin to navigate to. 
  In our case /src/app/layout.js is using Links in the Header component to navigate that route. 
*/
export default function Page() {
  return (
    <main>
      <h1>Lift Status Info</h1>
    </main>
  );
}
