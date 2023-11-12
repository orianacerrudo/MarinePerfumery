import { Outlet } from "react-router-dom";
import { Footer } from "../footer/Footer";
import { Navbar } from "../navbar/Navbar";

export const Layout = () => {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div style={{ minHeight: "80vh" }}>
        <Outlet />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};
