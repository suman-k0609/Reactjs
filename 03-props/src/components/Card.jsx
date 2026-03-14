import React from 'react'

function Card(props){
  return (
     <div className="card">
        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1zwhySGCEBxRRFYIcQgvOLOpRGqrT3d7Qng&s'></img>
        <h1>{props.user},{props.age}</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
        <button>View Profile</button>
      </div>
  )
}

export default Card