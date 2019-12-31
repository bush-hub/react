import React, { Component } from 'react';
import ReactDom from 'react-dom';

class App extends Component {
	render () {
		return (
			<div>
				<h1>에베베</h1>
				<h2>레스트</h2>
				<h3>산이왔어요</h3>
				<input type='text' placeholder='이름' />
				<input type='submit' value='제출' />
			</div>
		);
	}
}

export default App;