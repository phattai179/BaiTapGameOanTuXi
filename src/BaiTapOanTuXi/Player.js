import React, { Component } from 'react'
import { connect } from 'react-redux'

class Player extends Component {
    render() {
        console.log(this.props.mangDatCuoc)
        return (
            <div className="text-center playerGame">
                <div className="theThink">
                    <img className="mt-2" style={{ width: "100px", height: "100px", transform: 'rotate(120deg)' }} src={this.props.mangDatCuoc.find(item => item.datCuoc === true).hinhAnh}/>
                </div>
                <div className="speech-bubble"></div>
                <img src="./img/gameOanTuXi/player.png" alt="123" style={{ width: 200, height: 200 }} ></img>
                <div className="row">
                    {this.props.mangDatCuoc.map((item, index) => {

                        // Xét giá trị đặt cược thêm tiền cho item được chọn

                        let border = {};

                        if(item.datCuoc) {
                            border = {border: '3px solid orange'};
                        }

                        return <div className="col-4" key = {index}>
                            <button onClick = {() => {
                                this.props.datCuoc(item.ma)
                            }} style = {border} className="btnItem">
                                <img width="35" height="35" src = {item.hinhAnh}  alt = "123" />
                            </button>
                        </div>
                    })}


                    {/* <div className="col-4">
                        <button className="btnItem">
                            <img width="35" height="35" src="./img/gameOanTuXi/bao.png" alt="./img/gameOanTuXi" />
                        </button>

                    </div>
                    <div className="col-4">
                        <button className="btnItem">
                            <img width="35" height="35" src="./img/gameOanTuXi/keo.png" alt="./img/gameOanTuXi" />
                        </button>

                    </div>
                    <div className="col-4">
                        <button className="btnItem">
                            <img width="35" height="35" src="./img/gameOanTuXi/bua.png" alt="./img/gameOanTuXi" />
                        </button>

                    </div> */}
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        mangDatCuoc: state.BaiTapOanTuXiReducer.mangDatCuoc,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        datCuoc: (maCuoc) => {
            dispatch({
                type: 'CHON_KEO_BUA_BAO',
                maCuoc
            })
        }

        
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Player)