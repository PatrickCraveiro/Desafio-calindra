import React from "react";
import "../dist/style.min.css";
import Header from "../components/Header/Header";
import Main from "../components/Main/Main";

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
      </>
    );
  }
}

export default App;
