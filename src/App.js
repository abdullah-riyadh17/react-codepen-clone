import Home from "./components/Home";
import DataProvider from "./context/DataProvider";

function App() {
  return (
    <DataProvider>
      <Home></Home>
    </DataProvider>
  );
}

export default App;
