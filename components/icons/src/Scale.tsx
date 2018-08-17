// third party
import React from 'react';
import { library } from '@fortawesome/fontawesome';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// local
import { createIconVariants, determineIconProp, IconInternalProps, PrivateIcon } from './helper';

// actual icons
import balanceScaleLight from '@fortawesome/fontawesome-pro-light/faBalanceScale';
import balanceScaleRegular from '@fortawesome/fontawesome-pro-regular/faBalanceScale';
import balanceScaleSolid from '@fortawesome/fontawesome-pro-solid/faBalanceScale';

library.add(balanceScaleLight, balanceScaleRegular, balanceScaleSolid);

const _Scale: PrivateIcon = (props: IconInternalProps) => (
  <FontAwesomeIcon
    {...props}
    icon={determineIconProp('balance-scale', props.variant)}
  />
);

export const Scale = createIconVariants(_Scale);
