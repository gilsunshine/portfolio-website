import React, { Component } from 'react';
import '../Project.css'

class Blur extends Component {
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
      <div className={this.props.activeProject === 0 ? "ActiveProject" : "Project"} onMouseEnter={()=>{this.props.activateProject(0)}}>
        <div className="Slideshow">
          <img className="shadow" className="Slide"
          src={require(`../files/images/Blur/${this.props.blurSlide.toString()}.png`)}
          />
        </div>

        <p className="ProjectTitle">Blur</p>
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
            2017<br />
            Alaskan Yellow Cedar<br />
            9’ x 7’x 8’ (L x W x H)<br />
            For Santiago Calatrava<br />
            Role: Design and fabrication<br /><br />
            Sculpture 27 is part of a series of large wood
            sculptures that draw inspiration from biological
            forms. Sculpture 27 is one of three similar
            sculptures that I have worked on for Santiago
            Calatrava.<br /><br />
            The sculptures begin as analog sketches and
            sketch models, which are translated into a digital
            model using Rhino and Grasshopper. They are
            constructed through a combination of digital and
            traditional woodworking techniques.<br /><br />
            Sculpture 27 has been partially hollowed out and
            is weighted with lead bricks at the base in order
            to strategically position the center of gravity for
            maximum stability.
        </p> : null }
      </div>
    );
  }
}

export default Blur;
