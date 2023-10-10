import { useLoaderData } from "react-router-dom";

import EventsList from "../components/EventsList";

function EventsPage() {
  // get access to the "closest loader data"
  const events = useLoaderData();

  return (
    <>
      <EventsList events={events} />
    </>
  );
}

export default EventsPage;
