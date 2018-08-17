// third party
import React from 'react';

// first party
import styled from '@acadiasoft/styled';
import { headerHeight } from '../variables';

const nameStyle = `
  vertical-align: middle;
  line-height: ${headerHeight};
`;

const Thick = styled.span`
  ${nameStyle}
  font-weight: 700;
`;

const Thin = styled.span`
  ${nameStyle}
  font-weight: 300;
`;

const NameContainer = styled.div`
  text-transform: uppercase;
  font-size: 1rem;
  line-height: ${headerHeight};
  user-select: none;
  margin-right: 0.5rem;
`;

export interface NameProps {
  thick: string;
  thin: string;
}

export const Name = ({ thick, thin }: NameProps) => (
  <NameContainer>
    <Thick>
      {thick}
    </Thick>
    <Thin>
      {thin}
    </Thin>
  </NameContainer>
);
