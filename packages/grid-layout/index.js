// Dependencies
import React, { PropTypes } from 'react';
import ReactGridLayout from 'react-grid-layout';

require('./style.scss');

class GridLayout extends React.Component {

  render() {
    var layout = [
      {i: 'a', x: 0, y: 0, w: 2, h: 2},
      {i: 'b', x: 1, y: 0, w: 1, h: 1},
      {i: 'c', x: 2, y: 0, w: 1, h: 1},
      {i: 'd', x: 3, y: 0, w: 1, h: 1},
      {i: 'e', x: 4, y: 0, w: 1, h: 1},
      {i: 'f', x: 5, y: 0, w: 1, h: 1},
      {i: 'g', x: 6, y: 0, w: 1, h: 1},
      {i: 'h', x: 7, y: 0, w: 1, h: 1},
      {i: 'i', x: 8, y: 0, w: 1, h: 1},
      {i: 'j', x: 9, y: 0, w: 1, h: 1}
    ];
    return (
      <div className="grid-layout">
        <ReactGridLayout
          className="layout"
          layout={layout}
          cols={5}
          rowHeight={60}
          height={600}
          width={600}
          autoSize={false}
          verticalCompact={false}
          useCSSTransforms={true}
        >
          <div key={'a'} className="tile">a</div>
          <div key={'b'} className="tile">b</div>
          <div key={'c'} className="tile">c</div>
          <div key={'d'} className="tile">d</div>
          <div key={'e'} className="tile">e</div>
          <div key={'f'} className="tile">f</div>
          <div key={'g'} className="tile">g</div>
          <div key={'h'} className="tile">h</div>
          <div key={'i'} className="tile">i</div>
          <div key={'j'} className="tile">j</div>
        </ReactGridLayout>
      </div>
    );
  }
}

GridLayout.propTypes = {
};

GridLayout.defaultProps = {
};

export default GridLayout;
