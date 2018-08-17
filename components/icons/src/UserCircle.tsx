// third party
import React from 'react';
import { library } from '@fortawesome/fontawesome';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// local
import { createIconVariants, determineIconProp, IconInternalProps, PrivateIcon } from './helper';

// actual icons
import userCircleLight from '@fortawesome/fontawesome-pro-light/faUserCircle';
import userCircleRegular from '@fortawesome/fontawesome-pro-regular/faUserCircle';
import userCircleSolid from '@fortawesome/fontawesome-pro-solid/faUserCircle';

library.add(userCircleLight, userCircleRegular, userCircleSolid);

const _UserCircle: PrivateIcon = (props: IconInternalProps) => (
  <FontAwesomeIcon
    {...props}
    icon={determineIconProp('user-circle', props.variant)}
  />
);

export const UserCircle = createIconVariants(_UserCircle);
