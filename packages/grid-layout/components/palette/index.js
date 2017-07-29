// Dependencies
import React, { PropTypes } from 'react';
import { defaultColors } from './defaultColors';

require('./style.scss');

class Palette extends React.Component {
  setColor(color) {
    this.setState({
      activeColor: color,
    })
  }

  paletteWidth() {
    const { options, palette } = this.props;
    console.log(options);
    if (options.cols > 0) {
      return (options.cols + 1) * options.paletteSize;
    }
    return (Math.round(Math.sqrt(palette.length)) + 1) * options.paletteSize;
  }

  render() {
    const { palette, onChange, activeColor, options } = this.props;

    return (
      <div
        className="color-palette"
        style={{
          width: this.paletteWidth(),
        }}
      >
        { palette.map((color, index) => {
          let classes = ["color-box"];
          if (color === activeColor) classes.push('active');
          return (
            <div
              key={"color-box-" + index}
              className={classes.join(' ')}
              data-color={color}
              onClick={e => onChange(e.target.getAttribute('data-color'))}
              style={{
                backgroundColor: color,
                width: options.paletteSize,
                height: options.paletteSize,
              }}
            />
          )
        })}
      </div>
    );
  }
}

Palette.propTypes = {
  palette: PropTypes.array,
  activeColor: PropTypes.string,
  options: PropTypes.object,
  onChange: PropTypes.func,
};

Palette.defaultProps = {
  palette: defaultColors,
  onChange: () => false,
  options: {
    paletteSize: 20,
  }
};

export default Palette;
