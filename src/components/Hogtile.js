import React, { Component } from "react"


export default class Hogstile extends Component {

    constructor() {
        super()
        this.state = {
            clicked: true
        }
    }
    
    render() {
        
        const { hog } = this.props
        
        return this.state.clicked ?  
            (
            <div className="ui eight wide column">
                    <div onClick={() => this.setState({ clicked: false })} className="ui card">
                    <div class="image">
                        <img src="https://via.placeholder.com/150" />
                    </div>
                    <div className="content">
                        <a className="header">{ hog.name }</a>
                    </div>
                </div>
            </div>
                )
                :
                (
            <div className="ui eight wide column">
                    <div onClick={() => this.setState({ clicked: true })} className="ui card">
                    <div class="image">
                        <img src="https://via.placeholder.com/150" />
                    </div>
                    <div className="content">
                        <p>Name: <a className="header">{hog.name}</a></p>
                        <p>specialty: <a className="header">{hog.specialty}</a></p>
                        <p>Greased: <a className="header">{ hog.greased ? "Greased" : "Not-Greased" }</a></p>
                        <p>Best Medal: <a className="header">{hog["highest medal achieved"]}</a></p>
                            <p>Weight Ratio: <a className="header">{hog["weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water"]}</a></p>
                    </div>
                </div>
            </div>
               )
            

        
    }
} 

