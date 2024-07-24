import { useState } from "react";
import Header from "./components/header/Header";
import Hero from "./pages/home/hero/Hero";
import Home from "./pages/home/Home";
import Footer from "./components/footer/Footer";

function App() {
    const [count, setCount] = useState(0);

    return (
        <>
            <Header />
            <Home />
            <Footer />
        </>
    );
}

export default App;
