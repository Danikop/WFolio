import React from 'react';
import './Logo.css'
import {Link} from "react-router-dom";
import logo from "../../assets/logo.png";

class Logo extends React.Component {
  render() {
    return (
        <div className="logo">
          <Link className='logo-link' to='/'>
            <img className="logo-image"
                 alt="Фотограф Шунтиков Сергей"
                 src={logo}
            />
          </Link>
        </div>
    );
  }
}

export default Logo;