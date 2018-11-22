import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import hogs from '../porkers_data';
import HogIndex from "./HogIndex"


class App extends Component {

  constructor() {
    super()
    this.state = {
      hogs: [],
      hogsFilterClicked: false
    }
  }

  componentDidMount() {
    this.setState({hogs: hogs})
  }

  toggleClicked = () => {
    this.setState({ 
      hogsFilterClicked: !this.state.hogsFilterClicked
    })
  }

  filterGreasedHogs = () => {
    this.toggleClicked()
    const newHogs = this.state.hogs.filter(hog => hog.greased === true)

    this.state.hogsFilterClicked ? this.setState({ hogs: newHogs }) : this.setState({ hogs: hogs })
    console.log(newHogs)
    
  }
  
  render() {
    const { hogs } = this.state

    return (
      <div className="App">
        < Nav />
        <button className="ui secondary button" onClick={() => this.filterGreasedHogs()}>

          Filter Greased {this.state.hogsFilterClicked ? "Greased" : "Not Greased" }
          </button>

        < HogIndex hogs={ hogs }  />

      </div>
    )
  }
}

export default App;
