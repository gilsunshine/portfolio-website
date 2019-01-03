import React, { Component } from 'react';
import '../Project.css'

class Paintings extends Component {
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
      <div className={this.props.activeProject === 6 ? "ActiveProject" : "Project"} onMouseEnter={()=>{this.props.activateProject(6)}}>
        <div className="Slideshow">
          <img className="shadow" className="Slide"
          src={require(`../files/images/Paintings/${this.props.paintingsSlide.toString()}.png`)}
          />
        </div>

        <p className="ProjectTitle">Stretcher Paintings</p>
        <span className="PictureNumber"> {(this.props.paintingsSlide + 1).toString()} / 4</span>
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
            2016<br />
            Mixed media<br />
            Dimensions Variable<br />
            This series of paintings are made using stretchers to paint abstract shapes
            onto canvas and plastic sheeting. The canvas or plastic sheeting is then
            stretched onto the stretchers. The image of the stretcher is in effect burned
            onto the canvas or plastic sheeting.
            These paintings reveal the underlying structure inherent to all paintings.
            They remind the viewer that while the painting may depict 2D imagery,
            it is a 3D dimensional object with mass and depth. In this sense, these
            paintings are meant to blur the boundary between painting and sculpture
            as media.
        </p> : null }
      </div>
    );
  }
}

export default Paintings;
