const AddTask = (props) => {
    const doAddTask=()=>{
        const name = document.getElementById("task_desc").value;
        console.log(name);
        props.addTask(name);
    }
    return(
        <div>
            <h1 style={{fontSize: "24px",color: "SkyBlue",backgroundColor: "darkblue"}} align="center"><u><i>To - Do Application</i></u></h1>
            <br></br>
            <h1 align="center"><u><i><b>Add Tasks</b></i></u></h1>
            <table border = "1" align="center">
            <div className="form-control">
            
            <tr align="center">
                <td style={{backgroundColor : 'violet', width : 500, height : 30}} align="center">
                    <label htmlFor="task_desc">Note down your Task which you want <b><i>To Do</i></b> </label>
                </td>
                <br></br>
                <td style={{backgroundColor : 'lightcoral', width : 500, height : 30}}>
                    <input type="text" name="task_desc" id="task_desc" placeholder= "Write here..." />
                </td>
            </tr>
            <br></br>
            <tr align="center">
                <td style={{backgroundColor : 'violet', width : 500, height : 30}}>
                    Click on this button to add the task to the<i> <b>To Do List</b></i>
                </td>
                <br></br>
                <td style={{backgroundColor : 'lightcoral', width : 500, height : 30}}>
                    <button onClick={doAddTask} style={{backgroundColor : 'grey', width : 175, height : 20}}>Add Task</button>
                </td>
                </tr>
            </div>
            </table>
            <br></br><br></br>
        </div>
    );
}

export default AddTask;