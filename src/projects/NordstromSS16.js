import React, { Component } from 'react';
import '../Project.css'

class NordstromSS16 extends Component {
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
  <div className={this.props.activeProject === 1 ? "ActiveProject" : "Project"}       onMouseEnter={()=>{this.props.activateProject(1)}}>
        <div className="Slideshow">
          <img className="Slide"
          src={require(`../files/images/nordstromss16/${this.props.nordstromss16Slide.toString()}.png`)}
          />
        </div>

        <p className="ProjectTitle">Nordstrom SS16 </p>
        <span className="PictureNumber"> {(this.props.nordstromss16Slide + 1).toString()} / 6</span>
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
            2015<br/>
            Wood, paint and casters.<br/>
            For Snarkitecture<br/>
            Role: Concept design, design development, fabrication
            documentation and fabrication management.<br/><br/>
            The project brief for the set of Nordstrom’s SS16
            catalog stipulated that a single set would have to
            allow the photographer to create the feeling of
            multiple environments. To address this issue, we
            designed a free-standing set on casters that could be
            rotated. On one side, the set appeared as an abstract
            mountainscape and on the other side an abstract
            cave. To achieve this hollow form, the set was built
            from a series of MDF ribs with spacing in between
            the layers to create the illusion of depth.
        </p> : null }
      </div>
    );
  }
}

export default NordstromSS16;
