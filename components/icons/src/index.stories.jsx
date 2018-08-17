import React from 'react';
import { storiesOf } from '@storybook/react';
import { background } from '../../../storybooks/theme-addon';


import styled, { css } from 'react-emotion'

import * as Icons from './index.ts';

const IconWrapper = styled.div`

  color: white;
  div:nth-child(1) {
    font-size: 1rem;
  }
  div:nth-child(2) {
    font-size: 2rem;
  }
  div:nth-child(3) {
    font-size: 3rem;
  }
  div:nth-child(4) {
    font-size: 4rem;
  }
  div:nth-child(5) {
    font-size: 5rem;
  }
`;

const IconDecorator = (storyFn) => (
  <IconWrapper>
    {[1, 2, 3, 4, 5].map(it => storyFn())}
  </IconWrapper>
);

const IconContainer = css`
  flex: 1;
  flex-direction: row;
  display: flex;
  justify-content: space-between;
`;

const IconStyle = css`
  flex: 1;
  margin: 0.5rem;
`;

const createIconsStories = (storiesOfParam) => {
  return Object.entries(Icons)
    .forEach(([key1, Icon]) => {
      storiesOfParam
        .add(`${key1}`, () => (
          <div className={IconContainer}>
            <Icon.Light className={IconStyle} />
            <Icon.Regular className={IconStyle} />
            <Icon.Solid className={IconStyle} />
          </div>
        ))
    })
};

const storiesOfParam = storiesOf('Icons', module)
  .addDecorator(IconDecorator)
  .addDecorator(background('primary'));

createIconsStories(storiesOfParam)
