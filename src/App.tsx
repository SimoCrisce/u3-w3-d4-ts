import FetchComponent from "./components/FetchComponent";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MyNavbar from "./components/MyNavbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Details from "./components/Details";
import Col from "react-bootstrap/Col";
function App() {
  return (
    <>
      <BrowserRouter>
        <MyNavbar />
        <Routes>
          <Route path="/" element={<FetchComponent />} />
          <Route path="/details/:articleId" element={<div>ciao</div>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
