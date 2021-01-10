import { BUY_CELLPHONE } from '../actionTypes'

const initialState = {
  numOfCellPhones: 50
}

const cellPhoneReducer = (state=initialState, action) => {
  switch (action.type) {
    case BUY_CELLPHONE: return {
      ...state, 
      numOfCellPhones: state.numOfCellPhones - 1
    }
    default: return state
  }
}

export default cellPhoneReducer