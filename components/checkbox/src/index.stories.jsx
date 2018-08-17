import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withInfo } from '@storybook/addon-info';
import { background } from '../../../storybooks/theme-addon';
import styled from '@acadiasoft/styled';

import { CheckBox } from './index.ts';

const _CheckBoxDecorator = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CheckBoxDecorator = (storyFn) => (
  <_CheckBoxDecorator>
    {storyFn()}
  </_CheckBoxDecorator>
);

class CheckBoxWrapper extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      checked: false
    }
  }

  render() {
    return (
        <CheckBox checked={this.state.checked} label={this.props.label} onClick={() => this.setState({ checked: !this.state.checked })} />
    )
  }
}

storiesOf('CheckBox', module)
  .addDecorator(CheckBoxDecorator)
  .addDecorator(background('surface'))
  .add('interactive', () => (
    <CheckBoxWrapper />
  ))
  .add('interactive with label', () => (
    <CheckBoxWrapper label='Test' />
  ))
  .add('unchecked', () => (
    <CheckBox />
  ))
  .add('checked', () => (
    <CheckBox checked />
  ))
  .add('with label', () => (
    <CheckBox checked label="Test" />
  ));

