import React from 'react';


import { IconProp } from '@fortawesome/fontawesome';
import { Props } from '@fortawesome/react-fontawesome';

export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;

export type IconVariant = 'solid' | 'regular' | 'light';

export type IconUsed = 'bars' | 'balance-scale' | 'bell' | 'chart-line' | 'circle' | 'cog' | 'cogs' | 'search' | 'envelope' | 'exchange'
                     | 'file-alt' | 'plus-square' | 'puzzle-piece' | 'random' | 'times' | 'university' | 'user-circle' | 'wifi';

export type IconName = Extract<IconProp, IconUsed>;

export interface IconProps extends Omit<Props, 'icon'> {
  onClick?: () => void;
}

export interface IconInternalProps extends IconProps {
  variant: IconVariant;
}

export const determineIconProp = (name: IconName, variant: IconVariant) => (
  {
    prefix: determineIconType(variant),
    iconName: name,
  }
);

export const determineIconType = (subtype: IconVariant): 'fas' | 'far' | 'fal' => {
  switch (subtype) {
    case 'solid': return 'fas';
    case 'regular': return 'far';
    case 'light': return 'fal';
  }
};

export type PrivateIcon = (props: IconInternalProps) => JSX.Element;


export const createIconVariants = (Icon: PrivateIcon) => (
  {
    Solid: (props: IconProps) => (<Icon {...props} variant='solid' />),
    Regular: (props: IconProps) => (<Icon {...props} variant='regular' />),
    Light: (props: IconProps) => (<Icon {...props} variant='light' />),
  }
);
