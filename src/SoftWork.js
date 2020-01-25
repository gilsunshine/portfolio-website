import React, { Component } from 'react';
import './SoftWork.css'
import GestureDraw from './projects/GestureDraw.js'

class SoftWork extends Component {

  render() {
    console.log(this.props.activeProject + "softwork")
    return (
      <div className="SoftWork">
        <div className="ProjectContainer">
        <GestureDraw gestureDrawSlide={this.props.s27Slide} currentSoftWork={this.props.currentSoftWork} activeProject={this.props.activeProject} activateProject={this.props.activateProject}/>
        <br/><br/>
        </div>
      </div>
    );
  }
}

export default SoftWork;
