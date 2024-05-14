import { Outlet } from "react-router-dom";
import Header from "../components/Navbar/Header";
import Footer from "../components/Footer/Footer";

const Layout = () => {
  return (
    <>
      <Header />
      <main className="relative mt-12">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
