import { Route, Routes } from "react-router-dom";
import Login from "./pages/customer/Login";
import HomeOwner from "./pages/owner/HomeOwner";
import HomeCustomer from "./pages/customer/HomeCustomer";
import ProductDetailsPage from "./pages/customer/ProductDetailsPage";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <div>
      <Toaster />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home-owner" element={<HomeOwner />} />
        <Route path="/home-customer" element={<HomeCustomer />} />
        <Route path="/product/:id" element={<ProductDetailsPage />} />
      </Routes>
    </div>
  );
}

export default App;
