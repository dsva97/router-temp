import React from "react";
import { Link } from "react-router-dom";

export const Layout = ({ children }) => {
  return (
    <div
      style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
    >
      <header>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/contact">Contacto</Link>
        </nav>
      </header>
      <main style={{ flexGrow: 1 }}>{children}</main>
      <footer>Footer</footer>
    </div>
  );
};
