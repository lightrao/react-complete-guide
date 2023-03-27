import ExpenseItem from "./components/ExpenseItem";

function App() {
  return (
    // Under hood JSX will be transformed to javascript code which browser can run
    // declarative way different from imperative way(just javascript)
    <div>
      <h2>Let's get started!</h2>
      <ExpenseItem></ExpenseItem>
    </div>
  );
}

export default App;
