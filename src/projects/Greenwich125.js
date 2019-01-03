import React, { Component } from 'react';
import '../Project.css'

class Greenwich125 extends Component {
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
      <div className={this.props.activeProject === 3 ? "ActiveProject" : "Project"} onMouseEnter={()=>{this.props.activateProject(3)}}>
        <div className="Slideshow">
          <img className="shadow" className="Slide"
          src={require(`../files/images/Greenwich125/${this.props.greenwich125Slide.toString()}.png`)}
          />
        </div>

        <p className="ProjectTitle">125 Greenwich Model</p>
        <span className="PictureNumber"> {(this.props.greenwich125Slide + 1).toString()} / 4</span>
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
            Wood, Corian, fiberglass rod and lacquer.<br />
            For Snarkitecture<br />
            Role: Concept design, design development, fabrication
            documentation and fabrication management.<br /><br />
            Snarkitecture was tasked with designing a model of the 125
            Greenwich St. development to be used for promotional
            purposes. The resulting model reimagines the city fabric
            as an undulating landscape rendered in fiberglass rod. 125
            Greenwich along with the buildings of the WTC complex
            were constructed from lacquered wood, tying the new
            development to the transportation and business hub.<br /><br />
            The piece was exhibited at Astor Place for NYCxDesign
            2016 and now resides at the sales office for 125 Greenwich
            in 1 WTC.
        </p> : null }
      </div>
    );
  }
}

export default Greenwich125;
