import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import ColorPicker from '../packages/color-picker';

const defaultColors = [
  '#fff',
  '#ccc',
  '#808080',
  '#333',
  '#000',

  '#ffe6e6',
  '#ff4d4d',
  '#ff0000',
  '#990000',

  '#ffc299',
  '#ff944d',
  '#ff6600',
  '#993d00',

  '#ffffb3',
  '#ffff4d',
  '#ffff00',
  '#808000',

  '#c2f0c2',
  '#85e085',
  '#33cc33',
  '#1f7a1f',

  '#b3e0ff',
  '#66c2ff',
  '#0099ff',
  '#004d80',

  '#ecb3ff',
  '#d966ff',
  '#cc33ff',
  '#8600b3',

  '#ecd9c6',
  '#d9b38c',
  '#996633',
  '#4d3319',
];


storiesOf('Color Picker', module)
  .add('Standard', () => (
    <ColorPicker
      palette={defaultColors}
      options={{
        size: 60,
        paletteSize: 30,
        cols: 6,
      }}
    />
  ));
