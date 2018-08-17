import React from 'react';
import { storiesOf } from '@storybook/react';
import { background } from '../../../storybooks/theme-addon';
import styled from '@acadiasoft/styled';

import { Card, FLEX_NONE } from './index.ts';

const _CardDecorator = styled.div`
  margin: 2rem;
  display: flex;
  flex: 1 0 auto;
  justify-content: center;
  align-items: stretch;
`;

const Strips = styled.div`

  background: repeating-linear-gradient(
    45deg,
    #606dbc,
    #606dbc 10px,
    #465298 10px,
    #465298 20px
  );
  border: 2px hotpink solid;
  height: 100%;
  box-sizing: border-box;
`;

const CardDecorator = (storyFn) => (
  <_CardDecorator>
    {storyFn()}
  </_CardDecorator>
);

storiesOf('Card', module)
  .addDecorator(CardDecorator)
  .addDecorator(background('background'))
  .add('regular', () => (
    <Card elevation={0} />
  ))
  .add('fixed width and height', () => (
    <Card {...FLEX_NONE} height={'200px'} width={'200px'} elevation={0} />
  ))
  .add('scrollable', () => (
    <Card {...FLEX_NONE} height={'500px'} width={'500px'} elevation={0} >
      <div style={{ height: '120vh', width: '120vw' }} />
    </Card>
  ))
  .add('regular with striped content', () => (
    <Card elevation={0} >
      <Strips />
    </Card>
  ))
  .add('fixed width and height with striped content', () => (
    <Card {...FLEX_NONE} height={'200px'} width={'200px'} elevation={0} >
      <Strips />
    </Card>
  ))
  .add('scrollable with striped content', () => (
    <Card {...FLEX_NONE} height={'500px'} width={'500px'} elevation={0} >
      <Strips style={{ height: '120vh', width: '120vw' }} />
    </Card>
  ))
  .add('elevation 0', () => (
    <Card {...FLEX_NONE} height={'200px'} width={'200px'} elevation={0} />
  ))
  .add('elevation 1', () => (
    <Card {...FLEX_NONE} height={'200px'} width={'200px'} elevation={1} />
  ))
  .add('elevation 2', () => (
    <Card {...FLEX_NONE} height={'200px'} width={'200px'} elevation={2} />
  ))
  .add('elevation 3', () => (
    <Card {...FLEX_NONE} height={'200px'} width={'200px'} elevation={3} />
  ))
  .add('custom color', () => (
    <Card backgroundColor={'#ed843f'} elevation={0} />
  ));


