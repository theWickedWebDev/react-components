import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import GridLayout from '../packages/grid-layout';

storiesOf('Grid Layout', module)
  .add('Standard', () => {

    let layout = [
      {i: 'a', x: 0, y: 0, w: 3, h: 3, img: 'zucchini.svg'},
      {i: 'b', x: 4, y: 2, w: 1, h: 1, img: 'radish.svg'},
      {i: 'd1', x: 3, y: 0, w: 1, h: 1, img: 'corn.svg'},
      {i: 'd2', x: 4, y: 0, w: 1, h: 1, img: 'corn.svg'},
      {i: 'd3', x: 3, y: 1, w: 1, h: 1, img: 'corn.svg'},
      {i: 'd4', x: 4, y: 1, w: 1, h: 1, img: 'corn.svg'},
      {i: 'c', x: 3, y: 2, w: 1, h: 1, img: 'leaf-lettuce.svg'},
      {i: 'i', x: 12, y: 0, w: 5, h: 1, img: 'watermelon.svg'},
      {i: 'e', x: 0, y: 4, w: 1, h: 1, img: 'carrot.svg'},
      {i: 'f', x: 1, y: 4, w: 1, h: 1, img: 'carrot.svg'},
      {i: 'g', x: 2, y: 4, w: 1, h: 1, img: 'carrot.svg'},
      {i: 'h', x: 3, y: 4, w: 1, h: 1, img: 'carrot.svg'},
    ];

    return (
      <div>
        <GridLayout
          layout={layout}
        />
      </div>
    );
  });
