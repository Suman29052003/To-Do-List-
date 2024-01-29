import React from "react";



const Header = (props) => {
  return (
    <div>
      <div className="container">
        <h6>{props.slno +1}</h6>
        <h6>{props.todo}</h6>
        <h6>{props.time}</h6>
        <button onClick={()=>props.remove(props.slno)} type="button" className="btn btn-danger">
          Delete
        </button>
      </div>
    </div>
  );
};

export default Header;
