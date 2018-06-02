import React, { Component } from 'react';
import './About.css'

class About extends Component {
  render() {
    return (
      <div className="About" onClick={this.props.toggleAbout}>
        <p>Gil Sunshine is an artist, designer and software developer currently working towards an MArch at MIT.</p><br/>
        <p>email: info@gilsunshine.com</p>
        <p>instagram: gil_sunshine</p>
      </div>
    );
  }
}

export default About;
