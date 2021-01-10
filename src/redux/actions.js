import { BUY_CELLPHONE, ADD_TODO } from './actionTypes'

let nextToDoId = 0;

export const buyCellPhone = () => {
  return {
    type: BUY_CELLPHONE
  }
}

export const addTodo = content => ({
  type: ADD_TODO,
  payload: {
    id: ++nextToDoId,
    content
  }
})