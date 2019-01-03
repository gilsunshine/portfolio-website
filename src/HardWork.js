import React, { Component } from 'react';
import Sculpture27 from './projects/Sculpture27.js'
import GestureDraw from './projects/GestureDraw.js'
import NordstromSS16 from './projects/NordstromSS16.js'
import Greenwich125 from './projects/Greenwich125.js'
import SlipChair from './projects/SlipChair.js'
import DripLight from './projects/DripLight.js'
import ThinDimension from './projects/ThinDimension.js'
import './HardWork.css'

class HardWork extends Component {

  render() {
    console.log(this.props.activeProject + "hardwork")
    return (
      <div className="HardWork">
        <div className="ProjectContainer">
          <Sculpture27 s27Slide={this.props.s27Slide} currentHardWork={this.props.currentHardWork} activeProject={this.props.activeProject} activateProject={this.props.activateProject}/>
          <br/><br/>
          <GestureDraw gestureDrawSlide={this.props.s27Slide} currentHardWork={this.props.currentHardWork} activeProject={this.props.activeProject} activateProject={this.props.activateProject}/>
          <br/><br/>
          <NordstromSS16 nordstromss16Slide={this.props.nordstromss16Slide} currentHardWork={this.props.currentHardWork} activeProject={this.props.activeProject} activateProject={this.props.activateProject}/>
          <br/><br/>
          <Greenwich125 greenwich125Slide={this.props.greenwich125Slide} currentHardWork={this.props.currentHardWork} activeProject={this.props.activeProject} activateProject={this.props.activateProject}/><br/><br/>
          <SlipChair slipChairSlide={this.props.slipChairSlide} currentHardWork={this.props.currentHardWork} activeProject={this.props.activeProject} activateProject={this.props.activateProject}/><br/><br/>
          <DripLight dripLightSlide={this.props.dripLightSlide} currentHardWork={this.props.currentHardWork} activeProject={this.props.activeProject} activateProject={this.props.activateProject}/><br/><br/>
          <ThinDimension thinDimensionSlide={this.props.thinDimensionSlide} currentHardWork={this.props.currentHardWork} activeProject={this.props.activeProject} activateProject={this.props.activateProject}/><br/>
          <br/>
          <br/>
        </div>
      </div>
    );
  }
}

export default HardWork;
