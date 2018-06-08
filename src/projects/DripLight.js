import React, { Component } from 'react';
import '../Project.css'

class DripLight extends Component {
  constructor(){
    super()
    this.state = {
      showAbout: false,
    }
  }

  toggleAbout = () => {
    this.setState({showAbout: !this.state.showAbout})
  }

  render() {
    return (
      <div className={this.props.activeProject === 5 ? "ActiveProject" : "Project"} onMouseEnter={()=>{this.props.activateProject(5)}}>
        <div className="Slideshow">
          <img className="Slide"
          src={require(`../files/images/DripLight/${this.props.dripLightSlide.toString()}.png`)}
          />
        </div>

        <p className="ProjectTitle">Drip Light</p>
        {this.state.showAbout ?
          <div className="AboutWrap">
            <p className="ProjectAbout" onClick={this.toggleAbout}>Hide Info</p>
          </div>
          :
          <div className="AboutWrap">
            <p className="ProjectAbout" onClick={this.toggleAbout}>Show Info</p>
          </div>
        }

        {this.state.showAbout ?
          <p className="ProjectDescription">
            2015<br/>
            Steel, glass, light bulb, candle, cord.<br/>
            For Snarkitecture<br/>
            Role: Concept design, design development, fabrication documentation and fabrication
            management.<br/><br/>
            Drip Light is a candle holder and a light fixture. A candle is suspended above a glass dome
            containing a light bulb, with a continuous bent steel tube joining the candle on one end and
            the power cord for the light fixture on the other. As the candle burns down, the wax drips
            onto the glass below, slowly but continuously building up successive layers of translucent wax.
            Over time, the quality of light emitted from the Drip Light shifts from transparently bright to
            a muted, luminous glow.
        </p> : null }
      </div>
    );
  }
}

export default DripLight;
