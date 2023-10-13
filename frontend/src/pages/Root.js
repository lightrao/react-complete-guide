import { Outlet /* useNavigation */ } from "react-router-dom";
import MainNavigaition from "../components/MainNavigation";

function RootLayout(props) {
  // const navigation = useNavigation();

  return (
    <>
      <MainNavigaition />
      <main>
        {/* {navigation.state === "loading" && <p>Loading...</p>} */}
        <Outlet />
      </main>
    </>
  );
}

export default RootLayout;
