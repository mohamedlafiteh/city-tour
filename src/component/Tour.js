import React, { Component } from "react";

export class Tour extends Component {
  render() {
    return (
      <div>
        <article className="tour">
          <div>
            <img width="500" src={this.props.tour.img} />
            <span className="close-btn" />
          </div>
          <div className="tour-info">
            <h3>{this.props.tour.city}</h3>
            <h4>{this.props.tour.name}</h4>
            <h5>{this.props.tour.info}</h5>
            <p>
              Hello my name is Mohamed Ali, and I am practising on react apps{" "}
              {this.props.tour.info}
            </p>
          </div>
        </article>
      </div>
    );
  }
}

export default Tour;
