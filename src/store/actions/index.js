import * as actionTypes from '../mutation-types.js'
console.log(actionTypes)
export function calc(data){
    return {
        type : actionTypes.CALCAGE,
        data
    }
}
