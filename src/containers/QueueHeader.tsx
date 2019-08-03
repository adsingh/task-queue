import * as React from 'react';
import '../styles/Queue.css';

export class QueueHeader extends React.Component {

    render() {
        return (
            <div id="queue-header">
                <button className="btn">Add</button>
                <button className="btn">Remove all</button>
            </div>
        )
    }
}