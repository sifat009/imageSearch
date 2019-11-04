import './ImageList.css'; 
import React from 'react';
import Image from './Image';

class ImageList extends React.Component {
    render() {
        return(
            <div className="image-list">
                {
                    this.props.images.length > 0 ?
                        this.props.images.map(image => 
                            <Image key={image.id} image={image}/>
                        ) : "Please insert keyword to search"
                }
            </div>
        )
    }
}

export default ImageList;