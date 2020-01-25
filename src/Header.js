import React, { Component } from 'react';
import './Header.css';

class Header extends Component {
  render() {
    return (
      <div className="NameWrap">
        <div className="NameWrap">
          <p className="MyName" onClick={this.props.turnOffWork}>Gil Sunshine</p>
        </div>
        <div className="HeaderItems">
          <p className="HardWork" onClick={this.props.toggleHardWork}>Hard Work</p>
          <p className="SoftWork" onClick={this.props.toggleSoftWork}>Soft Work</p>
          <p className="HeaderAbout" onClick={this.props.toggleAbout}>About</p>
        </div>
      </div>
    );
  }
}

export default Header;
