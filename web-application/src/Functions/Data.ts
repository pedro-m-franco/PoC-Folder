export const TASK_URL = 'http://localhost:8080/task/';
export const ID_URL = 'id/';

export interface Task {
    id: number;
    status: boolean;
    title:string;
    description:string;
    editor:string;
    creator:string;
    date:Date;
}
export class TaskClass {
    id: number;
    status: boolean;
    title:string;
    description:string;
    editor:string;
    creator:string;
    date:Date;

    constructor(task: Task) {
        this.id = task.id;
        this.status = task.status;
        this.title = task.title;
        this.description = task.description;
        this.editor = task.editor;
        this.creator = task.creator;
        this.date = task.date;
    }
}

export const statusOptions = [
    { value: 'true', label: 'Open' , colour: 'green'},
    { value: 'false', label: 'Closed', colour: 'red'},
];
