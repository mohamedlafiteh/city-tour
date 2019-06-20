import React from "react";
import Tour from "./component/Tour";
import tourData from "./component/tourData";
class TourList extends React.Component {
  state = {
    tours: tourData
  };
  render() {
    const tours = this.state.tours.map(tour => {
      return <Tour key={tour.id} tour={tour} />;
    });
    return (
      <div>
        <section className="tourlist">{tours}</section>
      </div>
    );
  }
}

export default TourList;
