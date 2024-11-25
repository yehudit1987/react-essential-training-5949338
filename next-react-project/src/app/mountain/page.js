/*
  In Next.js's App Router, components in the app directory run on the server by default.
  Fetching data in server components ensures:
    Faster page load times (since the data is pre-fetched on the server).
    SEO benefits because the fully-rendered HTML (with data) is sent to the client.
*/

/*
  async functions allow us to write asynchronous, 
  non-blocking code using await for operations like fetching data from an API.
 */
async function getData() {
  const res = await fetch("https://snowtooth-api-rest.fly.dev");
  return res.json();
}

/*
  Since this function also depends on the data we are fetching it also defined as async. 
  We use that data and display it in  a table. 
 */
export default async function Page() {
  const data = await getData();
  return (
    <main>
      <h1>Lift Status Info</h1>
      <table>
        {/* table tag to create a table */}
        <thead>
          {/* thaed tag to create table headers */}
          <tr>
            {/* tr tag to define table row */}
            <th>Lift Name</th> {/* th tag to define header */}
            <th>Current Status</th>
          </tr>
        </thead>
        <tbody>
          {/* tbody tag for creating table body */}
          {/* Here we are iterating over data which is list of object which will refer as lift
              For each lift that will be identified with lift.id we are creating table row with 2 elements. 
              Each element is a table cell - lift.name & lift.status */}
          {data.map((lift) => (
            <tr key={lift.id}>
              <td>{lift.name}</td>
              <td>{lift.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
}
