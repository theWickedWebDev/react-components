// Dependencies
import React, { PropTypes } from 'react';
import translations from './locale/index';
import Palette from './components/palette';

import {
  IntlProvider,
  FormattedMessage,
} from 'react-intl';

require('./style.scss');

class ColorPicker extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      paletteOpen: false,
      activeColor: props.color,
    };
  }

  setColor(color) {
    this.setState({
      activeColor: color,
    })
  }

  render() {
    const { locale, options, palette } = this.props;
    const { activeColor, paletteOpen } = this.state;

    return (
      <IntlProvider locale={locale} messages={translations[locale]}>
        <div className="color-picker-component">
          { paletteOpen ?
            <Palette
              activeColor={activeColor}
              palette={palette}
              options={{
                paletteSize: options.paletteSize,
                cols: options.cols,
              }}
              onChange={color => {
                this.setColor(color);
                this.setState({paletteOpen: false});
              }}
            />
          : null }
          <div
            className="color-container"
            onClick={() => this.setState({paletteOpen: !paletteOpen})}
            style={{
              height: options.size,
              width: options.size,
              backgroundColor: activeColor,
            }}
          />
          <span
            className="color-label"
            style={{
              lineHeight: `${options.size}px`,
            }}
          >
            {activeColor}
          </span>
        </div>
      </IntlProvider>
    );
  }
}

ColorPicker.propTypes = {
  locale: PropTypes.string,
  options: PropTypes.object,
  color: PropTypes.string,
  palette: PropTypes.array,
};

ColorPicker.defaultProps = {
  locale: 'en',
  color: '#fff',
  palette: undefined,
  options: {
    size: 30,
    paletteSize: 15,
    cols: 10,
  }
};

export default ColorPicker;
