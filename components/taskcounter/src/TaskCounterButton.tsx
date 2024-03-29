// third party
import React from 'react';
import { ThemeProvider } from 'emotion-theming';

// first party
import { primaryTheme, Theme } from '@acadiasoft/themes';
import styled from '@acadiasoft/styled';

import { Count } from './Count';
import { partyTheme, gradient, borderWidth, counterpartyTheme, combinedTheme } from './Helpers';
import { TaskCounterBaseButton } from './TaskCounterBaseButton';
import { TaskCounterButtonWrapper } from './TaskCounterButtonWrapper';
import { Title } from './Title';


export type TaskCounterButtonVariant = 'party' | 'counterparty' | 'combined' | 'hidden';

export interface TaskCounterButtonDefaultProps {
  direction: 'row' | 'column';
}

export interface BaseTaskCounterButtonProps<T extends TaskCounterButtonVariant> {
  aggregator: boolean;
  direction: 'row' | 'column';
  variant: T;
  selected: boolean;
  count?: number;
  title?: string;
}

export interface NonHiddenTaskCounterButtonProps<T extends TaskCounterButtonVariant> extends BaseTaskCounterButtonProps<T> {
  count: number;
  title: string;
}

export type TaskCounterButtonProps<T extends TaskCounterButtonVariant> = T extends 'hidden'
  ? BaseTaskCounterButtonProps<T>
  : NonHiddenTaskCounterButtonProps<T>;

const determineTheme = (variant: TaskCounterButtonVariant, selected: boolean): Theme => {
  switch (variant) {
    case 'party': return partyTheme(selected);
    case 'counterparty': return counterpartyTheme(selected);
    case 'combined': return combinedTheme(selected);
    case 'hidden': return primaryTheme;
  }
};


export class TaskCounterButton<T extends TaskCounterButtonVariant> extends React.Component<TaskCounterButtonProps<T>> {

  static defaultProps: Partial<TaskCounterButtonDefaultProps> = {
    direction: 'row',
  };

  render() {
    return (
      <ThemeProvider theme={determineTheme(this.props.variant, this.props.selected)}>
        <TaskCounterButtonWrapper showBorder={this.props.variant === 'combined' && this.props.aggregator}>
          <TaskCounterBaseButton
            aggregator={this.props.aggregator}
            direction={this.props.direction}
            isCombined={this.props.variant === 'combined'}
            selected={this.props.selected}
          >
            <Title direction={this.props.direction}>
              {this.props.title}
            </Title>
            <Count direction={this.props.direction}>
              {this.props.count}
            </Count>
          </TaskCounterBaseButton>
        </TaskCounterButtonWrapper>
      </ThemeProvider>
    );
  }
}
