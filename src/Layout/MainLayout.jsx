import { Outlet } from "react-router-dom";
import Navbar from "../components/Header/Navber/Navbar";
import Footer from "../Pages/Footer/Footer";

const MainLayout = () => {
    return (
        <div className="max-w-7xl mx-auto px-2">
            <Navbar></Navbar>
            <div>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;