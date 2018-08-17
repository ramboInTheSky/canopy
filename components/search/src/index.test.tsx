import * as React from 'react';
import { ThemeProvider } from 'emotion-theming';
import { primaryTheme } from '@acadiasoft/themes';
import { mount } from 'enzyme';
import { Search } from './index';

// TODO: check that props are flowing to the correct props
// TODO: test onClick handlers are firing properly


describe('<Search />', () => {

  it('should contain 1 ClearIcon when text is nonempty', () => {
    const wrapper = mount(
      (
        <ThemeProvider theme={primaryTheme}>
          <Search searchText='search' setSearchText={(str: string) => {}}  />
        </ThemeProvider>

      ),
    );

    expect(wrapper.find('ClearIcon')).toHaveLength(1);
  });

  it('should contain 0 ClearIcon when text is empty', () => {
    const wrapper = mount(
      (
        <ThemeProvider theme={primaryTheme}>
          <Search searchText='' setSearchText={(str: string) => {}}  />
        </ThemeProvider>

      ),
    );

    expect(wrapper.find('ClearIcon')).toHaveLength(0);
  });

});
