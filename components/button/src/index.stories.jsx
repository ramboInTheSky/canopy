import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withInfo } from '@storybook/addon-info';
import { background } from '../../../storybooks/theme-addon';
import styled from '@acadiasoft/styled';

import { Button } from './index.tsx';

const actionButton = action('button-click');

const _ButtonDecorator = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ButtonDecorator = (storyFn) => (
  <_ButtonDecorator>
    {storyFn()}
  </_ButtonDecorator>
);

storiesOf('Button', module)
  .addDecorator(ButtonDecorator)
  .addDecorator(background('surface'))
  .add('text', () => (
    <Button onClick={actionButton} variant='text'>CONFIRM</Button>
  ))
  .add('outlined', () => (
    <Button onClick={actionButton} variant='outlined'>CONFIRM</Button>
  ))
  .add('contained', () => (
    <Button onClick={actionButton} variant='contained'>CONFIRM</Button>
  ));

