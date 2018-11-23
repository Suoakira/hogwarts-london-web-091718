import piggy from '../porco.png'
import React from 'react'

// passed down props as argument // dont need this cause its not a class.
const Nav = (props) => {
	const { filterGreasedHogs } = props
	return (
		<div className="navWrapper">
			<span className="headerText">Hogwarts</span>
			<div className="TwirlyPig">
				
			</div>
				<a onClick={ () => filterGreasedHogs() }>Filter Greased Hogs </a>
			<div>

			</div>
			<span className="normalText">A React App for County Fair Hog Fans</span>
		</div>
	)
}

export default Nav
