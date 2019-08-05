import * as React from 'react';
import { Task, TaskRef } from '../components/Task';
import { tasksInfo, TaskModel, TaskStatus } from '../store/TaskData';
import '../styles/Queue.css';
import { AppHeader } from './AppHeader';

export interface QueueState {
    tasksData: TaskModel[]
}

export class Queue extends React.Component {

    state: QueueState = {
        tasksData: tasksInfo
    }

    highlightTask = (taskId: string) => {
        const newTasksData = [...this.state.tasksData];
        newTasksData.forEach(data => { data.styles.highlighted = data.id === taskId; });
        this.setState({ tasksData: newTasksData });
    }

    clearAllTaskHighlights = () => {
        const newTasksData = [...this.state.tasksData];
        newTasksData.forEach(data => { data.styles.highlighted = false; });
        this.setState({ tasksData: newTasksData });   
    }

    reQueueTask = (taskId: string, droppedOnTaskId: string) => {
        const droppedOnTaskIndex = this.getTaskPositionIndex(droppedOnTaskId);
        const requeTaskCurrentIndex = this.getTaskPositionIndex(taskId);

        if (droppedOnTaskIndex !== -1 && requeTaskCurrentIndex !== -1) {
            const newTasksData = [...this.state.tasksData];
            const taskToRequeue = newTasksData.splice(requeTaskCurrentIndex, 1)[0];
            newTasksData.splice(droppedOnTaskIndex, 0, taskToRequeue);
            newTasksData.forEach(data => { data.styles.highlighted = false; });
            this.setState({ tasksData: newTasksData });
        }
    }

    addTask = (title: string, description: string | undefined) => {
        const newTask: TaskModel = {
            id: `task_${this.state.tasksData.length}`,
            title,
            description,
            status: TaskStatus.Queued,
            date: (new Date()).toDateString(),
            styles: { highlighted: false }
        }

        const newTasksData = [...this.state.tasksData, newTask];
        this.setState({ tasksData: newTasksData });
    }

    removeAllTasks = () => {
        this.setState({ tasksData: [] });
    }

    render(){
        const tasksElements = this.state.tasksData.map((taskInfo, index) => {
            const { date, description, id, status, styles, title } = taskInfo;
            return <Task 
                        key={id}
                        id={id}
                        date={date}
                        description={description}
                        status={status}
                        title={title}
                        styles={styles}
                        highlightTask={this.highlightTask}
                        requeueTask={this.reQueueTask}
                        clearAllTaskHighlights={this.clearAllTaskHighlights}
                    />
        });

        return (
            <>
                <AppHeader addTask={this.addTask} removeAllTasks={this.removeAllTasks}/>
                <div id="queue-container" style={{overflow: 'auto'}} onDragOver={(e) => e.preventDefault()} onDrop={(e) => e.preventDefault()}>
                    {tasksElements}
                </div>
            </>
        )
    }

    getTaskPositionIndex(taskId: string): number {
        let index = -1;

        this.state.tasksData.forEach((taskData, i) => {
            if (taskData.id === taskId) {
                index = i;
            }
        });

        return index;
    }
}