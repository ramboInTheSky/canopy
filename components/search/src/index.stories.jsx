import React from 'react';
import { storiesOf } from '@storybook/react';
import { background } from '../../../storybooks/theme-addon';
import styled from '@acadiasoft/styled';


import { withInfo } from '@storybook/addon-info';
import { Search } from './index.ts';


const _SearchDecorator = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SearchDecorator = (storyFn) => (
  <_SearchDecorator>
    {storyFn()}
  </_SearchDecorator>
)

class SearchWrapper extends React.Component {

  constructor(props) {
    super(props);
    this.state = { searchText: '' };
  }

  render() {
    return <Search searchText={this.state.searchText} setSearchText={(str) => { this.setState({ searchText: str }) }} />
  }
}

storiesOf('Search', module)
  .addDecorator(SearchDecorator)
  .addDecorator(background('primary'))
  .add('interactive', () => (
    <SearchWrapper />
  ))
  .add('with text',
    withInfo({ inline: false })(
      () => <Search searchText={'Filled Search'} setSearchText={(str) => { }} />
    )
  );
