import React, { Component } from "react";
import GirlImage from "./GirlImage";

class MainContent extends Component {
  render() {
    const allImages = this.props.images.map(img => (
      <div key={img._id} className="col-3"><GirlImage img={img} /></div>
    ));
    
    return (
      <div className="container main_content">
        <div className="row">{allImages}</div>
      </div>
    );
  }
}

export default MainContent;
