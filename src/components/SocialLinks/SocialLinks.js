import React from 'react';
import './SocialLinks.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faFacebookSquare, faInstagram, faTelegramPlane, faVk} from "@fortawesome/free-brands-svg-icons";

class SocialLinks extends React.Component {
  render() {
    return (
        <ul className="social-links">
          {this.props.data.map((item, i) => {
            let icon = {
              'vk': <FontAwesomeIcon icon={faVk} color='#fff'/>,
              'instagram': <FontAwesomeIcon icon={faInstagram} color='#fff'/>,
              'telegram': <FontAwesomeIcon icon={faTelegramPlane} color='#fff'/>,
              'facebook': <FontAwesomeIcon icon={faFacebookSquare} color='#fff'/>
            }[item.site];
            return (<li className="social-item" key={i}>
              <a title={item.link}
                 className="link"
                 target="_blank"
                 rel="noopener noreferrer"
                 href={item.link}>
                {icon}
              </a>
            </li>)
          })}
        </ul>
    );
  }
}

export default SocialLinks;