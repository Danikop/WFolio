import React from 'react';
import './Article.css'

class Article extends React.Component {
  render() {
    return (
        <section className='article'>
          <p>
            <h1>{this.props.title}</h1>
            {this.props.text}
          </p>
        </section>
    );
  }
}

export default Article;
