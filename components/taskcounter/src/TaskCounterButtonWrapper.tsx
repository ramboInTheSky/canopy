import { boxShadow } from '@acadiasoft/boxshadow-style';

import styled from '@acadiasoft/styled';
import { partyTheme, gradient, borderWidth, counterpartyTheme, combinedTheme } from './Helpers';

interface TaskCounterButtonWrapperProps {
  showBorder: boolean;
}

export const TaskCounterButtonWrapper = styled<TaskCounterButtonWrapperProps, 'div'>('div')`
  background: ${gradient};
  display: flex;
  flex: 1 0 auto;
  flex-direction: column;
  border-radius: 4px;
  ${ (props) => props.showBorder && `
    box-shadow: ${ boxShadow(1)(props)};
    padding: 2px;
  `
  }
`;
