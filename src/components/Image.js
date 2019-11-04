import React from 'react';

class Image extends React.Component {
    constructor() {
        super();
        this.state = {spans: 0};
        this.imageRef = React.createRef();
    }

    componentDidMount() {
        this.imageRef.current.addEventListener('load', this.setSpans)
    }

    setSpans = () => {
        const height = this.imageRef.current.clientHeight;
        const spans = Math.ceil(height/10);
        this.setState({spans})
    }

    render() {
        const {image} = this.props;
        return (
            <div style={{gridRowEnd: `span ${this.state.spans}`}}>
                <img ref={this.imageRef} src={image.urls.regular} alt={image.alt_description} />
            </div>
        )
    }
}

export default Image;