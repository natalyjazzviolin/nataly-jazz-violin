import * as React from "react";
import "../styles/styles.scss";
import Header from "../components/Header";
import Home from "../components/Home";

const IndexPage = () => {
  return (
    <>
      <div className="container">
        <Header />
        <Home />
      </div>
    </>
  );
};

export default IndexPage;
