// third party
import React from 'react';
import { library } from '@fortawesome/fontawesome';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// local
import { createIconVariants, determineIconProp, IconInternalProps, PrivateIcon } from './helper';

// actual icons
import universityLight from '@fortawesome/fontawesome-pro-light/faUniversity';
import universityRegular from '@fortawesome/fontawesome-pro-regular/faUniversity';
import universitySolid from '@fortawesome/fontawesome-pro-solid/faUniversity';

library.add(universityLight, universityRegular, universitySolid);

const _University: PrivateIcon = (props: IconInternalProps) => (
  <FontAwesomeIcon
    {...props}
    icon={determineIconProp('university', props.variant)}
  />
);

export const University = createIconVariants(_University);
