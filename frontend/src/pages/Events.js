import { useLoaderData } from "react-router-dom";

import EventsList from "../components/EventsList";

function EventsPage() {
  const data = useLoaderData();
  const events = data.events;

  // if (data.isError) {
  //   return <p>{data.message}</p>;
  // }

  return (
    <>
      <EventsList events={events} />
    </>
  );
}

export default EventsPage;

export const loader = async () => {
  // code define in the loader executes in the browser, not on some server
  // you can use any browser APIs
  // you can't use React Hooks
  const response = await fetch("http://localhost:8080/eventss");

  if (!response.ok) {
    // return { isError: true, message: "Could not fetch events!" };
    // throw new Error("Could not fetch events!");
    throw new Response(JSON.stringify({ message: "Could not fetch events!" }), {
      status: 500, // indicate something went wrong on the backend
    });
  } else {
    return response;
  }
};
