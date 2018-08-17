// third party
import React from 'react';
import { library } from '@fortawesome/fontawesome';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// local
import { createIconVariants, determineIconProp, IconInternalProps, PrivateIcon } from './helper';

// actual icons
import randomLight from '@fortawesome/fontawesome-pro-light/faRandom';
import randomRegular from '@fortawesome/fontawesome-pro-regular/faRandom';
import randomSolid from '@fortawesome/fontawesome-pro-solid/faRandom';

library.add(randomLight, randomRegular, randomSolid);

const _Random: PrivateIcon = (props: IconInternalProps) => (
  <FontAwesomeIcon
    {...props}
    icon={determineIconProp('random', props.variant)}
  />
);

export const Random = createIconVariants(_Random);
