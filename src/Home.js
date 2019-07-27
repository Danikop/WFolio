import React from 'react';
//import './components/News.css'
import Template from './components/Template/Template'
import AlbumCover from "./components/AlbumCover/AlbumCover";
import AlbumContainer from "./components/AlbumContainer/AlbumContainer";
//import axios from 'axios'
import ReactDom from "react-dom";

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            images: []
        }
    }

    componentDidMount() {
      /*
        axios.get('/wedding-albums')
            .then(response => {
                const images = response.data;
                //console.log(images);
                this.setState({
                    images: images
                })
            });
       */
    }

    render() {
        const albums = this.state.images.map(e =>
            <AlbumCover
                title={e.title}
                src={'images/albums/' + e.logo}
                path={e.path}
            />
        );
        const content =
            <AlbumContainer>
                {albums}
            </AlbumContainer>;
        return (
            <Template>
                {content}
            </Template>
        );
    }
}
export default Home;

ReactDom.render(<Home/>, document.getElementById('root'));
