import React from 'react';
import { ThemeProvider } from 'emotion-theming'
import { SELECT, SET } from '../shared/events';

export class ThemeProviderWrapper extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      themeName: this.props.themeWrappers[0].name
    }


  }

  componentDidMount() {
    this.props.channel.on(SELECT, (themeName) => {
      this.setState({ themeName: themeName });
      console.log('on SELECT')
      console.log(JSON.stringify(themeName))
    });
  }

  render() {
    return (
      <ThemeProvider theme={this.props.themeWrappers.find(it => it.name === this.state.themeName).theme}>
        {this.props.children}
      </ThemeProvider>
    )
  }

}

// ThemeProviderWrapper.propTypes = {
//   themes: PropTypes.array,
//   channel: PropTypes.shape({
//     emit: PropTypes.func,
//     on: PropTypes.func,
//     removeListener: PropTypes.func,
//   }),
// };
