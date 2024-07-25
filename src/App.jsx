import { useState } from "react";
import Header from "./components/header/Header";
// import Hero from "./pages/home/hero/Hero";
import Home from "./pages/home/Home";
import Footer from "./components/footer/Footer";
import { Route, Routes } from "react-router-dom";
import SingleProduct from "./pages/singleProduct/SingleProduct";
import Cart from "./pages/cart/Cart";
import Order from "./pages/order/Order";
import Check from "./pages/check/Check";
import Complete from "./pages/complete/Complete";
import CreateProduct from "./pages/admin/create-product/CreateProduct";
import ManageProduct from "./pages/admin/manage-product/ManageProduct";
import Admin from "./pages/admin/Admin";
import Wishlist from "./pages/wishlist/Wishlist";

function App() {
    const [count, setCount] = useState(0);

    return (
        <>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/products/:id" element={<SingleProduct />} />
                <Route path="/wishlist" element={<Wishlist />} />

                <Route path="/order" element={<Order />}>
                    <Route path="cart" element={<Cart />} />
                    <Route path="check" element={<Check />} />
                    <Route path="complete" element={<Complete />} />
                </Route>
                <Route path="/admin" element={<Admin />}>
                    <Route path="createProduct" element={<CreateProduct />} />
                    <Route path="manageProduct" element={<ManageProduct />} />
                </Route>
            </Routes>

            <Footer />
        </>
    );
}

export default App;
