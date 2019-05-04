import React from "react";

export const DeleteBtn = props => {
  return (
    <button className="btn btn-warn delete-btn" 
      onClick={ () => props.onClick(props.title)} >
        Delete
    </button>
  )
}
