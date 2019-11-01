import React from 'react';
import Search from './Search';
import ImageList from './ImageList';

class App extends React.Component {
    state = {
        images: []
    }

    onSearchSubmit = async (searchText) => {
        const accessKey = `e34919ff03482c81f499318808d443bfcb14f3d6e3bb3db51215dbf8ed9665b1`;
        // const secretKey = `aee5642dea10d7ec589fcc51b96bd63673c321cf61b8e183530d7de011ec1759`;
        const data = await fetch(`https://api.unsplash.com/search/photos?query=${searchText}`, {
            headers: {
                'Authorization': `Client-ID ${accessKey}`
            }
        });
        const {results: images} = await data.json(); 
        this.setState({images});
    }

    render() {
        return(
            <div className="ui container" style={{marginTop: '10px'}}>
                <Search searchText="Search Image" onSubmit={this.onSearchSubmit} />
                <ImageList images={this.state.images} />
            </div>
        )
    }
}

export default App;