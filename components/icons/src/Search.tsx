// third party
import React from 'react';
import { library } from '@fortawesome/fontawesome';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// local
import { createIconVariants, determineIconProp, IconInternalProps, PrivateIcon } from './helper';

// actual icons
import searchLight from '@fortawesome/fontawesome-pro-light/faSearch';
import searchRegular from '@fortawesome/fontawesome-pro-regular/faSearch';
import searchSolid from '@fortawesome/fontawesome-pro-solid/faSearch';

library.add(searchLight, searchRegular, searchSolid);

const _Search: PrivateIcon = (props: IconInternalProps) => (
  <FontAwesomeIcon
    {...props}
    icon={determineIconProp('search', props.variant)}
  />
);

export const Search = createIconVariants(_Search);
