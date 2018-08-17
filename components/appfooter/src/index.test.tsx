import * as React from 'react';
import { ThemeProvider } from 'emotion-theming';
import { primaryTheme } from '@acadiasoft/themes';
import { mount } from 'enzyme';
import { AppFooter, Spacer } from './index';

// TODO: check that props are flowing to the correct props
// TODO: test onClick handlers are firing properly


describe('<AppFooter />', () => {

  it('should contain LastLogin component if date is present', () => {
    const wrapper = mount(
      (
        <ThemeProvider theme={primaryTheme}>
          <AppFooter
            date={new Date()}
          />
        </ThemeProvider>

      ),
    );
    expect(wrapper.find('LastLoginDate')).toHaveLength(1);
  });

  it('should not contain LastLogin component if date is not present', () => {
    const wrapper = mount(
      (
        <ThemeProvider theme={primaryTheme}>
          <AppFooter/>
        </ThemeProvider>

      ),
    );
    expect(wrapper.find('LastLoginDate')).toHaveLength(1);
  });


  it('should contain 1 Spacer component', () => {
    const wrapper = mount(
      (
        <ThemeProvider theme={primaryTheme}>
          <AppFooter />
        </ThemeProvider>

      ),
    );
    expect(wrapper.find('Spacer')).toHaveLength(1);
  });

  it('should contain only 1 Spacer component from children', () => {
    const wrapper = mount(
      (
        <ThemeProvider theme={primaryTheme}>
          <AppFooter>
            <Spacer />
          </AppFooter>
        </ThemeProvider>

      ),
    );

    expect(wrapper.find('Spacer')).toHaveLength(1);
  });

});
