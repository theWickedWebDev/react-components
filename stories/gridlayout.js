import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import GridLayout from '../packages/grid-layout';

storiesOf('Grid Layout', module)
  .add('Standard', () => (
    <GridLayout/>
  ));
