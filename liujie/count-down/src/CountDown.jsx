import React, { Component } from 'react'
import './CountDown.css'
import progress_green from './img/progress_green.png'
import progress_red from './img/progress_red.png'
import blinkImg from './img/blinkImg.png'
import transparentImg from './img/transparentImg.png'

class CountDown extends Component{

    constructor() {
        super();

        this.state = {
            currentProgress: 386,
            time: 0,
            t_m:"00",
            t_s:"00",
            img: progress_green
        };
    }

    componentDidMount() {
        setInterval(() => {
            var withTime = this.state.maxTime-this.state.time-1;
            if (this.state.time >= this.state.maxTime) {
                withTime=0;
            }
            if (this.props.maxMinuter !== 0) {
                this.setState({
                    currentProgress: Math.floor((withTime / this.state.maxTime) * 386),
                    img: this.state.maxTime * 0.8 > this.state.time ? progress_green : progress_red
                })
            } else {
                this.setState({
                    currentProgress: 0
                })
            }
            let  time = this.state.time;
            time ++;
            this.setState({
                time: time,
                t_m: Math.floor(time/60%60)<10 ?"0"
                    +Math.floor(time/60%60):Math.floor(time/60%60),
                t_s: Math.floor(time%60)<10?"0"
                    +Math.floor(time%60):Math.floor(time%60)
            });


        }, 1000)

    }

    render(){
        return (
            <div>
                <div id ="timeDiv">
                    <div className="loadBar" >
                        <img src={this.state.img}
                             width={this.state.currentProgress} alt=""/>
                        <img src={blinkImg}  className="blinkImg" alt=""/>
                        <img src={transparentImg} className ="transparentImg" alt=""/>
                    </div>
                    <div className="hotDate">
                        <span id="t_m">{this.state.t_m} : {this.state.t_s}</span>
                    </div>
                </div>
            </div>
        )
    }
}

export default  CountDown
