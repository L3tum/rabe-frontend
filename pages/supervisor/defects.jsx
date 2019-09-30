import React from 'react';
import withBasics from '../../components/HOC/withBasics';

class Defects extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-12">
            Gemeldete Mängel
          </div>
        </div>
      </div>
    );
  }
}

export default withBasics(Defects, 'RaBe - Betreuer - Gemeldete Mängel');
