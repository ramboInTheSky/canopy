// third party
import React from 'react';
import { library } from '@fortawesome/fontawesome';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// local
import { createIconVariants, determineIconProp, IconInternalProps, PrivateIcon } from './helper';

// actual icons
import bellLight from '@fortawesome/fontawesome-pro-light/faBell';
import bellRegular from '@fortawesome/fontawesome-pro-regular/faBell';
import bellSolid from '@fortawesome/fontawesome-pro-solid/faBell';

library.add(bellLight, bellRegular, bellSolid);

const _Notification: PrivateIcon = (props: IconInternalProps) => (
  <FontAwesomeIcon
    {...props}
    icon={determineIconProp('bell', props.variant)}
  />
);

export const Notification = createIconVariants(_Notification);
