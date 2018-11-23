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
      hogsFilterClicked: true,
      hogsFilterWeight: true,
      hogsFilterName: true
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
    this.toggleClicked() // toggles hogsFilterClicked
    const newHogs = this.state.hogs.filter(hog => hog.greased === true) // gets greased Hogs
    this.state.hogsFilterClicked ? this.setState({ hogs: newHogs }) : this.setState({ hogs: hogs }) 
  }
  
  // filter by weight
  filterHogsByWeight = () => {
    this.setState({
      hogsFilterWeight: !this.state.hogsFilterWeight
    })

    this.state.hogsFilterWeight ? 
      this.setState({ hogs: this.state.hogs.sort((a, b) => b['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water'] - a['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water']) }) 
    :
      this.setState({ hogs: this.state.hogs.sort((a, b) => a['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water'] - b['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water']) }) 
  }

  // filter by name
  sortByName = () =>  {
    this.setState({
      hogsFilterName: !this.state.hogsFilterName
    })
    console.log(this.state.hogsFilterName)

    this.state.hogsFilterName ? 
    // filter by name
      this.setState({ hogs: this.state.hogs.sort((a, b) => a.name.localeCompare(b.name) )})
    : 
      this.setState({ hogs: this.state.hogs.sort((a, b) => b.name.localeCompare(a.name) )})

  }






  
  render() {
    const { hogs } = this.state
    const { filterGreasedHogs, filterHogsByWeight, sortByName } = this

    return (
      <div className="App">
        < Nav filterGreasedHogs={ filterGreasedHogs } thisString={"hello"} />
        <button className="ui secondary button" onClick={() => this.filterGreasedHogs()}>
          Displaying { this.state.hogsFilterClicked ? "Greased" : "Not-Greased" }
        </button>

        <button onClick={ () => filterHogsByWeight() } className="ui secondary button">
          Filter By Weight
        </button>

        <button onClick={() => sortByName() } className="ui secondary button">
          Filter By Name
        </button>

        < HogIndex hogs={ hogs }  />

      </div>
    )
  }
}

export default App;
