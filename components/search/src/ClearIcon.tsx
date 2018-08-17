import React from 'react';
import styled, { StyledComponent, Theme } from '@acadiasoft/styled';

import { Cross } from '@acadiasoft/icons-component';

export const ClearIcon = styled(Cross.Regular)`
  color: ${ props => props.theme.primary.on };
  flex: none;
  font-size: 1.5rem;
  padding-left: 0.25rem;
`;
