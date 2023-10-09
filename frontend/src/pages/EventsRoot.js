import { Outlet } from "react-router-dom";

import EventsNavigation from "../components/EventsNavigation";

function EventsRootLayout(props) {
  return (
    <>
      <EventsNavigation />
      <Outlet />
    </>
  );
}

export default EventsRootLayout;
