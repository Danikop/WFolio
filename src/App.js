import './App.css';
import site from './site'
import React from 'react';
import {BrowserRouter, Link, Switch, Route} from 'react-router-dom';
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
    console.log(site);
    return (
        <BrowserRouter>
          <div className="app">
            <SideBar img={this.state.sidebarLogo}
                     social={<SocialLinks data={site.social}/>}/>
            <main className="main">
              <div className="content">
                <header className="main-header">
                  <Menu>{this.menuItems}</Menu>
                </header>
                <Switch>{this.routes}</Switch>
              </div>
              <Footer/>
            </main>
          </div>
        </BrowserRouter>
    );
  }

  buildRoutesContent(json_site) {
    console.log(this);
    for (let item of json_site.menu) {
      let newComponent = null;
      console.log(item);
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
          let covers = item.albums.map(album => <AlbumCover link={album.link}
                                                            cover={album.cover}
                                                            caption={album.name}
                                                            desc={album.desc}/>);
          newComponent = <AlbumContainer>{covers}</AlbumContainer>;
          break;
        default:
      }
      this.menuItems.push({
        name: item.name,
        link: item.homepage ? '/' : item.link,
        onClick: () => {
          this.setState({sidebarLogo: item.cover});
        }
      });
      if (newComponent)
        this.routes.push(<Route exact path={item.link}
                                component={() => newComponent}/>);
    }
  }
}

export default App;
