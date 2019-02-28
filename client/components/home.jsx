import React from 'react';
import Projects from "./projects.jsx";
import About from "./about.jsx";
import Contact from "./contact.jsx";
require("./style.scss");

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: "home"
    };
    this.changeView = this.changeView.bind(this);
    this.renderView = this.renderView.bind(this);
  }
  
  componentDidMount() {
    this.setState({
      page: "home"
    })
  }

  changeView(view) {
    this.setState({
      page: view
    })
  }

  renderView() {
    if (this.state.page === "home") {
      return (
        <div className="nameContainer">
        <div className="firstName">Anthony</div>
        <div className="lastName">Quattrocchi</div>
        <div className="bio">software engineer | web-developer | fun dude</div>
      </div>
      )
    }
    if (this.state.page === "about") {
      return (
        <About></About>
      )
    }
    if (this.state.page === "applications") {
      return (
        <Projects></Projects>
      )
    }
    if (this.state.page === "contact") {
      return (
        <Contact></Contact>
      )
    }
  }


  render() {
     return  (
       
    <div className="parallax">
        <div className="stars1"></div>
        <div className="stars2"></div>
        <div className="stars3"></div>
        <div className="stars4"></div>
      
      <div className="header">
        <div className="hbutton" onClick={() => this.changeView("home")}>home</div>
        <div className="hbutton" onClick={() => this.changeView("about")}>about</div>
        <div className="hbutton" onClick={() => this.changeView("applications")}>applications</div>
        <div className="hbutton" onClick={() => this.changeView("contact")}>contact</div>
      </div>
        
        <div className="main">
         {this.renderView()}
        </div>

        

      </div>
       
     )
  }
}


export default Home;

