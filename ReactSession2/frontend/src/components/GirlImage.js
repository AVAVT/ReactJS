import React, { Component } from "react";
import config from "../config";

class GirlImage extends Component {
  render() {
    const comments = this.props.img.comment
      ? this.props.img.comment.map(comment => (
          <p>
            <span class="font-weight-bold">{comment.createdBy.username}</span>:{" "}
            {comment.content}
          </p>
        ))
      : "";

    return (
      <div className="girl_image">
        <img
          style={{ width: "100%" }}
          className="img-fluid"
          src={config.rootPath + this.props.img.imageUrl}
          alt={this.props.img.title}
        />
        <h5>{this.props.img.title}</h5>
        <p>{this.props.img.description}</p>
        {comments}
      </div>
    );
  }
}

export default GirlImage;
