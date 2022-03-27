import React from 'react'
import { useState } from 'react'

const AddTask = () => {

    const [text,setText]=useState('');
    const [day,setDay]=useState('');
    const [reminder,setRemider]=useState(false);



    return (
        <form className='add-form'>
            <div className='form-control'>
                <label>Task</label>
                <input type="text" placeholder='Add Task' value={text} onChange={(e)=>setText(e.target.value)}/>
            </div>
            <div className='form-control'>
                <label>Day & Time</label>
                <input type="text" placeholder='Add Day & Time' value={day} onChange={(e)=>setDay(e.target.value)}/>
            </div>
            <div className='form-control form-control-check'>
                <label>Reminder</label>
                <input type="checkbox" value={reminder} onChange={(e)=>e.currentTarget.checked}/>
            </div>
            <input className='btn btn-block' type="submit" value="Save Data" />
        </form>
    )
}

export default AddTask
