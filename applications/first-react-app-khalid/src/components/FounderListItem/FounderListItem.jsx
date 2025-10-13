import React from 'react'

const FounderListItem = (props) =>{
    console.log(props);
  return (
    <h3>Hi, I'm {props.name}, The {props.title}</h3>
  )
}
export default FounderListItem