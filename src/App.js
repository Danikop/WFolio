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

function App() {
  console.log(JSON.stringify(site, null, 4));
  let routes = [], menuItems = [];
  buildRoutes(site, routes, menuItems);
  console.log(routes);
  console.log(site);
  return (
      <BrowserRouter>
        <div className="app">
          <SideBar img='content/wedding/wedding 1/img-1.jpg'
                   social={<SocialLinks data={site.social}/>}/>
          <main className="main">
            <div className="content">
              <header className="main-header">
                <Menu>{menuItems}</Menu>
              </header>
              <Switch>{routes}</Switch>
            </div>
            <Footer/>
          </main>
        </div>
      </BrowserRouter>
  );
}

function buildRoutes(json_site, routes, menuItems) {
  for (let item of json_site.menu) {
    console.log(item);
    switch (item.type) {
      case 'page':
        switch (item.name) {
          case 'PriceList':
            routes.push(<Route exact path={item.link} component={PriceList}/>);
            menuItems.push({
              name: 'Price',
              link: item.link
            });
            break;
          case 'Backstage':
            routes.push(<Route path={item.link} component={() => <BackStage videos={item.videos}/>}/>);
            menuItems.push({
              name: 'Backstage',
              link: item.link
            });
            break;
          case 'Contacts':
            routes.push(<Route path={item.link} component={Contacts}/>);
            menuItems.push({
              name: 'Contacts',
              link: item.link
            });
            break;
          default: {
          }
        }
        break;
      case 'album':
        routes.push(<Route path={item.link} component={
          () => <Album images={item.images} cover={item.cover} desc={item.desc}/>}/>);
        menuItems.push({
          name: item.name,
          link: item.link
        });
        break;
      case 'album-collection':
        let covers = item.albums.map(album => <AlbumCover link={album.link}
                                                          cover={album.cover}
                                                          caption={album.name}
                                                          desc={album.desc}/>);
        routes.push(<Route exact path={item.link} component={() => <AlbumContainer>{covers}</AlbumContainer>}/>);
        menuItems.push({
          name: item.name,
          link: item.link
        });
        break;
      default:
    }
  }
}

export default App;
