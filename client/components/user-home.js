import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {logout} from '../store'
import Levels from './Levels'


/**
 * COMPONENT
 */
export const UserHome = (props) => {
  const {email, isLoggedIn, handleClick, userProblems, allProblems} = props
  return (
    <div className='toc'>
      <a href="#" onClick={handleClick}>Logout</a>
      <h3>Welcome, {email}</h3>
      <h2>Which chapter would you like to select?</h2>
      <Levels userProblems={userProblems} allProblems={allProblems} />
    </div>
  )
}

/**
 * CONTAINER
 */
const mapState = (state) => {
  return {
    // storeProps: state,
    userProblems: state.user.problems,
    allProblems: state.problems,
    isLoggedIn: !!state.user.id,
    email: state.user.email
  }
}

const mapDispatch = (dispatch) => {
  return {
    handleClick () {
      dispatch(logout())
    }
  }
}


export default connect(mapState, mapDispatch)(UserHome)

/**
 * PROP TYPES
 */
UserHome.propTypes = {
  email: PropTypes.string
}

