import React from "react";
import iconFitaCima from "./icon_fita_cima.png";
import iconFitaBaixo from "./icon_fita_baixo.png";

class Main extends React.Component {
  constructor() {
    super();
    this.iconFitaCima = iconFitaCima;
    this.iconFitaBaixo = iconFitaBaixo;
  }

  render() {
    return (
      <>
        <section className="main__section-1">
          <div>
            <h1>Measuring</h1>
            <h1>everything</h1>
          </div>
          <div className="main__section-1__container-image">
            <img src={`${this.iconFitaCima}`} alt="" srcset="" />
          </div>
        </section>
        <section className="main__section-2">
          <div className="main__section-2__info">
            <h1>We are Leader</h1>
            <h1>in Measure Tapes</h1>
            <p>There are 5x the</p>
            <p>circumference of planet</p>
            <p>earth in metric tapes.</p>
          </div>
          <div className="main__section-2__container-image">
            <img src={`${this.iconFitaBaixo}`} alt="" srcset="" />
          </div>
        </section>
      </>
    );
  }
}

export default Main;
