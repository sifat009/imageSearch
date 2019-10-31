import React from 'react';


class Search extends React.Component {
    state = {
        'inputValue': ''
    }

    onInputChange = (event) => {
        this.setState({
            'inputValue': event.target.value
        })
    }
    
    onFormSubmit = (event) => {
        event.preventDefault();
    }


    render() {
        return(
            <div className="ui segment">
                <form className="ui form" onSubmit={this.onFormSubmit}>
                    <div className="field">
                        <label>{this.props.searchText}</label>
                        <input value={this.state.inputValue} type="text" onChange={event => this.onInputChange(event)}/>
                    </div>
                </form>
            </div>
        )
    }
}

Search.defaultProps = {
    'searchText': 'Search'
}

export default Search;