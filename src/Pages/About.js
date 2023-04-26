import React from "react";
import Do from "../About_Components/Do";
import Experience from "../About_Components/Experience";
import Footer from "../Homepage_Components/Footer";
class About extends React.Component{
  render(){
    return (<div className="about_page">
      <Do/>
      <Experience/>
      <Footer/>
    </div>)
  }
}

export default About