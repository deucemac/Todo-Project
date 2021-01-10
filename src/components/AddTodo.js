import React, { useState } from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../redux/actions'

function AddTodo(props) {
  const [todo, setTodo] = useState("")

  function handleSubmit(event) {
    event.preventDefault();
    props.addTodo(todo)
    setTodo("")
  }
  console.log(todo)
  return (
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={todo}
          onChange={(e)=> setTodo(e.target.value)}
      />
        <input type="submit" value="Submit"/>
      </form>
  )
}




export default connect(
  null,
  { addTodo }
)(AddTodo)
