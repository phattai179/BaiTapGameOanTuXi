const stateDefault = {
    mangDatCuoc : [
        {ma: 'keo', hinhAnh: "./img/gameOanTuXi/keo.png", datCuoc: false},
        {ma: 'bua', hinhAnh: "./img/gameOanTuXi/bua.png", datCuoc: false},
        {ma: 'bao', hinhAnh: "./img/gameOanTuXi/bao.png", datCuoc: true}
    ],

    ketQua: "I'm iron man, i love you 3000 !!!",
    soBanThang: 0,
    soBanChoi: 0,
    computer: {ma: 'bao', hinhAnh: './img/gameOanTuXi/bao.png', datCuoc: false},
}

const BaiTapOanTuXiReducer = (state = stateDefault, action) => {
    switch(action.type) {

        case 'CHON_KEO_BUA_BAO' : {
            // Reset mang cuoc
            let mangDatCuocUpdate = [...state.mangDatCuoc];

            // Tạo ra mảng cược mới từ mảng cược cũ và action.maCuoc do người dùng truyền lên
            mangDatCuocUpdate = mangDatCuocUpdate.map((item, index) => {
                if(item.ma === action.maCuoc){
                    return {...item, datCuoc: true}
                }
                return {...item, datCuoc: false}
            })

            state.mangDatCuoc = mangDatCuocUpdate;
            return {...state}

            // console.log('mangCuocUpdate', mangDatCuocUpdate)

            // // Tìm ra mã cược để change trạng thái đặt cược ứng với mã cược đó
            // let index = mangDatCuocUpdate.findIndex(qc => qc.ma === action.maCuoc)

            // if(index !== -1){
            //     mangDatCuocUpdate[index].datCuoc = true;
            // }

            // state.mangDatCuoc = mangDatCuocUpdate;
            // return {...state}
        }

        case 'RAN_DOM' : {
            let soNgauNhien = Math.floor(Math.random() * 3 );

            let quanCuocNgauNhien = state.mangDatCuoc[soNgauNhien]

            state.computer = quanCuocNgauNhien

            return {...state}
        }

        case 'END_GAME' : {
            let player = state.mangDatCuoc.find(item => item.datCuoc === true);

            let computer = state.computer;

            switch(player.ma) {
                case 'keo': {
                    if(computer.ma === 'keo'){
                        state.ketQua = 'Hòa nhau !!!'
                    }else if (computer.ma === 'bua'){
                        state.ketQua = 'thua sml !!!'
                    }else{
                        state.soBanThang += 1;
                        state.ketQua = "I'm iron man, i love you 3000 !!!"

                    }
                }; break

                case 'bua' : {
                    if(computer.ma === 'bua'){
                        state.ketQua = 'Hòa nhau !!!'
                    }else if (computer.ma === 'bao'){
                        state.ketQua = 'thua sml !!!'
                    }else{
                        state.soBanThang += 1
                        state.ketQua = "I'm iron man, i love you 3000 !!!"
                    }
                }; break

                case 'bao' : {
                    if(computer.ma === 'bao'){
                        state.ketQua = 'Hòa nhau !!!'
                    }else if (computer.ma === 'keo'){
                        state.ketQua = 'thua sml !!!'
                    }else{
                        state.soBanThang += 1
                        state.ketQua = "I'm iron man, i love you 3000 !!!"
                    }
                }; break

                default : state.ketQua = "I'm iron man, i love you 3000 !!!"
                
            }

            state.soBanChoi += 1;

            return {...state}

        }

        default: return{...state}
    }
}

export default BaiTapOanTuXiReducer;