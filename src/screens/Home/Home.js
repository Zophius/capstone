import React from "react";
import "./Home.css";
import { Navabr } from "../Navabr";
import mainPhoto from "../images/1.jpg";
import { Card } from "../MenuCard/Card";
import { Items } from "../items/Items";
import { useNavigate } from "react-router-dom";

export const Home = () => {
  const navigate = useNavigate();

  const handleBook = () => {
    navigate("/reserveTable");
  };
  const handleMenu = () => {
    navigate("/menu");
  };

  return (
    <div>
      <Navabr />
      <div>
        <main className="main">
          <div className="topSection">
            <div className="top">
              <div className="shortIntro">
                <h2>Little Lemon</h2>
                <h4>Chicago</h4>
                <h5>
                  Little Lemon is a family and healthy restaurant serving the
                  most delicious foods. Our special recipes and way of cooking
                  makes us unique. Enjoy a happy meal in a good atmosphere.
                </h5>
                <button className="table" onClick={handleBook}>
                  Reserve a Table
                </button>
              </div>
              <img src={mainPhoto} alt="" width={300} height={400}></img>
            </div>
          </div>
        </main>
      </div>
      <div>
        <div className="menuu">
          <h1>Specials</h1>
          <button onClick={handleMenu}>Menu</button>
        </div>
      </div>
      <div className="cardsMain">
        <div className="Cards">
          {Items.map((project) => (
            <Card
              key={project.title}
              Name={project.title}
              description={project.description}
              imgSrc={project.getImageSrc()}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
