import React from 'react'

const Botton = ({color,text,onClick}) => {
  return (
    <div>
      <button style={{backgroundColor:color}} onClick={onClick}>{text}</button>
    </div>
  )
}

export default Botton
