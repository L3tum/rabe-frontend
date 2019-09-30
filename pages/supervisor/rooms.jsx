import React from 'react';
import withBasics from '../../components/HOC/withBasics';

class Rooms extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-12">
            Betreute Räume
          </div>
        </div>
      </div>
    );
  }
}

export default withBasics(Rooms, 'RaBe - Betreuer - Betreute Räume');
