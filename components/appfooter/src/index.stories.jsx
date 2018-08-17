// third party
import React from 'react';
import { DateTime } from 'luxon';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

// first party
import { background } from '../../../storybooks/theme-addon';
import styled from '@acadiasoft/styled';
import * as Icons from '@acadiasoft/icons-component';

// local
import { AppFooter, Spacer } from './index.ts';

const AppFooterDecorator = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: end;
  align-items: stretch;
`;

const WifiOn = styled(Icons.Wifi.Solid)`
  color: #64b537;
  margin: 0 0.25rem;
`;

const Cog = styled(Icons.Cog.Solid)`
  margin: 0 0.25rem;
`;


const date = DateTime.local(1994, 7, 1, 16, 20, 0).toJSDate();



storiesOf('AppFooter', module)
  .addDecorator((storyFn) => (<AppFooterDecorator> {storyFn()} </AppFooterDecorator>))
  .addDecorator(background('background'))
  .add('with date', () => (
    <AppFooter date={date} />
  ))
  .add('without date', () => (
    <AppFooter />
  ))
  .add('Margin Manager', () => (
    <AppFooter date={date}>
      <Spacer />
      <WifiOn />
      <Cog />
    </AppFooter>
  ));
