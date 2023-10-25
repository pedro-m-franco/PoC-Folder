import React, {useEffect, useState} from "react";
import {TaskList, fetchListTasks, filterTasks, SearchInputBar} from "../Functions/Functions";
import {TaskClass} from "../Functions/Data";
import "../CSS/TaskGallery.css";

function TaskGallery(){

    const [tasks, setTasks] = useState<TaskClass[]>([]);
    const [searchValue, setSearchValue] = useState("")
    const filteredTasks = filterTasks(tasks, searchValue)

    useEffect(() => {
        const fetchTasks = async () => {
            const tasks = await fetchListTasks();
            setTasks(tasks);
        };
        fetchTasks();
    }, [tasks]);

    return(
        <>
            <SearchInputBar setSearchValue={setSearchValue}/>
            <div className={"container-gallery"}>
                <div className={"boxes"}>
                    <TaskList tasks={filteredTasks} />
                </div>
            </div>
        </>
    );
}

export default TaskGallery;