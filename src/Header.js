import React, { Component } from 'react';
import './Header.css';

class Header extends Component {
  render() {
    return (
      <div className="Header">
        <p className="MyName" onClick={this.props.turnOffWork}>Gil Sunshine</p>
        <p className="HeaderItem" onClick={this.props.toggleHardWork}>Hard Work</p>
        <p className="HeaderItem" onClick={this.props.toggleSoftWork}>Soft Work</p>
        <p className="HeaderItem" onClick={this.props.toggleAllWork}>Work is Work</p>
        <p className="HeaderItem" onClick={this.props.toggleAbout}>About</p>
      </div>
    );
  }
}

export default Header;
