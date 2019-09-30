import React from 'react';
import withBasics from '../../components/HOC/withBasics';

class CommonDefects extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-12">
            Häufige Mängel
          </div>
        </div>
      </div>
    );
  }
}

export default withBasics(CommonDefects, 'RaBe - Betreuer - Häufige Mängel');
