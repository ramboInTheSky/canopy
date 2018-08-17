import React from 'react';
import themes from '../storybooks/theme-addon';
import {
  configure,
  addDecorator
} from '@storybook/react';

import {
  ThemeProvider
} from 'emotion-theming'

import { Container } from './Container';
import {
  primaryTheme,
  darkTheme
} from '../styles/themes/lib/dist/index.js'

const req1 = require.context('../components', true, /\.stories\.jsx?$/)
const req2 = require.context('../storybooks', true, /\.stories\.jsx?$/)

const twittertheme = {
  primary: {
    dark: '#EEEEEE',
    main: '#00aced',
    light: '#EEEEEE',
    on: '#FFFFFF'
  },
  background: {
    main: '#EEEEEE',
    on: '#000000'
  },
  surface: {
    main: '#FFFFFF',
    on: '#000000'
  },
  error: {
    main: '#B00020',
    on: '#FFFFFF'
  },
  shadow: primaryTheme.shadow,
};
const facebooktheme = {
  primary: {
    dark: '#EEEEEE',
    main: '#3b5998',
    light: '#EEEEEE',
    on: '#FFFFFF'
  },
  background: {
    main: '#EEEEEE',
    on: '#000000'
  },
  surface: {
    main: '#FFFFFF',
    on: '#000000'
  },
  error: {
    main: '#B00020',
    on: '#FFFFFF'
  },
  shadow: primaryTheme.shadow,
};

function loadStories() {
  addDecorator(themes([{
      name: "acadiasoft",
      theme: primaryTheme
    },
    {
      name: "acadiasoft dark",
      theme: darkTheme
    },
    {
      name: "twitter",
      theme: twittertheme
    },
    {
      name: "facebook",
      theme: facebooktheme
    },
  ]))
  addDecorator(function (story) {
    return <Container story = {story}/>
  })

  req1.keys().forEach(function (filename) {
    return req1(filename)
  })
  req2.keys().forEach(function (filename) {
    return req2(filename)
  })
}


configure(loadStories, module);
