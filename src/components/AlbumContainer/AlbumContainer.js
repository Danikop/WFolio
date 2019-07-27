import React from 'react';
import './AlbumContainer.css'

class AlbumContainer extends React.Component {
    render() {
        return (
            <div className="listing js-listing" data-format="square">
                {this.props.children}
            </div>
        );
    }
}

export default AlbumContainer;
