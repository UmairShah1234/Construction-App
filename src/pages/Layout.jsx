import React from "react";
import { Outlet, ScrollRestoration } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import TopLoadingBar from "../components/TopLoadingBar";

const Layout = () => {
  return (
    <div>
      <Header />
      <TopLoadingBar />
      <Outlet />
      <Footer />
      <ScrollRestoration />
    </div>
  );
};

export default Layout;
