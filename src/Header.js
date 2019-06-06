import React, { Component } from 'react';
import './Header.css';

class Header extends Component {
  render() {
    return (
      <div className="NameWrap">
        <div className="NameWrap">
          <p className="MyName" onClick={this.props.turnOffWork}>Under construction...</p>
        </div>
        <div className="HeaderItems">
          // <p className="HeaderItem" onClick={this.props.toggleHardWork}>Projects</p>
          <p className="HeaderAbout" onClick={this.props.toggleAbout}>About</p>
        </div>
      </div>
    );
  }
}

export default Header;
