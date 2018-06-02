import React, { Component } from 'react';
import About from './About.js'
import HardWork from './HardWork.js'
import SoftWork from './SoftWork.js'
import AllWork from './AllWork.js'
import Header from './Header.js'
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
      nordstromss16Slide: 0,
      currentHardWork: 0,
      color: 'rgba(0,0,0,0)'
    }
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
      about: false
    })
  }

  backwardHandler = () => {
    if (this.state.hardWork){
      if (this.state.activeProject === 0 && this.state.s27Slide > 0){
        this.setState({s27Slide: this.state.s27Slide - 1})
      } else if (this.state.activeProject === 1 && this.state.nordstromss16Slide > 0){
        this.setState({nordstromss16Slide: this.state.nordstromss16Slide - 1})
      }
    }
  }

  forwardHandler = () => {
    if (this.state.hardWork){
      if (this.state.activeProject === 0 && this.state.s27Slide < 4){
        this.setState({s27Slide: this.state.s27Slide + 1})
      } else if (this.state.activeProject === 1 && this.state.nordstromss16Slide < 4){
        this.setState({nordstromss16Slide: this.state.nordstromss16Slide + 1})
      }
    }
  }

  activateProject = (num) => {
    this.setState({activeProject: num})
  }

  render() {
    return (
      <div className="App" style={{'backgroundColor': this.state.color}}>
        <Header toggleAbout={this.toggleAbout} toggleHardWork={this.toggleHardWork} toggleSoftWork={this.toggleSoftWork} toggleAllWork={this.toggleAllWork} turnOffWork={this.turnOffWork}/>

        { this.state.hardWork ? <HardWork activateProject={this.activateProject} currentHardWork={this.state.currentHardWork} activeProject={this.state.activeProject} s27Slide={this.state.s27Slide} nordstromss16Slide={this.state.nordstromss16Slide}/> : null }
        { this.state.softWork ? <SoftWork /> : null }
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
