import React from "react";

class Timer extends React.Component {
    constructor() {
        super();
        this.state = {
            time: 0,
        }
    }

    timerStart(){
        
    }
    timerStop(){
        
    }

    render() {
        return (
            <div className="timer">
                <button onClick={this.timerStart} className='start'>start</button>
                <button onClick={this.timerStop} className='stop'>stop</button>
                <p id="counter">{this.state.time}</p>
            </div>
        )
    }
}

export default Timer;