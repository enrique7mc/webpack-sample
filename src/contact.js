import React from 'react'
import ReactDOM from 'react-dom'
import './style.scss'

class Contact extends React.Component {
	render() {
		return (
			<div>
				<h1>This is the contact page</h1>
			</div>
		)
	}
}

ReactDOM.render(<Contact/>, document.getElementById('react-container'))
