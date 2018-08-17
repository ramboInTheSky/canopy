// third party
import React from 'react';
import CSS from 'csstype';

// first party
import { boxShadow } from '@acadiasoft/boxshadow-style';
import styled from '@acadiasoft/styled';

// local

type keys = 'backgroundColor' | 'height' | 'width' | 'flexGrow' | 'flexShrink' | 'flexBasis';

export interface CardProps extends Pick<CSS.Properties, keys> {
  elevation: number;
}

export const Card = styled<CardProps, 'div'>('div')(props => (
  {
    backgroundColor: props.backgroundColor || props.theme.surface.main,
    borderRadius: '0.25rem',
    boxShadow: boxShadow(props.elevation)(props),
    overflow: 'scroll',

    height: props.height,
    width: props.width,

    flexGrow: props.flexGrow != undefined ? props.flexGrow : 1,
    flexShrink: props.flexShrink != undefined ? props.flexShrink : 0,
    flexBasis: props.flexBasis != undefined ? props.flexBasis : 'auto',
  }
));
