import React from 'react';
import Search from './Search';

class App extends React.Component {
    render() {
        return(
            <div className="ui container" style={{marginTop: '10px'}}>
                <Search searchText="Search Image" />
            </div>
        )
    }
}

export default App;