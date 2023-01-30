import React from "react";

class Timer extends React.Component {

    constructor(props) {
        super(props);
        this.timerStart = this.timerStart.bind(this);
        this.timerStop = this.timerStop.bind(this);
        this.timerReset = this.timerReset.bind(this);
        this.state = {
            minute: 20,
            seconds: 0,
            started: false,
        }
        this.timer = null;
    }
    timerStart(){
        if (this.state.started) return;
        this.setState({
            started: true
        })
        this.timer = setInterval(() => {
            if (this.state.seconds <= 0) {
                if (this.state.minute <= 0) {
                    this.setState({
                        seconds: 0,
                        minute: 0,
                    })
                    this.timerStop();
                }
                else {
                    this.setState({
                        minute: this.state.minute - 1,
                        seconds: 59,
                    })
                }
            }
            else {
                this.setState({
                    seconds: this.state.seconds - 1
                })
            }
        }, 1000);
    }
    timerStop(){
        this.setState({
            started: false
        })
        clearInterval(this.timer);
    }
    timerReset(){
        this.setState({
            started: false,
            seconds: 0,
            minute: 20,
        })
        clearInterval(this.timer);
    }
    render() {
        let padSeconds = this.state.seconds.toString().padStart(2,'0')
        let padMinutes = this.state.minute.toString().padStart(2,'0')
        return (
            <div className="timer">
                <div className="timer-buttons">                
                    <button onClick={this.timerStart} className='timer-button'>start</button>
                    <button onClick={this.timerStop} className='timer-button'>stop</button>
                    <button onClick={this.timerReset} className='timer-button'>reset</button>
                </div>
                <p id="counter">{padMinutes}:{padSeconds}</p>
            </div>
        )
    }
}

export default Timer;