import React, { Component } from 'react';
import './Header.css';

class Header extends Component {
  render() {
    return (
      <div>
        <div>
          <p className="MyName" onClick={this.props.turnOffWork}>Gil Sunshine</p>
        </div>
        <div className="HeaderItems">
          <p className="HeaderItem" onClick={this.props.toggleHardWork}>Projects</p>
          {/* <p className="HeaderItem" onClick={this.props.toggleSoftWork}>Soft Work</p>
          <p className="HeaderItem" onClick={this.props.toggleAllWork}>Work is Work</p> */}
          <p className="HeaderAbout" onClick={this.props.toggleAbout}>About</p>
        </div>
      </div>
    );
  }
}

export default Header;
