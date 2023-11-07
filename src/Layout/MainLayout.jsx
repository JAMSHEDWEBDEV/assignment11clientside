import { Outlet } from "react-router-dom";
import Navbar from "../components/Header/Navber/Navbar";

const MainLayout = () => {
    return (
        <div className="max-w-7xl mx-auto">
            <Navbar></Navbar>
            <div>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default MainLayout;