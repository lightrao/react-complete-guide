import MainNavigation from "../components/MainNavigation";

const ErrorPage = (props) => {
  return (
    <>
      <MainNavigation />
      <main>
        <h1>An error occured!</h1>
        <p>Could not found this page!</p>
      </main>
    </>
  );
};

export default ErrorPage;
