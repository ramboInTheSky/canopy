// third party
import React from 'react';
import { library } from '@fortawesome/fontawesome';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// local
import { createIconVariants, determineIconProp, IconInternalProps, PrivateIcon } from './helper';

// actual icons
import puzzlePieceLight from '@fortawesome/fontawesome-pro-light/faPuzzlePiece';
import puzzlePieceRegular from '@fortawesome/fontawesome-pro-regular/faPuzzlePiece';
import puzzlePieceSolid from '@fortawesome/fontawesome-pro-solid/faPuzzlePiece';

library.add(puzzlePieceLight, puzzlePieceRegular, puzzlePieceSolid);

const _Puzzle: PrivateIcon = (props: IconInternalProps) => (
  <FontAwesomeIcon
    {...props}
    icon={determineIconProp('puzzle-piece', props.variant)}
  />
);

export const Puzzle = createIconVariants(_Puzzle);
