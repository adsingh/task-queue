import * as React from 'react';
import '../styles/AppHeader.css';

export interface AppHeaderProps {
    addTask: (title: string, description: string) => void;
    removeAllTasks: () => void;
}

export enum InputBoxRole {
    Title,
    Description
}

export class AppHeader extends React.Component<AppHeaderProps, {}> {

    state = {
        title: "",
        description: ""
    }

    onInputChange = (event: React.FormEvent<HTMLInputElement>, inputBoxRole: InputBoxRole) => {
        switch(inputBoxRole) {
            case InputBoxRole.Title:
                this.setState({ title: event.currentTarget.value });
                break;

            case InputBoxRole.Description:
                this.setState({ description: event.currentTarget.value });
                break;
        }
    }

    onAddTask = () => {
        const { title, description } = this.state;
        this.props.addTask(title, description);
        this.setState({ title: "", description: ""});
    }

    render() {
        const { title, description } = this.state;
        return (
            <div id="app-header">
                <div id="add_form">
                    <input className="input" placeholder="Add title..." value={title} onChange={(event: React.FormEvent<HTMLInputElement>) => this.onInputChange(event, InputBoxRole.Title)}></input>
                    <input className="input" placeholder="Add description (Optional)" value={description} onChange={(event: React.FormEvent<HTMLInputElement>) => this.onInputChange(event, InputBoxRole.Description)}></input>
                    <button 
                        className={"btn " + (title==="" ? "diabled" : "enabled")}
                        onClick={this.onAddTask}
                        disabled={title===""}
                    >
                        Add
                    </button>
                </div>
                <button 
                    className="btn enabled"
                    onClick={this.props.removeAllTasks}
                >
                    Remove all
                </button>
            </div>
        )
    }
}