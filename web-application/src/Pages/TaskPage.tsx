import React, {useState} from "react";
import {useLocation, useNavigate} from "react-router-dom";
import {updateTask} from "../Functions/Functions";
import {TaskClass} from "../Functions/Data";
import {TaskDisplay} from "../Functions/TaskDisplay";
import "../CSS/TaskPage.css";

function TaskPage(){
    const location = useLocation()
    const navigate = useNavigate()
    const [task, setTask] = useState(location.state.task)

    const handleButtons = async () => {
        await updateTask(task.id, task);
        navigate(-1);
    };

    const onUpdate = (field:string, value:any) => {
        setTask((prevTask:TaskClass) => ({
            ...prevTask,
            [field]: value
        }));
    };

    return(
        <div className={"container-page"}>
            <button className={"update-back-button"} onClick={() => navigate(-1)}>Go Back</button>
            <TaskDisplay
                task={task}
                onUpdate={onUpdate}
            />
            <button className={"update-back-button"} onClick={() => handleButtons()}>Update</button>
        </div>
    );
}

export default TaskPage;