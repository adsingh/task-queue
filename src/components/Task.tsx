import * as React from 'react';
import '../styles/Task.css';
import { TaskInfo } from '../store/TaskData';

export const Task = (props: TaskInfo) => (
    <div className="task">
        <p className="task_title">{props.title}</p>
        {props.description ? <p>{props.description}</p> : null}
    </div>
)