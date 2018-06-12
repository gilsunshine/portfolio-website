import React, { Component } from 'react';
import '../Project.css'

class SlipChair extends Component {
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
      <div className={this.props.activeProject === 4 ? "ActiveProject" : "Project"} onMouseEnter={()=>{this.props.activateProject(4)}}>
        <div className="Slideshow">
          <img className="Slide"
          src={require(`../files/images/SlipChair/${this.props.slipChairSlide.toString()}.png`)}
          />
        </div>

        <p className="ProjectTitle">Slip Chair</p>
        <p className="ProjectTitle"> {(this.props.slipChairSlide + 1).toString()} / 5</p>
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
            2016<br/>
            Wood, marble.<br/>
            For Snarkitecture<br/>
            Role: Concept design, design development, fabrication documentation and
            production management.<br/><br/>
            A chair that appears to be sinking into the ground, with an unlevel seat,
            is corrected by a marble volume. Rotated on two axis, the chair appears
            tippy but is in fact made extremely stable by the weight of the marble.
        </p> : null }
      </div>
    );
  }
}

export default SlipChair;
