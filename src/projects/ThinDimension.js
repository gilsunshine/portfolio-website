import React, { Component } from 'react';
import '../Project.css'

class ThinDimension extends Component {
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
          src={require(`../files/images/ThinDimension/${this.props.thinDimensionSlide.toString()}.png`)}
          />
        </div>

        <p className="ProjectTitle">Thin Dimension</p>
        <p className="ProjectTitle"> {(this.props.thinDimensionSlide + 1).toString()} / 6</p>
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
            2012<br/>
            Yarn, plaster, paint, monofilament net.<br/>
            Zilkha Gallery, Wesleyan University<br/><br/>
            Senior Honors Thesis<br/>
            Role: Research, design and fabrication.<br/><br/>
            “Drawing is the trap of Architecture”-Le Corbusier<br/><br/>
            Thin Dimension is a subversion of the conventions of architectural drawing, in which space and built form are
            conceived through two dimensional graphic practices. As an alternative, the piece presents a literal projection of
            drawing into three dimensions. Here, rather than functioning as a figure of representation, line takes on a physical
            presence. The result is structure that blurs the boundary between the second and third dimensions. From a single
            perspective, the viewer is confronted with what appears to be a flat form. As one circumnavigates the piece and
            walks beneath it, however, its volume and three-dimensional form reveal themselves. The piece is composed of
            approximately 1,300 lines, each 5 feet in length, hanging from a monofilament net. The lines are made from yarn
            dipped in plaster, hung to dry, and then painted. Different points along the outside of the net were hung from the
            ceiling with varying degrees of tension, allowing for the undulated field of lines seen in the final form of the piece.
        </p> : null }
      </div>
    );
  }
}

export default ThinDimension;
