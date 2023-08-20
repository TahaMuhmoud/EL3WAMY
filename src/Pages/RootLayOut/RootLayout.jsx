import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import { Outlet } from "react-router-dom";
import ToTop from "../../Components/ToTop/ToTop";

export default function RootLayout() {
  return (
    <div className="app relative">
        <Navbar />
      <Outlet />
      <ToTop/>
        <Footer />
    </div>
  );
}
