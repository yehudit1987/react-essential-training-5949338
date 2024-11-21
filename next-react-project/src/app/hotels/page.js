// In this function we again just fetching data. 
async function getData() {
  const res = await fetch(
    "https://snowtooth-hotel-api.fly.dev"
  );
  return res.json();
}

//  This will be a child component that gets props of the data and display them to the UI. 
function HotelBlock({ name, capacity }) {
  return (
    <div>
      <h2>{name}</h2>
      <p>{capacity}</p>
    </div>
  );
}

/*
  In this function we get the data by calling the getData function. 
  We then will iterate the data and for each hotel, we will call the children component 'HotelBlock',
  passing it name and capacity of the hotel. 
 */
export default async function Page() {
  const data = await getData();
  return (
    <main>
      <div>
        <h1>Hotel Details</h1>
        <div>
          {data.map((hotel) => (
            <HotelBlock
              key={hotel.id}
              name={hotel.name}
              capacity={hotel.capacity}
            />
          ))}
        </div>
      </div>
    </main>
  );
}
