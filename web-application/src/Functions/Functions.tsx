import axios from 'axios';
import {ID_URL, statusOptions, Task, TASK_URL, TaskClass} from "./Data";
import React from 'react';
import "../CSS/TaskPage.css";
import "../CSS/TaskGallery.css";
import {Link} from "react-router-dom";
import {InputGroup, FormControl} from 'react-bootstrap';

export const fetchListTasks = async () => {
    try {
        const response = await axios.get(TASK_URL);
        return response.data.map((task: Task) => new TaskClass(task));
    } catch (error: any) {
        console.log(error.message);
    }

};

export const fetchSingleTask = async (id: number) => {
    try {
        const response = await axios.get(TASK_URL + ID_URL + id);
        return response.data as TaskClass;
    } catch (error: any) {
        console.log(error.message);
    }
};

export const patchStatus = async (id: number) => {
    try {
        const response = await axios.patch(TASK_URL + ID_URL + id);
        return response.data;
    } catch (error: any) {
        console.log(error.message);
    }
};

export const updateTask = async (id: number, task: TaskClass) => {
    try {
        const response = await axios.put(TASK_URL + ID_URL + id, task);
        return response.data;
    } catch (error: any) {
        console.log(error.message);
    }

};

export const TaskStatusButton = ({status, onClick}: any) => {

    const option = statusOption(status)

    return (
        <button className={"status-button"}
                type="button"
                style={{backgroundColor: option.colour}}
                onClick={onClick}
        >
            {option.label}
        </button>
    );
};

export const TaskList = ({tasks}: { tasks: TaskClass[] }) => {
    return (
        <ul>
            {tasks.map((task: TaskClass) => (
                <SingleTask key={task.id} task={task}/>
            ))}
        </ul>
    );
};

const statusOption =(status:boolean) => {
    return status ? statusOptions[0] : statusOptions[1];
}

export const SingleTask = ({task}: { task: TaskClass }) => {
    const handleStatusChange = async () => {
        await patchStatus(task.id);
    };

    return (
        <div key={task.id} className={"box"}>
            <Link to={"/task/" + task.id} state={{task: task}}>
                <button className={"redirect-button"}/>
            </Link>
            {task.title}
            <TaskStatusButton
                status={task.status}
                onClick={handleStatusChange}
            />
            <p><>{task.date ? task.date : "No time limit."}</>
            </p>
        </div>
    );
};

export function filterTasks(items: TaskClass[], filter: string) {
    if (!filter || filter.length === 0) return items

    if (filter)
        return items.filter((item: TaskClass) => {
            return (item.title.toLowerCase()).includes(filter.toLowerCase())
        })
    return []
}

export const SearchInputBar = ({setSearchValue}: { setSearchValue: any }) => {

    return (
        <InputGroup className="fixed-top">
            <FormControl className={"search-bar"}
                         type="text"
                         placeholder="Search..."
                         onChange={event => setSearchValue(event.target.value)}
            />
        </InputGroup>
    );
};

