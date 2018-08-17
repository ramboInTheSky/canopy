// third party
import React from 'react';
import { library } from '@fortawesome/fontawesome';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// local
import { createIconVariants, determineIconProp, IconInternalProps, PrivateIcon } from './helper';

// actual icons
import cogLight from '@fortawesome/fontawesome-pro-light/faCog';
import cogRegular from '@fortawesome/fontawesome-pro-regular/faCog';
import cogSolid from '@fortawesome/fontawesome-pro-solid/faCog';

library.add(cogLight, cogRegular, cogSolid);

const _Cog: PrivateIcon = (props: IconInternalProps) => (
  <FontAwesomeIcon
    {...props}
    icon={determineIconProp('cog', props.variant)}
  />
);

export const Cog = createIconVariants(_Cog);
