import React, { Component } from 'react';
import '../Project.css'

class GestureDraw extends Component {
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
      <div className={this.props.activeProject === 2 ? "ActiveProject" : "Project"} onMouseEnter={()=>{this.props.activateProject(2)}}>
        <div className="Slideshow">

          <iframe width="90%" height="400" src="https://www.youtube.com/embed/UEEfLbL0nCs" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
          {/* <img className="shadow" className="Slide"
          src={require(`../files/images/GestureDraw/${this.props.s27Slide.toString()}.png`)}
          /> */}
        </div>

        <p className="ProjectTitle">Gesture Draw</p>
        {this.state.showAbout ?
          <div className="AboutWrap">
            <p className="ProjectAbout" onClick={this.toggleAbout}>Hide Info</p>
          </div>
          :
          <div className="AboutWrap">
            <p className="ProjectAbout" onClick={this.toggleAbout}>Show Info</p>
          </div>}

        {this.state.showAbout ?
          <p className="ProjectDescription">
            2018<br />
            Augmented Reality Drawing App<br />
            Role: Concept, Design and Programming<br /><br />
            Gesture Draw is an augmented reality app that allows
            users to draw three dimensionally by extruding shapes
            through space.<br /><br />
            The app was created using React Native on the Expo platform. Three.js was used to create
        </p> : null }
      </div>
    );
  }
}

export default GestureDraw;
