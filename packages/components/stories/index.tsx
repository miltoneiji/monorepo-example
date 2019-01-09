import React from 'react';
import { storiesOf } from '@storybook/react';

import { Button } from '../src';

storiesOf('Components', module)
  .add('Button', () => (
    <Button onClick={() => {}} title={'Click me!'} />
  ));
