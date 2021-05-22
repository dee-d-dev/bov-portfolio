import React from "react";
import Header from "./Header";
import "../css/home.css";
import Footer from "./Footer";
import { gsap, Power3 } from "gsap";
import { TimelineLite } from "gsap/all";
import { useEffect } from "react";

const Home = () => {
  let t1 = new TimelineLite({ delay: 0.2 });

  useEffect(() => {
    t1.from(
      ".left-img",
      { x: -50, opacity: 0, ease: Power3.easeOut, delay: 0.3 },
      "start"
    );
    t1.from(
      ".right-img",
      { x: 50, opacity: 0, ease: Power3.easeOut, delay: 0.5 },
      "start"
    );
  }, []);

  return (
    <div>
      <Header />
      <section className="section">
        <div className="left">
          <img
            src="/icons/funds2.png"
            width="50px"
            alt=""
            className="left-img"
          />
          <img
            src="/icons/photographer.png"
            width="40px"
            alt=""
            className="left-img"
          />
        </div>
        <div className="img-container">
          <img src="/images/home-img.jpg" className="avatar" alt="" />
        </div>
        <div className="right">
          <img
            src="/icons/funds.png"
            width="70px"
            alt=""
            className="right-img"
          />
          <img
            src="/icons/photograph.png"
            width="70px"
            alt=""
            className="right-img"
          />
        </div>
      </section>

      <div className="intro">
        <h3 className="intro-head">Hi, I'm Vincent.</h3>
        <h4>
          A <span>Chartered Accountant</span> and a <span> Photographer</span>
        </h4>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, minima
          ab nobis perferendis cumque temporibus rem magni enim similique
          expedita voluptatem dignissimos consectetur tempora debitis
          aspernatur? Illo soluta molestiae voluptatibus.
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
