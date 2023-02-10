import { Routes, Route } from "react-router-dom";
import Dashbaord from "./Dashboard";
import Search from "./Search";

const stylingObject = {
  App: {
    width: "100%",
  }
}

function App() {
  return (
    <div className="App" style={stylingObject.App}>
      <Routes>
        <Route path="/" element={<Search />} />
        <Route path="/:handle" element={<Dashbaord />} />
      </Routes>
    </div>
  );
}

export default App;