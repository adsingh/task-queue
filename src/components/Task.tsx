import * as React from 'react';
import '../styles/Task.css';
import { TaskModel } from '../store/TaskData';

export type TaskRef = React.RefObject<HTMLDivElement>;
export interface TaskProps extends TaskModel {
    clearAllTaskHighlights: () => void;
    highlightTask: (taskId: string) => void;
    requeueTask: (taskId: string, droppedOnTaskId: string) => void;
}

export class Task extends React.Component<TaskProps, {}> {

    taskRef: TaskRef = React.createRef<HTMLDivElement>();

    onDragOver = (event: React.DragEvent) => {
        event.preventDefault();
    }

    onDragEnter = () => {
        this.props.highlightTask(this.props.id);
    }

    onDragStart = (event: React.DragEvent) => {
        event.dataTransfer.setData("taskId", this.props.id);
    }

    onDrop = (event: React.DragEvent) => {
        event.preventDefault();
        const draggedTaskId = event.dataTransfer.getData("taskId");
        this.props.requeueTask(draggedTaskId, this.props.id);
    }

    render() {
        const { id, styles } = this.props;
        return (
            <div 
                className="task"
                ref={this.taskRef}
                id={id}
                draggable
                onDragOver={this.onDragOver}
                onDragEnter={this.onDragEnter}
                onDragStart={this.onDragStart}
                onDragEnd={this.props.clearAllTaskHighlights}
                onDrop={this.onDrop}
                style={{backgroundColor: styles.highlighted ? "#dddddd" : "white"}}
            >
                <p className="task_title">{this.props.title}</p>
                {this.props.description ? <p>{this.props.description}</p> : null}
            </div>
        )
    }
}