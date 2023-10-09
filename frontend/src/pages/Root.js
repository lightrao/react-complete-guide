import { Outlet } from "react-router-dom";
import MainNavigaition from "../components/MainNavigation";

function RootLayout(props) {
  return (
    <>
      <MainNavigaition />
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default RootLayout;
