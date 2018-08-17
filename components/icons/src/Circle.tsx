// third party
import React from 'react';
import { library } from '@fortawesome/fontawesome';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// local
import { createIconVariants, determineIconProp, IconInternalProps, PrivateIcon } from './helper';

// actual icons
import circleLight from '@fortawesome/fontawesome-pro-light/faCircle';
import circleRegular from '@fortawesome/fontawesome-pro-regular/faCircle';
import circleSolid from '@fortawesome/fontawesome-pro-solid/faCircle';

library.add(circleLight, circleRegular, circleSolid);

const _Circle: PrivateIcon = (props: IconInternalProps) => (
  <FontAwesomeIcon
    {...props}
    icon={determineIconProp('circle', props.variant)}
  />
);

export const Circle = createIconVariants(_Circle);
