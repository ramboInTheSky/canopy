// third party
import React from 'react';
import { library } from '@fortawesome/fontawesome';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// local
import { createIconVariants, determineIconProp, IconInternalProps, PrivateIcon } from './helper';

// actual icons
import fileAltLight from '@fortawesome/fontawesome-pro-light/faFileAlt';
import fileAltRegular from '@fortawesome/fontawesome-pro-regular/faFileAlt';
import fileAltSolid from '@fortawesome/fontawesome-pro-solid/faFileAlt';

library.add(fileAltLight, fileAltRegular, fileAltSolid);

const _Document: PrivateIcon = (props: IconInternalProps) => (
  <FontAwesomeIcon
    {...props}
    icon={determineIconProp('file-alt', props.variant)}
  />
);

export const Document = createIconVariants(_Document);
