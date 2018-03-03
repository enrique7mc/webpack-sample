import React from 'react'
import {render} from 'react-dom'
import './style.scss'

class Message extends React.Component {
	render() {
		return (
			<div>
				<h1>{this.props.title}</h1>
				<p>{this.props.message}</p>
        <div id="image"></div>
			</div>
		)
	}
}

render(<Message title="Learn webpack"
	message="Add webpack 4" />,
        document.getElementById('react-container'))
