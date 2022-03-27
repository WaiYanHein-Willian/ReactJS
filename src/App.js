import logo from './logo.svg';
import './App.css';
import Header from './component/Header';
import Tasks from './component/Tasks';
import { useState } from 'react'
import AddTask from './AddTask';



function App() {
  const [showTask,setShowTask]=useState(false);

  const [tasks,setTasks]=useState([
    {
        id:1,
        text:"Doctor Appoint",
        day:"2-4-92",
        reminder:false
    },
    {
        id:2,
        text:"School Party",
        day:"6-8-03",
        reminder:true
    },
    {
        id:3,
        text:"Doctor Appoint",
        day:"5-12-20",
        reminder:true
    },
])

  const onDelete=(id)=>{
    setTasks(tasks.filter(task=>task.id!==id))
  }
  const onToggle=(id)=>{
    tasks.map(task=>task.id===id?{reminder:!task.reminder}:task)
  }
  const addTask=(task)=>{
    const id=Math.floor(Math.random()*1000+1);
    const newTask={id,...task}
    setTasks([...tasks,newTask])
  }
 

  return (
    <div className="App">
      <Header onAdd={()=>setShowTask(!showTask)} onShow={showTask}/>
      {showTask&&<AddTask onAdd={addTask}/>}
      <Tasks tasks={tasks} onDelete={onDelete} onToggle={onToggle}/>
      
    </div>
  );
}

export default App;
