import React, { Component } from 'react';
import './About.css'

class About extends Component {
  render() {
    return (
      <div className="About">
        <img  src={require(`./files/images/plus-active.png`)} className="Close" onClick={this.props.toggleAbout} />
        <div className="AboutText">
          <p>Gil Sunshine is an artist and designer working at the intersection of art and architecture. He is currently pursuing a Masters of Architecture at MIT.</p>
          <a href="GIL_SUNSHINE_RESUME_2018_06_11.pdf" className="DownloadLink" download>Click here to download resume.</a>
          <p>Website design and programming by Gil Sunshine.</p>
        </div>
        <br/>
        <a href="mailto:info@gilsunshine.com" class="fa fa-envelope"></a>
        <a href="http://instagram.com/gil_sunshine" class="fa fa-instagram"></a>
        <a href="http://linkedin.com/in/gil-sunshine" class="fa fa-linkedin"></a>
      </div>
    );
  }
}

export default About;
