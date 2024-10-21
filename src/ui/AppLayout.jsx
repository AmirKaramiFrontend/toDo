import { Outlet } from "react-router-dom";
import Footer from "../layout/Footer";
import Header from "../layout/Header";

const AppLayout = function(){
    return (
    <>
        <Header />
        <Outlet />
        <Footer />
    </>);
}

export default AppLayout;