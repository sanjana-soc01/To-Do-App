const PendingTask = (props) => {
    console.log(props);
    return(
        <div>
            <div className="pendingtasksdiv">   
                <div className="pendingtask">
                    <table border = "1" align="center">
                    <tr align="center">
                        <td style={{backgroundColor : 'blue', width : 334, height : 30,color : 'white'}}><b>{props.data.task}</b></td>
                        <td style={{backgroundColor : 'lightblue', width : 333, height : 30}}><button type="button" onClick={()=>props.changeStatus(props.data._id)}>Mark as Completed</button>&nbsp;</td>
                        <td style={{backgroundColor : 'lightblue', width : 333, height : 30}}><button type="button" onClick={()=>props.delete(props.data._id)}>Delete Task</button></td>
                    </tr>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default PendingTask;