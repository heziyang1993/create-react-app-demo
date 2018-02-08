import * as actionTypes from '../mutation-types.js'
import calc from '../actions/index.js'

const initialState = { 
  name: 'yang',
  age: 18
}

export default function calcAge (state = initialState, action) {
  console.log(action)
  switch (action.type) {
    case actionTypes.CALCAGE:
      // 数组和对象要用这种方式
      return Object.assign({}, state, {
        age: action.data + 1
      })
    default:
      return state
  }
}