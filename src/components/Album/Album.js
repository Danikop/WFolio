import React from 'react';
import './Album.css'
import {Photo} from "react-photo-gallery";
import Gallery from "react-photo-gallery";
import LazyLoad from 'react-lazyload';


const renderLazy = (props) => <LazyLoad placeholder={<div>dddd</div>}>{Photo(props)}</LazyLoad>;

class Album extends React.Component {
  render() {
    return <Gallery photos={this.props.photos}
                    limitNodeSearch={3}
                    renderImage={renderLazy}/>;
  }
}

export default Album;
