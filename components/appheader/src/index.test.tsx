import * as React from 'react';
import { ThemeProvider } from 'emotion-theming';
import { primaryTheme } from '@acadiasoft/themes';
import { mount } from 'enzyme';
import { AppHeader, Spacer, HeaderElementWrapper } from './index';

// TODO: check that props are flowing to the correct props
// TODO: test onClick handlers are firing properly


describe('<AppHeader />', () => {
  it('should contain 1 HamburguerMenu component', () => {
    const wrapper = mount(
      (
        <ThemeProvider theme={primaryTheme}>
          <AppHeader
            appName={{ thick: 'Client', thin: 'admin' }}
            userName={{ name: 'org.admin', realm: 'Citi' }}
          />
        </ThemeProvider>

      ),
    );

    expect(wrapper.find('HamburgerMenu')).toHaveLength(1);
  });


  it('should contain 1 AppLogo component', () => {
    const wrapper = mount(
      (
        <ThemeProvider theme={primaryTheme}>
          <AppHeader
            appName={{ thick: 'Client', thin: 'admin' }}
            userName={{ name: 'org.admin', realm: 'Citi' }}
          />
        </ThemeProvider>

      ),
    );

    expect(wrapper.find('AppLogo')).toHaveLength(1);
  });


  it('should contain 1 Name component', () => {
    const wrapper = mount(
      (
        <ThemeProvider theme={primaryTheme}>
          <AppHeader
            appName={{ thick: 'Client', thin: 'admin' }}
            userName={{ name: 'org.admin', realm: 'Citi' }}
          />
        </ThemeProvider>

      ),
    );

    expect(wrapper.find('Name')).toHaveLength(1);
  });

  it('should realm is optional on Name Component', () => {
    const wrapper = mount(
      (
        <ThemeProvider theme={primaryTheme}>
          <AppHeader
            appName={{ thick: 'Client', thin: 'admin' }}
            userName={{ name: 'org.admin' }}
          />
        </ThemeProvider>

      ),
    );

    expect(wrapper.find('Name')).toHaveLength(1);
  });

  it('should contain 1 Spacer component', () => {
    const wrapper = mount(
      (
        <ThemeProvider theme={primaryTheme}>
          <AppHeader
            appName={{ thick: 'Client', thin: 'admin' }}
            userName={{ name: 'org.admin', realm: 'Citi' }}
          />
        </ThemeProvider>

      ),
    );
    expect(wrapper.find('Spacer')).toHaveLength(1);
  });

  it('should contain only 1 Spacer component from children', () => {
    const wrapper = mount(
      (
        <ThemeProvider theme={primaryTheme}>
          <AppHeader
            appName={{ thick: 'Client', thin: 'admin' }}
            userName={{ name: 'org.admin', realm: 'Citi' }}
          >
            <Spacer />
          </AppHeader>
        </ThemeProvider>

      ),
    );

    expect(wrapper.find('Spacer')).toHaveLength(1);
  });

  it('should contain 3 HeaderElementWrapper component from children', () => {
    const wrapper = mount(
      (
        <ThemeProvider theme={primaryTheme}>
          <AppHeader
            appName={{ thick: 'Client', thin: 'admin' }}
            userName={{ name: 'org.admin', realm: 'Citi' }}
          >
            <Spacer />
            <HeaderElementWrapper>
              <div/>
            </HeaderElementWrapper>
            <HeaderElementWrapper onClick={() => {}}>
              <div/>
            </HeaderElementWrapper>
          </AppHeader>
        </ThemeProvider>

      ),
    );

    expect(wrapper.find(HeaderElementWrapper)).toHaveLength(3);
  });


});
