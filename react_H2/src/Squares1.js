import React from 'react';

class Squares1 extends React.Component {
	constructor(props){
		super(props)
		this.state = {
			colors: ['Red', 'Blue']
		}
	}

	RenderSquare(i) {
		let color = this.state.colors[i]
		return(
			<div className='childSquare' onClick={() => {this.setState({colors: this.state.colors.reverse()})}}>
				<div className={color}></div>
			</div>
		)
	}

	render(){
		return(
			<div className='parentSquare'>
				{this.RenderSquare(0)}
				<h1>-Версия 1-</h1>
				{this.RenderSquare(1)}
			</div>
		)
	}
}

export default Squares1