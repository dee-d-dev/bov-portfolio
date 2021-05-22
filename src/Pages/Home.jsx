import React from "react";
import Header from "./Header";
import "../css/home.css";
import Footer from "./Footer";

const Home = () => {
  return (
    <div>
      <Header />
      <section className="section">
        <div className="left">
          <img src="/icons/funds2.png" width="50px" alt="" />
          <img src="/icons/photographer.png" width="40px" alt="" />
        </div>
        <div className="img-container">
          <img src="/images/home-img.jpg" className="avatar" alt="" />
        </div>
        <div className="right">
          <img src="/icons/funds.png" width="70px" alt="" />
          <img src="/icons/photograph.png" width="70px" alt="" />
        </div>
      </section>

      <div className="intro">
        <h3>Hi, I'm Vincent.</h3>
        <h3>
          a <span>Chartered Accountant</span> and a <span> Photographer</span>
        </h3>

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
