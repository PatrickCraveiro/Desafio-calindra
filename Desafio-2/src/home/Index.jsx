import React from "react";
import "../dist/style.min.css";
import Header from "../components/Header/Header";
import Main from "../components/Main/Main";
import Footer from "../components/Footer/Footer";

class App extends React.Component {
  constructor() {
    super();
    console.log("oi");
  }

  render() {
    return (
      <>
        <Header></Header>
        <Main></Main>
        <Footer></Footer>
      </>
    );
  }
}

export default App;
