import React, { Component } from 'react';
import Sculpture27 from './projects/Sculpture27.js'
import GestureDraw from './projects/GestureDraw.js'
import NordstromSS16 from './projects/NordstromSS16.js'
import './HardWork.css'

class HardWork extends Component {

  render() {
    console.log(this.props.activeProject + "hardwork")
    return (
      <div className="HardWork">
        <div className="ProjectContainer">
          <Sculpture27 s27Slide={this.props.s27Slide} currentHardWork={this.props.currentHardWork} activeProject={this.props.activeProject} activateProject={this.props.activateProject}/>
          <br/>
          <GestureDraw gestureDrawSlide={this.props.s27Slide} currentHardWork={this.props.currentHardWork} activeProject={this.props.activeProject} activateProject={this.props.activateProject}/>
          <br/>
          <NordstromSS16 nordstromss16Slide={this.props.nordstromss16Slide} currentHardWork={this.props.currentHardWork} activeProject={this.props.activeProject} activateProject={this.props.activateProject}/>
        </div>
      </div>
    );
  }
}

export default HardWork;
