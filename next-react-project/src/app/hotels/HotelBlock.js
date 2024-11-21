/*
  Client component is a componenet which render entirely in the browser. 
  Allow interactivity using hooks and event handlers.
  
  By default at Next.js in the app directory all components are server componenets. 
  To create a client component we assign it at the top - "use client"; 
*/
"use client";
import Image from "next/image";

// We create that function with export default so we can use it outside.
export default function HotelBlock({ id, name, capacity }) {
  const imageLoader = ({ src }) => {
    return `/hotels/${src}.jpeg`;
  };  // this is just an imageLoader that for each src it receives (id) it return the correct image. 
  return (
    <div>
      <h2>{name}</h2>
      <p>{capacity}</p>
      {/* Next is the Image component which takes src (id) and loader function */}
      <Image src={id} width={300} height={300} loader={imageLoader} /> 
    </div>
  );
}
