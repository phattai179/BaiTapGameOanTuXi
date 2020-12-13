import React, { Component } from 'react'
import {connect} from 'react-redux'

class Computer extends Component {
    render() {

        let keyframe = `@keyframes randowItem${Date.now()} {
            0% {top: -50px;}
            25% {top: 100px;}
            50% {top: -50px;}
            75% {top: 100px;}
            100% {top: 0;}

        }`

        return (
            <div className="text-center playerGame">
                <style>
                    {keyframe}
                </style>

                <div className="theThink" style = {{position: 'relative'}}>
                    <img className = "mt-2" style = {
                        {width: '100px',
                        height:'100px',
                        transform: 'rotate(120deg)',
                        position: 'absolute',
                        left: '20%',
                        animation: `randowItem${Date.now()} 0.5s`}
                        } src = {this.props.computer.hinhAnh} alt = {this.props.computer.hinhAnh} />
                </div>
                <div className="speech-bubble"></div>
                <img src="./img/gameOanTuXi/playerComputer.png" alt="123" style={{ width: 200, height: 200 }} ></img>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        computer : state.BaiTapOanTuXiReducer.computer
    }
}

export default connect(mapStateToProps)(Computer)
