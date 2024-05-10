import { Outlet } from 'react-router-dom';
import Header from '../components/Navbar/Header';
import Footer from '../components/Footer/Footer';

const Layout = () => {
  return (
    <>
      <Header />
      <main className="w-full lg:w-[80%] mx-auto">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
