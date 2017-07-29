// Dependencies
import React, { PropTypes } from 'react';

require('./style.scss');

class Tile extends React.Component {
  render() {
    const { img } = this.props.data;

    return (
      <div className="tile">
        <div className="background"/>
        <div
          className="image"
          style={{
            backgroundImage: `url(` + require('./assets/' + img) + `)`,
          }}/>
      </div>
    );
  }
}

Tile.propTypes = {
  data: PropTypes.object,
};

Tile.defaultProps = {
};

export default Tile;
