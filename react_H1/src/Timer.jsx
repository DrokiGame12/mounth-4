import React from "react";

class Timer extends React.Component{
  constructor(props){
    super(props)
    this.state = {seconds: 0}
  }

  tick(){
    this.setState(state => ({
      seconds: state.seconds + 1
    }))
  }

  componentDidMount(){
    this.interval = setInterval(() => this.tick(), 1000)
  }

  componentWillUnmount() {
    clearInterval(this.interval)
  }

  render() {
    return (
      <h1>
        Секунды {this.state.seconds}
      </h1>
    )
  }
}
 
export default Timer;
