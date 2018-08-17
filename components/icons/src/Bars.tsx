// third party
import React from 'react';
import { library } from '@fortawesome/fontawesome';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// local
import { createIconVariants, determineIconProp, IconInternalProps, PrivateIcon } from './helper';

// actual icons
import barsLight from '@fortawesome/fontawesome-pro-light/faBars';
import barsRegular from '@fortawesome/fontawesome-pro-regular/faBars';
import barsSolid from '@fortawesome/fontawesome-pro-solid/faBars';

library.add(barsLight, barsRegular, barsSolid);

const _Bars: PrivateIcon = (props: IconInternalProps) => (
  <FontAwesomeIcon
    {...props}
    icon={determineIconProp('bars', props.variant)}
  />
);

export const Bars = createIconVariants(_Bars);
