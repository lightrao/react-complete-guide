import { useLoaderData } from "react-router-dom";

import EventsList from "../components/EventsList";

function EventsPage() {
  const data = useLoaderData();
  const events = data.events;

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
  const response = await fetch("http://localhost:8080/events");

  if (!response.ok) {
    // do sth
  } else {
    return response;
  }
};
