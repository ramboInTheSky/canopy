// third party

// first party
import { boxShadow } from '@acadiasoft/boxshadow-style';
import styled from '@acadiasoft/styled';

export const Footer = styled.footer`
  height: 2rem;
  line-height: 2rem;
  display: flex;
  flex: 0 0 auto;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  background-color: #333;
  color: #bbb;
  box-shadow: ${boxShadow(0)}
`;
