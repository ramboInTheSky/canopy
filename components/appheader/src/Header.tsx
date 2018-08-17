// third party

// first party
import styled from '@acadiasoft/styled';
import { boxShadow } from '@acadiasoft/boxshadow-style';

// local
import { headerHeight } from './variables';

export const Header = styled.header`
  display: flex;
  flex: 0 0 auto;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  height: ${headerHeight};
  position: relative;
  background-color: ${ ({ theme }) => theme.primary.main};
  color: ${ ({ theme }) => theme.primary.on};
  padding-right: 0.5rem;
  box-shadow: ${boxShadow(0)}
`;
