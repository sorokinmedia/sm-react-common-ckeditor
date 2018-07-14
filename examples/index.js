import React, { Component } from 'react';
import { render } from 'react-dom';
import CKEditor from '../lib';

class App extends Component {
	handleChangeAnswer = (e) => {
		console.log(e.tagret.value);
	}

	render() {
		return (
			<div>
				<CKEditor
					initialValue="sdf"
					onChange={this.handleChangeAnswer}
				/>
			</div>
		)
	}
}

App.propTypes = {}
App.defaultProps = {}

render(<App />, document.getElementById('root'));
