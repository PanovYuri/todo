import React, { Component } from 'react';
import './todo-list-item.css';

export default class ToDoListItem extends Component {

    render() {

        const { label, 
            onToggleImportant, 
            onToggleDone,
            important,
            done } = this.props;

        let classNames = 'todo-list-item d-flex justify-content-between';
        if (done) {
            classNames += ' done';
        }

        if (important) {
            classNames += ' important';
        }

        return (
            <span className={ classNames }>
                <span className="todo-list-item-label"
                    onClick={ onToggleDone }>
                    {label}
                </span>
                <div>
                    <button className="btn btn-outline-success first-btn"
                        onClick={onToggleImportant}>
                        <i className="fa fa-exclamation"/>
                    </button>
                    <button className="btn btn-outline-danger"
                            onClick={this.props.onDeleted}>
                        <i className="fa fa-trash-o" />
                    </button>
                </div>
            </span>
        );
    }
}