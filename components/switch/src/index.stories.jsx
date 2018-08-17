import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withInfo } from '@storybook/addon-info';
import { background } from '../../../storybooks/theme-addon';
import styled from '@acadiasoft/styled';

import { Switch } from './index.tsx';

const _SwitchDecorator = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SwitchDecorator = (storyFn) => (
  <_SwitchDecorator>
    {storyFn()}
  </_SwitchDecorator>
)

class SwitchWrapper extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      switched: false
    }
  }

  render() {
    return (
      <Switch switched={this.state.switched} label={this.props.label} onClick={() => this.setState({ switched: !this.state.switched })} />
    )
  }
}

storiesOf('Switch', module)
  .addDecorator(SwitchDecorator)
  .addDecorator(background('surface'))
  .add('interactive', () => (
    <SwitchWrapper />
  ))
  .add('interactive with label', () => (
    <SwitchWrapper label='Test' />
  ))
  .add('unchecked', () => (
    <Switch />
  ))
  .add('checked', () => (
    <Switch switched />
  ))
  .add('with label', () => (
    <Switch switched label="Test" />
  ));

