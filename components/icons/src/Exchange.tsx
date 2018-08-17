// third party
import React from 'react';
import { library } from '@fortawesome/fontawesome';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// local
import { createIconVariants, determineIconProp, IconInternalProps, PrivateIcon } from './helper';

// actual icons
import exchangeLight from '@fortawesome/fontawesome-pro-light/faExchange';
import exchangeRegular from '@fortawesome/fontawesome-pro-regular/faExchange';
import exchangeSolid from '@fortawesome/fontawesome-pro-solid/faExchange';

library.add(exchangeLight, exchangeRegular, exchangeSolid);

const _Exchange: PrivateIcon = (props: IconInternalProps) => (
  <FontAwesomeIcon
    {...props}
    icon={determineIconProp('exchange', props.variant)}
  />
);

export const Exchange = createIconVariants(_Exchange);
