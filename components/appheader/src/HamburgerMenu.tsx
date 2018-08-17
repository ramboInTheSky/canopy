// third party
import React from 'react';

// first party
import { Bars } from '@acadiasoft/icons-component';
import { HeaderElementWrapper } from './HeaderElementWrapper';

interface HamburgerMenuProps {
  onClick?: () => void;
}

export const HamburgerMenu = ({ onClick }: HamburgerMenuProps) => (
  <HeaderElementWrapper>
    <Bars.Regular onClick={onClick} />
  </HeaderElementWrapper>
);
