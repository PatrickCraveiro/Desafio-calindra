import React from "react";
import iconFitaCima from "./icon_fita_cima.png";

class Main extends React.Component {
  constructor() {
    super();
    this.iconFitaCima = iconFitaCima;
    console.log("oi");
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
        <section className="main__section-2"></section>
      </>
    );
  }
}

export default Main;
