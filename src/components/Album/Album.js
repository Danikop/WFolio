import React from 'react';
import './Album.css'
import Gallery from "react-photo-gallery";

class Album extends React.Component {
  render() {
    console.log(<Gallery photos={this.props.photos}/>);
    return (<Gallery photos={this.props.photos} limitNodeSearch={3}/>)
  }
}

export default Album;
