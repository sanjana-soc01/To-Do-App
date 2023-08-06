const CompletedTask = (props) => {
    console.log(props.data);
    return(
        <div>
             <table border = "1" align="center">
            <div className="completedtasksdiv">
                <div className="completedtasks">
                        <tr>
                            <th style={{backgroundColor : 'Green', width : 500, height : 30}}>Task</th>
                        </tr>
                        <tr align="center">
                            <td style={{backgroundColor : 'lightGreen', width : 500, height : 30}}><b>{props.data.task}</b></td>
                        </tr>
                </div>
            </div>
            </table>
        </div>
    );
}

export default CompletedTask;