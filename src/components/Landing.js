import React from "react";
import "../styles/landing.css";

export default function Landing() {
  return (
    <main className="landing">
      <h2>Best online store ever created</h2>
      <section className="landing-button">
        <button>Shop Now</button>
      </section>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#000b76"
          fill-opacity="1"
          d="M0,64L48,58.7C96,53,192,43,288,69.3C384,96,480,160,576,170.7C672,181,768,139,864,101.3C960,64,1056,32,1152,42.7C1248,53,1344,107,1392,133.3L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        ></path>
      </svg>
    </main>
  );
}
