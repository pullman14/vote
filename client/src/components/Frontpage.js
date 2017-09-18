import React, {Component} from "react"
import Jumbotron from "./Jumbotron.js"
import FrontpagePolls from "./FrontpagePolls.js"

class Frontpage extends Component{
  render(){
    return(
      <div className="container">
        <Jumbotron />
        <FrontpagePolls featurePoll={this.props.featurePoll} />
      </div>
    )
  }
}

export default Frontpage
