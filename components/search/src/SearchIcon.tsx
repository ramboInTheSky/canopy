import React from 'react';
import styled, { Theme, StyledComponent } from '@acadiasoft/styled';

import { Search } from '@acadiasoft/icons-component';


export const SearchIcon = styled(Search.Regular)`
  color: ${ props => props.theme.primary.on };
  flex: none;
  font-size: 1.5rem;
  padding-left: 0.25rem;
`;
