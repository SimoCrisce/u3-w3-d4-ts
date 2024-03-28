import FetchComponent from "./components/FetchComponent";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MyNavbar from "./components/MyNavbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Details from "./components/Details";
function App() {
  return (
    <>
      <BrowserRouter>
        <MyNavbar />
        <Routes>
          <Route path="/" element={<FetchComponent />} />
          <Route path="/details/:articleId" element={<Details />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
