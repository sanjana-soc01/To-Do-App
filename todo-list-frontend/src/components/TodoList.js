import AddTask from "./AddTask";
import PendingTask from "./pendingTask";
import CompletedTask from "./CompletedTask";
import { useEffect,useState } from "react";
const TodoList = () => {
    const [tasks,setTasks] = useState([]);
    
    const getData = async ()=>{
        
        const url="http://localhost:3000/tasks";
        const res = await fetch(url);
        const data = await res.json();
        console.log(data);
        setTasks(data);
    }

    useEffect(()=>{
        getData();
    },[]);

    const handleAddTask = async (name)=>{
        
        const url="http://localhost:3000/addtasks";
        const data = {
            task_desc:name
        };
        const options={
            method:"POST",
            headers:{
                "Content-Type":"application/json",
            },
            body:JSON.stringify(data)
        }
        const res = await fetch(url,options);
        const json = await res.json();  
        console.log(json);
        getData();
    }

    const handleStatusChange = async (taskID)=>{
        const url="http://localhost:3000/updatetasks";
        const data = {
            taskid:taskID
        };
        const options={
            method:"POST",
            headers:{
                "Content-Type":"application/json",
            },
            body:JSON.stringify(data)
        }
        const res = await fetch(url,options);
        const json = await res.json();
        getData();
    }

    const handleDelete = async (taskID)=>{
        const url="http://localhost:3000/deletetask";
        const data = {
            taskid:taskID
        };
        const options={
            method:"POST",
            headers:{
                "Content-Type":"application/json",
            },
            body:JSON.stringify(data)
        }
        const res = await fetch(url,options);
        const json = await res.json();
        getData();

    }

    const renderPending = ()=>{
        return (
            <>
            <h1 align="center"><u><i><b>Pending Tasks</b></i></u></h1>
            {
                tasks.map(task=>{
                    if(task.is_Completed != true && task.is_Deleted == false)
                    return <PendingTask data={task} changeStatus={handleStatusChange} delete={handleDelete}/>
                })
            }
            </>
        )
    }

    const renderComplete = ()=>{
        return (
            <>
                <h1 align="center"><u><i><b>Completed tasks</b></i></u></h1>
                {
                    tasks.map(task=>{
                        if(task.is_Completed == true)
                        return <CompletedTask data={task}/>
                    })
                }
            </>
        )
    }

    return(
        <>
            <AddTask addTask={handleAddTask}/>
            {renderPending()}
            {renderComplete()}
        </>
    );
}

export default TodoList;