import './App.css';
import site from './site'
import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import AlbumCover from "./components/AlbumCover/AlbumCover";
import Album from "./components/Album/Album";
import AlbumContainer from "./components/AlbumContainer/AlbumContainer";
import PriceList from "./components/PriceList/PriceList";
import BackStage from "./components/Backstage/BackStage";
import Contacts from "./components/Contacts/Contacts";
import Menu from "./components/Menu/Menu";
import SideBar from "./components/SideBar/SideBar";
import Footer from "./components/Footer/Footer";
import SocialLinks from "./components/SocialLinks/SocialLinks";
import Template from "./components/Template/Template";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.routes = [];
    this.menuItems = [];
    this.state = {
      sidebarLogo: null
    };
    this.buildRoutesContent(site);
  }

  render() {
    console.log(JSON.stringify(site, null, 4));
    return (
        <BrowserRouter>
          <Switch>{this.routes}</Switch>
        </BrowserRouter>
    );
  }

  buildRoutesContent(json_site) {
    for (let item of json_site.menu) {
      let newComponent = null;
      switch (item.type) {
        case 'page':
          switch (item.name) {
            case 'Price':
              newComponent = <PriceList/>;
              break;
            case 'Backstage':
              newComponent = <BackStage videos={item.videos}/>;
              break;
            case 'Contacts':
              newComponent = <Contacts/>;
              break;
            default: {
            }
          }
          break;
        case 'album':
          newComponent = <Album images={item.images} cover={item.cover} desc={item.desc}/>;
          break;
        case 'album-collection':
          let covers = item.albums.map((album, i) => <AlbumCover key={i} link={album.link}
                                                                 cover={album.cover}
                                                                 caption={album.name}
                                                                 desc={album.desc}/>);
          newComponent = <AlbumContainer>{covers}</AlbumContainer>;
          break;
        default:
      }
      let route = item.homepage ? '/' : item.link;
      this.menuItems.push({
        name: item.name,
        link: route
      });
      let template = <Template sidebarLogo={item.cover}
                               content={newComponent}
                               menu={<Menu>{this.menuItems}</Menu>}
                               sidebar={<SideBar img={item.cover}
                                                 social={<SocialLinks data={site.social}/>}/>}
                               footer={<Footer/>}/>;
      this.routes.push(<Route exact path={route} component={() => template} key={this.routes.length}/>);
    }
  }
}

export default App;
