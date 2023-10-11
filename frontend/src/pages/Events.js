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

export const loader = async () => {
  const response = await fetch("http://localhost:8080/events");

  if (!response.ok) {
    // do sth
  } else {
    const resData = await response.json();
    // my comment:
    // you can access loaded data with help of useLoaderData() in any component on the same level
    // or lower level. that means: you can use useLoaderData() in the element(component) that assgined to
    // the route And in all components(subcomponents) that might be used inside that component

    // gpt comment:
    // The loader function fetches the events data from the server and returns it.
    // You can use the useLoaderData hook to get the data in any component that is
    // the element of this route or its subcomponents.
    return resData.events;
  }
};
