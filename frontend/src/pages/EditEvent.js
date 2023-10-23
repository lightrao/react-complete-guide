import { useRouteLoaderData } from "react-router-dom";
import EventForm from "../components/EventForm";

function EditEventPage(props) {
  // error: useLoaderData searches for the closest available loader data,
  // and the highest level at which it looks for data is the route definition
  // of the route for which this component was loaded. So in this case, the highest level it looks
  // is path: "edit" route
  // const data = useLoaderData();
  const data = useRouteLoaderData("event-detail");

  return <EventForm method="patch" event={data.event} />;
}

export default EditEventPage;
