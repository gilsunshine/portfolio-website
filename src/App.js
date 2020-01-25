import React, { Component } from 'react';
import About from './About.js'
import HardWork from './HardWork.js'
import SoftWork from './SoftWork.js'
import AllWork from './AllWork.js'
import Header from './Header.js'
import Footer from './Footer.js'
import './App.css';

class App extends Component {
  constructor(){
    super()
    this.state = {
      about: false,
      hardWork: false,
      softWork: false,
      allWork: false,
      activeProject: 0,
      s27Slide: 0,
      gestureDrawSlide: 0,
      nordstromss16Slide: 0,
      greenwich125Slide: 0,
      slipChairSlide: 0,
      dripLightSlide: 0,
      thinDimensionSlide: 0,
      paintingsSlide: 0,
      currentHardWork: 0,
      backgroundColor: "rgba(0,0,0,0.1)",
    }
  }

  componentWillMount(){
    document.addEventListener("touchstart", function(){}, true)
  }

  toggleAbout = () => {
    this.setState({about: !this.state.about})
  }

  toggleHardWork = () => {
      this.setState({
        hardWork: !this.state.hardWork,
        softWork: false,
        allWork: false
      })
  }

  toggleSoftWork = () => {
      this.setState({
        softWork: !this.state.softWork,
        hardWork: false,
        allWork: false
      })
  }

  toggleAllWork = () => {
      this.setState({
        allWork: !this.state.allWork,
        hardWork: false,
        softWork: false
      })
  }

  turnOffWork = () => {
    this.setState({
      hardWork: false,
      softWork: false,
      allWork: false,
    })
  }

  backwardHandler = () => {
    if (!this.state.hardWork && !this.state.softWork && !this.state.allWork){
      if (this.state.backgroundColor === "yellow"){
        document.body.style.background = "rgba(0,0,0,0.1)";
        this.setState({backgroundColor: "rgba(0,0,0,0.1)"})
      } else {
        document.body.style.background = "red";
        this.setState({backgroundColor: "red"})

      }
    }
    if (this.state.hardWork){
      if (this.state.activeProject === 0 && this.state.s27Slide > 0){
        this.setState({s27Slide: this.state.s27Slide - 1})
      } else if (this.state.activeProject === 1 && this.state.nordstromss16Slide > 0){
        this.setState({nordstromss16Slide: this.state.nordstromss16Slide - 1})
      } else if (this.state.activeProject === 3 && this.state.greenwich125Slide > 0){
        this.setState({greenwich125Slide: this.state.greenwich125Slide - 1})
      } else if (this.state.activeProject === 4 && this.state.slipChairSlide > 0){
        this.setState({slipChairSlide: this.state.slipChairSlide - 1})
      } else if (this.state.activeProject === 5 && this.state.dripLightSlide > 0){
        this.setState({dripLightSlide: this.state.dripLightSlide - 1})
      } else if (this.state.activeProject === 6 && this.state.thinDimensionSlide > 0){
        this.setState({thinDimensionSlide: this.state.thinDimensionSlide - 1})
      } else if (this.state.activeProject === 7 && this.state.paintingsSlide > 0){
        this.setState({paintingsSlide: this.state.paintingsSlide - 1})
      }
    }
  }

  forwardHandler = () => {
    if (!this.state.hardWork && !this.state.softWork && !this.state.allWork){
      if (this.state.backgroundColor === "red"){
        document.body.style.background = "rgba(0,0,0,0.1)";
        this.setState({backgroundColor: "rgba(0,0,0,0.1)"})
      } else {
        document.body.style.background = "yellow";
        this.setState({backgroundColor: "yellow"})

      }
    }
    if (this.state.hardWork){
      if (this.state.activeProject === 0 && this.state.s27Slide < 4){
        this.setState({s27Slide: this.state.s27Slide + 1})
      } else if (this.state.activeProject === 1 && this.state.nordstromss16Slide < 5){
        this.setState({nordstromss16Slide: this.state.nordstromss16Slide + 1})
      } else if (this.state.activeProject === 3 && this.state.greenwich125Slide < 3){
        this.setState({greenwich125Slide: this.state.greenwich125Slide + 1})
      } else if (this.state.activeProject === 4 && this.state.slipChairSlide < 4){
        this.setState({slipChairSlide: this.state.slipChairSlide + 1})
      } else if (this.state.activeProject === 5 && this.state.dripLightSlide < 2){
        this.setState({dripLightSlide: this.state.dripLightSlide + 1})
      } else if (this.state.activeProject === 6 && this.state.thinDimensionSlide < 5){
        this.setState({thinDimensionSlide: this.state.thinDimensionSlide + 1})
      } else if (this.state.activeProject === 7 && this.state.paintingsSlide < 3){
        this.setState({paintingsSlide: this.state.paintingsSlide + 1})
      }
    }
  }

  activateProject = (num) => {
    this.setState({activeProject: num})
  }

  render() {
    return (
      <div className="App">
        <Header toggleAbout={this.toggleAbout} toggleHardWork={this.toggleHardWork} toggleSoftWork={this.toggleSoftWork} toggleAllWork={this.toggleAllWork} turnOffWork={this.turnOffWork}/>

        { this.state.hardWork ? <HardWork activateProject={this.activateProject} currentHardWork={this.state.currentHardWork} activeProject={this.state.activeProject} s27Slide={this.state.s27Slide} nordstromss16Slide={this.state.nordstromss16Slide} greenwich125Slide={this.state.greenwich125Slide} slipChairSlide={this.state.slipChairSlide} dripLightSlide={this.state.dripLightSlide} thinDimensionSlide={this.state.thinDimensionSlide} paintingsSlide={this.state.paintingsSlide}/> : null }
        { this.state.softWork ? <SoftWork activateProject={this.activateProject} currentHardWork={this.state.currentHardWork} activeProject={this.state.activeProject} gestureDrawSlide={this.state.gestureDrawSlide} /> : null }
        { this.state.allWork ? <AllWork /> : null }
        { this.state.about ? <About toggleAbout={this.toggleAbout} /> : null }

        <div onClick={this.backwardHandler} className="Backwards">
          <img
            src={require("./files/images/minus-active.png")}
          />
        </div>
        <div onClick={this.forwardHandler} className="Forwards">
          <img
            src={require("./files/images/plus-active.png")}
          />
        </div>
      </div>
    );
  }
}

export default App;
