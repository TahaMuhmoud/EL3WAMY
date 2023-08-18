import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import { Outlet } from "react-router-dom";

export default function RootLayout() {
  return (
    <div className="app">
        <Navbar />
        <Outlet />
        <Footer />
    </div>
  );
}
