import React from 'react';
import {Link} from 'react-router-dom';
import './Album.css'

class Album extends React.Component {
  render() {
    return (
        <div className="item" id="aleks-i-lena">
          <Link className="album-link" to={this.props.link}>
            <div className="lazy-image js-lazy-image-loaded"
                 data-aspect="1">
              <canvas
                  className="placeholder"
                  width={2560}
                  height={2560}
                  style={{backgroundColor: '#89847c'}}>
              </canvas>
              <img className="lazyautosizes lazyloaded"
                   data-sizes="auto"
                   src={this.props.src}/>
            </div>
            <div className="title"><span>{this.props.title}</span></div>
          </Link>
        </div>
    );
  }
}

export default Album;