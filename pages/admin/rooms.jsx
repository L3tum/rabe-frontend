import React from 'react';
import withBasics from '../../components/HOC/withBasics';

class Rooms extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2">
            Raum 1
          </div>
        </div>
      </div>
    );
  }
}

export default withBasics(Rooms);
