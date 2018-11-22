import React, { Component } from "react"
import Hogstile from "./Hogtile";



export default class HogIndex extends Component {


    render() {
        const { hogs } = this.props
        return (
            <div className='ui grid container'>
                {
                    hogs.map(hog => <Hogstile hog={ hog } /> )
                }
            </div>

        )
    }

} 