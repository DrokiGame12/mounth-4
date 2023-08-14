import React from 'react';

class Squares2 extends React.Component {
	constructor(props){
		super(props)
		this.state = {
			firstColor: 'Red',
			secondColor: 'Blue'
		}
	}

	RenderSquare(color) {
		const changeColors = () => {
			if(this.state.firstColor === 'Red' && this.state.secondColor === 'Blue'){
				this.setState({
					firstColor: 'Blue',
					secondColor: 'Red'
				})
			} else {
				this.setState({
					firstColor: 'Red',
					secondColor: 'Blue'
				})
			}
		}

		return(
			<div className='childSquare' onClick={() => {changeColors()}}>
				<div className={color}></div>
			</div>
		)
	}

	render(){
		return(
			<div className='parentSquare'>
				{this.RenderSquare(this.state.firstColor)}
				<h1>-Версия 2-</h1>
				{this.RenderSquare(this.state.secondColor)}
			</div>
		)
	}
}

export default Squares2