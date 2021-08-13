import React, { Component } from "react";
import Navbar from "./components/navbar/Navbar";
import GlobalStyle from "./styles/Global";
import Issues from "./components/WhyChooseUs/issuesWeSolve";
import ProductsCategory from "./components/Products/productsCategories";
import Footer from "./components/footer/footer";
import WhyChooseUs from "./components/WhyChooseUs/whyChooseUs";
import SearchItems from "./components/search/searchbox";
import Hospdetails from "./components/hospdetails/hospdetails";
import { Switch, Route, useLocation } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
class App extends Component {
  state = {
    navbarOpen: false,
  };

  handleNavbar = () => {
    this.setState({ navbarOpen: !this.state.navbarOpen });
  };

  render() {
    return (
      <div>
        <Navbar
          navbarState={this.state.navbarOpen}
          handleNavbar={this.handleNavbar}
        />
        <div className="site-wrapper">
          <div style={{ marginTop: "100px" }}></div>
          <Switch>
            <Route path="/" exact>
              <SearchItems title="Hospitals in Tirupati" />
              <div style={{ margin: "22px" }}></div>
              <ProductsCategory />
              <div style={{ margin: "30px" }}></div>
              <Issues />
              <div style={{ margin: "30px" }}></div>
              <WhyChooseUs />
              <div style={{ marginTop: "80px" }}></div>
            </Route>
          </Switch>
        </div>
        <Route path="/details" exact>
          <div className="site-wrapper">
            <SearchItems title="SVIMS TIRUPATI" />
            <div style={{ marginBottom: "16px" }}></div>
          </div>
          <Hospdetails />

          <div style={{ marginBottom: "60px" }}></div>
        </Route>
        <Footer />
        <GlobalStyle />
      </div>
    );
  }
}

export default App;
