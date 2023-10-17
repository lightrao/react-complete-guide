import { useRouteError } from "react-router-dom";
import PageContent from "../components/PageContent";

function EventsErrorPage(props) {
  // the shape of error object depends on what you throw
  const error = useRouteError();

  let title = "An error from <EventsPage /> occured!";
  let message = "Somthing went wrong!";

  if (error.status === 500) {
    message = error.data.message;
  }

  if (error.status === 404) {
    title = "Not found error from <EventsPage />!";
    message = "Could not found resource or page.";
  }

  return (
    <PageContent title={title}>
      <p>{message}</p>
    </PageContent>
  );
}

export default EventsErrorPage;
