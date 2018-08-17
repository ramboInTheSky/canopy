// third party
import React from 'react';
import { library } from '@fortawesome/fontawesome';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// local
import { createIconVariants, determineIconProp, IconInternalProps, PrivateIcon } from './helper';

// actual icons
import plusSquareLight from '@fortawesome/fontawesome-pro-light/faPlusSquare';
import plusSquareRegular from '@fortawesome/fontawesome-pro-regular/faPlusSquare';
import plusSquareSolid from '@fortawesome/fontawesome-pro-solid/faPlusSquare';

library.add(plusSquareLight, plusSquareRegular, plusSquareSolid);

const _PlusSquare: PrivateIcon = (props: IconInternalProps) => (
  <FontAwesomeIcon
    {...props}
    icon={determineIconProp('plus-square', props.variant)}
  />
);

export const PlusSquare = createIconVariants(_PlusSquare);
