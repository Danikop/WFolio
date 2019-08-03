import React from 'react';
import Section from "../Section/Section";
import './PriceList.css'
import SocialLinks from "../SocialLinks/SocialLinks";

class PriceList extends React.Component {

  render() {
    return (
        <div className='price-list'>
          {this.props.images.map((img, i) =>
              <Section key={i}>
                <img className='price-item'
                     src={img}/>
              </Section>
          )}
          <Section>
            <h3>Связаться со мной просто!</h3>
            <p>
              Пишите мне в социальные сети.
            </p>
            <div className='inline-social'>{this.props.social}</div>
            <p>Телефон: <b>тэлефончык</b></p>
          </Section>
        </div>
    );
  }
}

export default PriceList;
