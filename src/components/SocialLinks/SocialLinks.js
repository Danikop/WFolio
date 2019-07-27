import React from 'react';
import './SocialLinks.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faFacebookSquare, faInstagram, faTelegramPlane, faVk} from "@fortawesome/free-brands-svg-icons";

class SocialLinks extends React.Component {
  render() {
    return (
        <ul className="social-links">
          {this.props.data.map(item => {
            let icon = {
              'vk': <FontAwesomeIcon icon={faVk} color='#fff'/>,
              'instagram': <FontAwesomeIcon icon={faInstagram} color='#fff'/>,
              'telegram': <FontAwesomeIcon icon={faTelegramPlane} color='#fff'/>,
              'facebook': <FontAwesomeIcon icon={faFacebookSquare} color='#fff'/>
            }[item.site];
            console.log(icon);
            return (<li className="social-item">
              <a title={item.link}
                 className="link"
                 target="_blank"
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