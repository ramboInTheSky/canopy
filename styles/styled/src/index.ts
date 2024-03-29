import { default as emotion, ThemedReactEmotionInterface } from 'react-emotion';
import { Theme } from '@acadiasoft/themes';

const styled = emotion as ThemedReactEmotionInterface<Theme>;

export {
  css,
  injectGlobal,
  keyframes,
  StyledComponent,
} from 'react-emotion';

export {
  Theme,
};

export default styled;
