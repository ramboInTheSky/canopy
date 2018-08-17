// third party

// first party
import { Theme } from '@acadiasoft/themes';

export const BASE_OPACITY: number = 0.04;

// elevation is zero indexed
export const calcOpacity = (elevation: number) => BASE_OPACITY * (elevation + 1);

// theme has to be optional or Emotion will try to infer theme as props of the styled components
export const boxShadow = (elevation: number) => (props: { theme?: Theme }) => props.theme != undefined
  ? `
  0 0 ${elevation + 2}px ${elevation + 1}px ${props.theme.shadow(calcOpacity(elevation))},
  0 ${elevation + 1}px ${elevation + 2}px 0 ${props.theme.shadow(calcOpacity(elevation) * 2)}
` : undefined;
