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
    let menu = <Menu>{this.menuItems}</Menu>;
    let social = <SocialLinks data={site.social}/>;
    let footer = <Footer/>;
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
          newComponent = <Album photos={item.images}/>;
          break;
        case 'album-collection':
          let covers = item.albums.map((albumData, i) => {
            let template = <Template content={<Album photos={albumData.images}/>}
                                     menu={menu}
                                     sidebar={<SideBar img={albumData.cover}
                                                       social={social}/>}
                                     footer={footer}/>;
            this.routes.push(<Route exact path={albumData.link} component={() => template}
                                    key={this.routes.length}/>);
            return <AlbumCover key={i} link={albumData.link}
                               cover={albumData.cover}
                               caption={albumData.name}
                               desc={albumData.desc}/>
          });
          newComponent = <AlbumContainer>{covers}</AlbumContainer>;
          break;
        default:
      }
      this.menuItems.push({
        name: item.name,
        link: item.link
      });
      let template = <Template content={newComponent}
                               menu={menu}
                               sidebar={<SideBar img={item.cover}
                                                 social={social}/>}
                               footer={footer}/>;
      this.routes.push(<Route exact path={item.link} component={() => template} key={this.routes.length}/>);
    }
  }
}

export default App;
