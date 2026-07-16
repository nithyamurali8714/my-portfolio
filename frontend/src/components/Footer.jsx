import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">

      <div className="wrap footer-inner">

        <p>
          © {new Date().getFullYear()} Nithya Murali. All Rights Reserved.
        </p>

        <p className="footer-mono">
          Designed & Developed with ❤️ using React, Node.js, Express.js & MongoDB
        </p>

      </div>

    </footer>
  );
}