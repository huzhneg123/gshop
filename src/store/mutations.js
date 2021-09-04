// 直接更新state的多个方法对象

import {
    RECEIVE_ADDRESS,
    RECEIVE_CATEGORYS,
    RECEIVE_SHOPS
} from './mutation-types'

export default {
    // 参数为,地址接受的是一个对象,将接受的数据赋给state,但是不能写空对象,需要包含adress的对象,必须跟state中的保持一致
    [RECEIVE_ADDRESS](state, { address }) {
        state.address = address
    },
    [RECEIVE_CATEGORYS](state, { categorys }) {
        state.categorys = categorys
    },
    [RECEIVE_SHOPS](state, { shops }) {
        state.shops = shops
    }
}