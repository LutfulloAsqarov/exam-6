import { useState } from "react";
import Header from "./components/header/Header";
import Hero from "./pages/home/hero/Hero";
import Home from "./pages/home/Home";
import Footer from "./components/footer/Footer";
import { Route, Routes } from "react-router-dom";
import SingleProduct from "./pages/singleProduct/SingleProduct";

function App() {
    const [count, setCount] = useState(0);

    return (
        <>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/products/:id" element={<SingleProduct />} />
            </Routes>

            <Footer />
        </>
    );
}

export default App;
