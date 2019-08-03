import React from 'react';
import './Album.css'
import {Photo} from "react-photo-gallery";
import Gallery from "react-photo-gallery";
import LazyLoad from 'react-lazyload';
import Article from "../Article/Article";


const renderLazy = (props) => <LazyLoad placeholder={<div>dddd</div>}>{Photo(props)}</LazyLoad>;

class Album extends React.Component {
  render() {
    let article = this.props.desc
        ? <Article title={this.props.desc.title} text={this.props.desc.text}/>
        : null;
    console.log(article);
    return (
        <section className='album'>
          {article}
          <Gallery photos={this.props.photos}
                   limitNodeSearch={2}
                   renderImage={renderLazy}/>
        </section>
    );
  }
}

export default Album;
