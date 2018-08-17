// third party
import React from 'react';
import { library } from '@fortawesome/fontawesome';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// local
import { createIconVariants, determineIconProp, IconInternalProps, PrivateIcon } from './helper';

// actual icons
import cogsLight from '@fortawesome/fontawesome-pro-light/faCogs';
import cogsRegular from '@fortawesome/fontawesome-pro-regular/faCogs';
import cogsSolid from '@fortawesome/fontawesome-pro-solid/faCogs';

library.add(cogsLight, cogsRegular, cogsSolid);

const _Cogs: PrivateIcon = (props: IconInternalProps) => (
  <FontAwesomeIcon
    {...props}
    icon={determineIconProp('cogs', props.variant)}
  />
);

export const Cogs = createIconVariants(_Cogs);
