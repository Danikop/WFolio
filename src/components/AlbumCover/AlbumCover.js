import React from 'react';
import {Link} from 'react-router-dom';
import './AlbumCover.css'

class AlbumCover extends React.Component {
  render() {
    return (
        <div className="item">
          <Link className="cover-link" to={this.props.link}>
            <div className="lazy-image js-lazy-image -loaded"
                 data-aspect="1">
              <canvas
                  className="placeholder"
                  width={2560}
                  height={2560}
                  style={{backgroundColor: '#89847c'}}
              >
              </canvas>
              <img className="lazyautosizes lazyloaded" data-sizes="auto"
                  //data-src={this.props.uri}
                   src={this.props.cover}
              />
            </div>
            <div className="title"><span>{this.props.caption}</span></div>
          </Link>
        </div>
    );
  }
}

export default AlbumCover;