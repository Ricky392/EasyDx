import React, { Component } from "react";

class AliasInput extends Component {
    constructor() {
        super();
        this.handleAliasChange = this.handleAliasChange.bind(this);
    }

    handleAliasChange(event) {
        this.props.changeAlias(event.target.value);
    }

    render() {
        return (
            <li className="todo-list-item">
                <label>Please specify the org's alias or user name</label>
                <input type="text" className="form-control" value={this.props.alias} 
                    onChange={this.handleAliasChange}/>
            </li>
        );
    }
}

export default AliasInput;