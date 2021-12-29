import React, { Component } from 'react';
import ReactTooltip from 'react-tooltip';
import './styles.css';

export class ToolTip extends Component {
  constructor(props) {
    super(props);
    this.state = {
      position: 'top',
      effect: 'solid',
    };
  }

  changePosition = (place) => {
    this.setState({
      position: place,
    });
  };

  render() {
    const { position, effect } = this.state;
    return (
      <div className="container">
        <h2 className="title">React Tool Tip</h2>
        <div className="hoverOverMe" data-tip data-for="tooltip">
          <p>Hover Over Me</p>
        </div>
        <ReactTooltip id="tooltip" place={position} effect={effect}>
          Thanks for hovering this is a tooltip
        </ReactTooltip>
        <div className="buttonContainer">
          <div
            className={`positionButton ${position === 'top' ? 'active' : ''}`}
            onClick={this.changePosition.bind(this, 'top')}
          >
            <p>Top</p>
          </div>
          <div
            className={`positionButton ${
              position === 'bottom' ? 'active' : ''
            }`}
            onClick={this.changePosition.bind(this, 'bottom')}
          >
            <p>Bottom</p>
          </div>
          <div
            className={`positionButton ${position === 'left' ? 'active' : ''}`}
            onClick={this.changePosition.bind(this, 'left')}
          >
            <p>Left</p>
          </div>
          <div
            className={`positionButton ${position === 'right' ? 'active' : ''}`}
            onClick={this.changePosition.bind(this, 'right')}
          >
            <p>Right</p>
          </div>
        </div>
      </div>
    );
  }
}

export default ToolTip;
