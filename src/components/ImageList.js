import React from 'react';

class ImageList extends React.Component {
    render() {
        return(
            <div>
                {
                    this.props.images.length > 0 ?
                        this.props.images.map(image => 
                            <img key={image.id} src={image.urls.regular} alt={image.alt_description}/>
                        ) : "Please insert appropriaet keyword to search"
                }
            </div>
        )
    }
}

export default ImageList;