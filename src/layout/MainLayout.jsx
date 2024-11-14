import React from "react";
import Header from "../components/Header";
import LeatesNews from "../components/LeatesNews";
import Navbar from "../components/Navbar";
import LeftAside from "../components/LeftAside";
import RightAside from "../components/RightAside";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div className="font-poppins">
      {/* header section code */}
      <header className="container p-4 mx-auto">
        <Header />
        <section>
          <LeatesNews />
        </section>
        <section className="py-10">
          <Navbar />
        </section>
      </header>

      {/* main section code */}
      <main className="container mx-auto p-4 grid md:grid-cols-12 gap-4">
        <aside className="col-span-3">
          <LeftAside />
        </aside>
        <section className="col-span-6 bg-white p-2">
          <Outlet />
        </section>
        <aside className="col-span-3">
          <RightAside />
        </aside>
      </main>
    </div>
  );
};

export default MainLayout;
