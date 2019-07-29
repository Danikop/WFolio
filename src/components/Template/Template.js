import './Template.css';
import React from 'react';
// import {BrowserRouter, Link, Switch, Route} from 'react-router-dom';
// import AlbumCover from "./components/AlbumCover/AlbumCover";
// import Album from "./components/Album/Album";
// import AlbumContainer from "./components/AlbumContainer/AlbumContainer";
// import PriceList from "./components/PriceList/PriceList";
// import BackStage from "./components/Backstage/BackStage";
// import Contacts from "./components/Contacts/Contacts";
// import Menu from "./components/Menu/Menu";
// import SideBar from "./components/SideBar/SideBar";
// import Footer from "./components/Footer/Footer";
// import SocialLinks from "./components/SocialLinks/SocialLinks";

class Template extends React.Component {
  render() {
    return (
        <div className="app">
          {this.props.sidebar}
          <main className="main">
            <div className="content">
              <header className="main-header">
                {this.props.menu}
              </header>
              {this.props.content}
            </div>
            {this.props.footer}
          </main>
        </div>
    );
  }
}

export default Template;
