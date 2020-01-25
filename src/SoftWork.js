import React, { Component } from 'react';
import './SoftWork.css'
import GestureDraw from './projects/GestureDraw.js'

class SoftWork extends Component {
  render() {
    return (
      <div className="SoftWork">
        <GestureDraw gestureDrawSlide={this.props.s27Slide} currentHardWork={this.props.currentHardWork} activeProject={this.props.activeProject} activateProject={this.props.activateProject}/>
        <br/><br/>
      </div>
    );
  }
}

export default SoftWork;
