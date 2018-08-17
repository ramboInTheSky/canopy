// third party
import React from 'react';
import { library } from '@fortawesome/fontawesome';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// local
import { createIconVariants, determineIconProp, IconInternalProps, PrivateIcon } from './helper';

// actual icons
import wifiLight from '@fortawesome/fontawesome-pro-light/faWifi';
import wifiRegular from '@fortawesome/fontawesome-pro-regular/faWifi';
import wifiSolid from '@fortawesome/fontawesome-pro-solid/faWifi';

library.add(wifiLight, wifiRegular, wifiSolid);

const _Wifi: PrivateIcon = (props: IconInternalProps) => (
  <FontAwesomeIcon
    {...props}
    icon={determineIconProp('wifi', props.variant)}
  />
);

export const Wifi = createIconVariants(_Wifi);
