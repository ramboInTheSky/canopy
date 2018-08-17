// third party
import React from 'react';
import { library } from '@fortawesome/fontawesome';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// local
import { createIconVariants, determineIconProp, IconInternalProps, PrivateIcon } from './helper';

// actual icons
import envelopeLight from '@fortawesome/fontawesome-pro-light/faEnvelope';
import envelopeRegular from '@fortawesome/fontawesome-pro-regular/faEnvelope';
import envelopeSolid from '@fortawesome/fontawesome-pro-solid/faEnvelope';

library.add(envelopeLight, envelopeRegular, envelopeSolid);

const _Envelope: PrivateIcon = (props: IconInternalProps) => (
  <FontAwesomeIcon
    {...props}
    icon={determineIconProp('envelope', props.variant)}
  />
);

export const Envelope = createIconVariants(_Envelope);
