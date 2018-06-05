import React, { Component } from 'react';
import './About.css'

class About extends Component {
  render() {
    return (
      <div className="About">
        <img  src={require(`./files/images/plus-active.png`)} className="Close" onClick={this.props.toggleAbout} />
        <div className="AboutText">
          <p>Gil Sunshine is an artist, designer and software developer currently working towards an MArch at MIT.</p>
        </div>
        <a href="mailto:info@gilsunshine.com" class="fa fa-envelope"></a>
        <a href="http://instagram.com/gil_sunshine" class="fa fa-instagram"></a>
        <a href="http://linkedin.com/in/gil-sunshine" class="fa fa-linkedin"></a>
      </div>
    );
  }
}

export default About;
