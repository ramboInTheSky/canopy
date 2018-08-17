// third party
import React from 'react';
import { library } from '@fortawesome/fontawesome';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// local
import { createIconVariants, determineIconProp, IconInternalProps, PrivateIcon } from './helper';

// actual icons
import timesLight from '@fortawesome/fontawesome-pro-light/faTimes';
import timesRegular from '@fortawesome/fontawesome-pro-regular/faTimes';
import timesSolid from '@fortawesome/fontawesome-pro-solid/faTimes';

library.add(timesLight, timesRegular, timesSolid);

const _Cross: PrivateIcon = (props: IconInternalProps) => (
  <FontAwesomeIcon
    {...props}
    icon={determineIconProp('times', props.variant)}
  />
);

export const Cross = createIconVariants(_Cross);
