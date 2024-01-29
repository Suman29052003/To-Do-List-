import React from 'react'

const Header = (props) => {
  return (
    <div>
      <div className="container">
        <h6>{props.slno}</h6>
        <h6>{props.todo}</h6>
        <h6>{props.time}</h6>
        <button type="button" class="btn btn-danger">Delete</button>
      </div>
    </div>
  )
}

export default Header
