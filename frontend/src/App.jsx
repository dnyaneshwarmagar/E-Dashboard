import "./App.css";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Signup from "./components/Signup";
import { PrivateComponent } from "./components/PrivateComponent";
import Login from "./components/Login"
function App() {
  return (
    <div className="App">
      <h1>E-Dashboard</h1>
      <BrowserRouter>
        <Nav />
        <Routes>
          
          <Route element={<PrivateComponent />}>
            <Route path="/" element={<h1>Product</h1>} />
            <Route path="/add" element={<h1>Add Product</h1>} />
            <Route path="/update" element={<h1>update Product</h1>} />
            <Route path="/logout" element={<h1>Logout</h1>} />
            <Route path="/profile" element={<h1>Profile</h1>} />
          </Route>

          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login/>}/>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
