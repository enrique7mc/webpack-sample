import React from 'react'
import ReactDOM from 'react-dom'
import './style.scss'

class Message extends React.Component {
	render() {
		return (
			<div>
				<h1>{this.props.title}</h1>
				<p>{this.props.message}</p>
			</div>
		)
	}
}

ReactDOM.render(<Message title="Learn webpack"
	message="Add CSS loaders" />,
				document.getElementById('react-container'))