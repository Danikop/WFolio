import React from 'react';
import './SideBar.css'
import Logo from "../Logo/Logo";

class SideBar extends React.Component {
  render() {
    return (
        <aside className="sidebar">
          <div className="sidebar-background"
               style={{
                 backgroundColor: 'rgb(94, 87, 75)',
                 backgroundImage: `url("${this.props.img}")`
               }}>
          </div>
          <Logo/>
          <div className='sidebar-social'>
            {this.props.social}
          </div>
        </aside>
    );
  }
}

export default SideBar;