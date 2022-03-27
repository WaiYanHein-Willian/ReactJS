import React from 'react'
import {FaTimes} from 'react-icons/fa'

const Task = ({tasks,onDelete,onToggle}) => {
  return (
    <div onDoubleClick={()=>onToggle(tasks.id)} className={`task ${tasks.reminder?"reminder":""}`}>
      <h3>{tasks.text} <FaTimes style={{color:"red",cursor:"pointer"}} onClick={()=>onDelete(tasks.id)}/></h3>
      <p>{tasks.day}</p>
    </div>
  )
}

export default Task
