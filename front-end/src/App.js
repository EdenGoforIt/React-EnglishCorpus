import logo from "./logo.svg";
import "./App.css";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import SearchPage from "./pages/SearchPage";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<SearchPage />} path="/"></Route>
      </Routes>
    </BrowserRouter>
  );
};
export default App;
