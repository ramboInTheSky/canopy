import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import styled from '@acadiasoft/styled';
import * as Icons from '@acadiasoft/icons-component';
import { Search } from '@acadiasoft/search-component';
import { background } from '../../../storybooks/theme-addon';

import { AppHeader, Spacer, HeaderElementWrapper } from './index.ts';

const appName = {
  thick: 'client',
  thin: 'admin',
}

const userName = {
  name: 'org.admin',
  realm: 'XY Investments',
}

const AppHeaderDecorator = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: stretch;
`;

class SearchWrapper extends React.Component {

  constructor(props) {
    super(props);
    this.state = { searchText: '' };
  }

  render() {
    return <Search searchText={this.state.searchText} setSearchText={(str) => { this.setState({ searchText: str }) }} />
  }
}


storiesOf('AppHeader', module)
  .addDecorator((storyFn) => (<AppHeaderDecorator> {storyFn()} </AppHeaderDecorator>))
  .addDecorator(background('background'))
  .add('default', () => (
    <AppHeader appName={appName} userName={userName} onHamburgerMenuClick={action('HamburgerMenu')} />
  ))
  .add('with children', () => (
    <AppHeader appName={appName} userName={userName} onHamburgerMenuClick={action('HamburgerMenu')} >
      <Spacer />
      <HeaderElementWrapper>
        <SearchWrapper />
      </HeaderElementWrapper>
      <HeaderElementWrapper onClick={action('PlusSquare')}>
        <Icons.PlusSquare.Light />
      </HeaderElementWrapper>
      <HeaderElementWrapper onClick={action('Exchange')} >
        <Icons.Exchange.Light />
      </HeaderElementWrapper>
      <HeaderElementWrapper onClick={action('UserCircle')} >
        <Icons.UserCircle.Light />
      </HeaderElementWrapper>
    </AppHeader>
  ));
