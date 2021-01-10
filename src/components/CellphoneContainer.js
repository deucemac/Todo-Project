import React from 'react'
import { connect } from 'react-redux'
import { buyCellPhone } from '../redux/actions'

function CellphoneContainer(props) {
  return (
    <div>
      <h2>Cell Phones- { props.numOfCellPhones }</h2>
      <button onClick={ props.buyCellPhone }>Buy Cell Phone</button>
    </div>
  )
}

const mapStateToProps = state => ({ numOfCellPhones: state.cellPhoneReducer.numOfCellPhones })
const mapDispatchToProps = dispatch => {
  return {
    buyCellPhone: () => dispatch(buyCellPhone())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CellphoneContainer)
// export default CellphoneContainer
