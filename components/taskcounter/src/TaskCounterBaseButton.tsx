// third party
import { withProps } from 'recompose';

// first party
import styled from '@acadiasoft/styled';
import { Theme } from '@acadiasoft/themes';
import { ButtonBase, ButtonBaseProps } from '@acadiasoft/button-component';

import { borderWidth, gradient, partyColor, counterpartyColor } from './Helpers';

interface TaskCounterBaseButtonProps {
  aggregator: boolean;
  direction: 'row' | 'column';
  isCombined: boolean;
  selected: boolean;
}

const backgroundOnHover = `
    content: "";
    position: absolute;
    top: -${borderWidth};
    left: -${borderWidth};
    bottom: -${borderWidth};
    right: -${borderWidth};
    border-radius: 4px;
`;

interface DetermineBorder extends TaskCounterBaseButtonProps {
  theme: Theme;
}

const determineBorder = ({ theme, aggregator, isCombined }: DetermineBorder) => {
  if (aggregator) {
    if (isCombined) {
      return `border: ${0} transparent solid;`;
    } else {
      return `border: ${borderWidth} ${theme.secondary.main} solid;`;
    }
  } else {
    return `border: ${borderWidth} transparent solid;`;
  }
};

// set padding to zero if issues with hover text
export const TaskCounterBaseButton = withProps<ButtonBaseProps, TaskCounterBaseButtonProps>({
  variant: 'outlined',
})(styled<TaskCounterBaseButtonProps, any>(ButtonBase)`
  display: flex;
  flex: 1 0 auto;
  flex-direction: ${ ({ direction }) => direction};
  justify-content: ${ ({ direction }) => direction === 'row' ? 'space-between' : 'center'};
  align-items: stretch;
  ${ determineBorder};
  ${ ({ direction }) => direction === 'column' ? 'line-height: 1rem;' : ''};
  ${ ({ theme, selected }) => selected
    ? `
        border-color: #fff;
        :hover:after{
          background: ${ theme.secondary.main};
          opacity: 0.20;
          ${backgroundOnHover}
        }
        :after {
          background: ${ theme.secondary.main};
          opacity: 0.16;
          ${backgroundOnHover}
        }
      `
    : ''
  }
  ${ ({ theme, aggregator, isCombined }) => aggregator
    ? `
      ${ isCombined && 'box-shadow: none'};
    `
    : `
      :before {
        content: "";
        position: absolute;
        top: -${borderWidth};
        left: -${borderWidth};
        bottom: -${borderWidth};
        width: 0.4rem;
        background: ${isCombined ? gradient : theme.secondary.main};
        border-radius: 4px 0 0 4px;
        z-index: 2;
      }
    `
  }
`);
