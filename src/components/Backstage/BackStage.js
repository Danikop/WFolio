import React from 'react';
import ReactDom from "react-dom";

class BackStage extends React.Component {
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

        return (
            "dsd"
        );
    }
}
export default BackStage;
