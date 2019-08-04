import * as React from 'react';
import '../styles/Task.css';
import { TaskInfo } from '../store/TaskData';

export interface TaskProps extends TaskInfo {
    rootElement: HTMLElement;
}

export class Task extends React.Component<TaskProps, {}> {

    taskRef = React.createRef<HTMLDivElement>();
    mouseMoveHandlerRegistered = false;

    mouseMoveHandler = (event: MouseEvent) => {
        console.log(`x: ${event.x}; y: ${event.y}`);
    }

    onMouseDown: React.ReactEventHandler = (event: React.SyntheticEvent) => {
        this.props.rootElement.addEventListener("mousemove", this.mouseMoveHandler);
    }

    onMouseUp: React.ReactEventHandler = (event: React.SyntheticEvent) => {
        this.props.rootElement.removeEventListener("mousemove", this.mouseMoveHandler);
    }

    render() {
        return (
            <div 
                className="task"
                ref={this.taskRef}
                onMouseDown={this.onMouseDown}>
                <p className="task_title">{this.props.title}</p>
                {this.props.description ? <p>{this.props.description}</p> : null}
            </div>
        )
    }
}