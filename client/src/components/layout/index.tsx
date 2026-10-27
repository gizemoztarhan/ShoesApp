import { type FC } from "react";
import { Outlet } from "react-router-dom";
import Header from "./header";
import Footer from "./footer";
const Layout: FC = () => {
  return (
    <div className="flex flex-col min-h-[calc(100vh-64px)]">
      <Header />

      <main className="flex-1">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};


export default Layout;
