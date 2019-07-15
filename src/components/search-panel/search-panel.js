import React, {Component} from 'react';
import ItemStatusFilter from '../item-status-filter/index';
import "./search-panel.css"

export default class SearchPanel extends Component {

    state = {
        term : ''
    }

    onSearchChange = (e) => {
        const term = e.target.value;
        this.setState({ term });
        this.props.onSearchChange(term)
    }

    render() {

        return(
            <div className="row search-panel">
                <div className="col">
                    <input className="form-control" 
                           placeholder="search"
                           value={this.state.term}
                           onChange={this.onSearchChange}/>
                    </div>
                <div className="col">
                    <ItemStatusFilter 
                        filter={this.props.filter} 
                        onFilterChange={this.props.onFilterChange}/>
                    </div>
            </div>
        )   
    }
}