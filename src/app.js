import React, { Component } from "react";
import Navbar from "./components/navbar/Navbar";
import GlobalStyle from "./styles/Global";
import Issues from "./components/WhyChooseUs/issuesWeSolve";
import ProductsCategory from "./components/Products/productsCategories";
import Footer from "./components/footer/footer";

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

          <ProductsCategory />
          <div style={{ margin: "30px" }}></div>
          <Issues />
          <div style={{ marginTop: "120px" }}></div>
        </div>
        <Footer />
        <GlobalStyle />
      </div>
    );
  }
}

export default App;
