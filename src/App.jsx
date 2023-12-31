import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./container/Footer";
import Home from "./container/Home";
import Menu from "./pages/Menu";
import Cart from "./pages/Cart";
import OrderHistory from "./pages/OrderHistory";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/order-history" element={<OrderHistory />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
