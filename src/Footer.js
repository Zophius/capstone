import React from "react";

function Footer() {
  return (
    <footer>
      <div className="footer__content">
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
        </ul>
        <p>&copy; 2023 Little Lemon. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
