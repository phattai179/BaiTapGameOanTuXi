import React, { Component } from 'react'
import './BaiTapOanTuXi.css'
import Computer from './Computer'
import KetQuaTroChoi from './KetQuaTroChoi'
import Player from './Player'

import { connect } from 'react-redux'

class BaiTapOanTuXi extends Component {




    render() {
        return (
            <div className="gameOanTuXi">
                <div className="row text-center mt-3">
                    <div className="col-3">
                        <Player />
                    </div>
                    <div className="col-6">
                        <KetQuaTroChoi />
                        <button onClick={() => {
                            this.props.playGame()
                        }} className="btn btn-success p-3 ">Play Game</button>
                    </div>
                    <div className="col-3">
                        <Computer />
                    </div>
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        playGame: () => {

            let count = 0
            // Khai báo hàm lập đi lập lại
            let randomComputerItem = setInterval(() => {
                dispatch({
                    type: 'RAN_DOM'
                })
                count++;
                if (count >= 15) {
                    // Dừng hàm setInterval lại
                    clearInterval(randomComputerItem)

                    dispatch({
                        type: 'END_GAME'
                    })
                }
            }, 100)


        }
    }
}

export default connect(null, mapDispatchToProps)(BaiTapOanTuXi)