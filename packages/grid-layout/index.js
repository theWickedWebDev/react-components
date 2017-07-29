// Dependencies
import React, { PropTypes } from 'react';
import ReactGridLayout from 'react-grid-layout';
import Tile from './components/tile';

require('./style.scss');

class GridLayout extends React.Component {

  render() {
    const { layout } = this.props;

    return (
      <div className="grid-layout">
        <ReactGridLayout
          className="layout"
          layout={layout}
          cols={5}
          rowHeight={60}
          width={600}
          autoSize={false}
          verticalCompact={false}
          useCSSTransforms={true}
        >
          {
            layout.map((tile, index) => (
              <div key={tile.i}>
                <Tile data={tile}/>
              </div>
            ))
          }
        </ReactGridLayout>
      </div>
    );
  }
}

GridLayout.propTypes = {
  layout: PropTypes.array,
};

GridLayout.defaultProps = {
};

export default GridLayout;
