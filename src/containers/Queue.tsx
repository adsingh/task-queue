import * as React from 'react';
import { Task } from '../components/Task';
import { tasksInfo, TaskInfo, TaskStatus } from '../store/TaskData';
import '../styles/Queue.css';
import { QueueHeader } from './QueueHeader';

export interface QueueState {
    tasksData: TaskInfo[]
}

export class Queue extends React.Component {

    state: QueueState = {
        tasksData: tasksInfo
    }

    render(){
        const tasksElements = this.state.tasksData.map((taskInfo, index) => {
            const { date, description, status, title } = taskInfo;
            return <Task 
                        key={index} 
                        date={date}
                        description={description}
                        status={status}
                        title={title}
                        />
        });

        return (
            <div id="queue-container">
                <QueueHeader />
                {tasksElements}
            </div>
        )
    }
}