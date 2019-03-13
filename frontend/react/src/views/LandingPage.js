import React from "react";

import HJumbotron from "../components/HJumbotron";

class LandingPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            categories: []
        };
    }

    componentDidMount() {
        fetch("http://127.0.0.1:8000/api/forum/")
            .then(data => data.json())
            .then((data) => this.setState({categories: data}))
    }

    render() {
        return (
            <HJumbotron categories={this.state.categories}/>
        );
    }
}



export default LandingPage;