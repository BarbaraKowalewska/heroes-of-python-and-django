import React from "react";

import HJumbotron from "../components/HJumbotron";
import CategoryListView from "../containers/CategoryListView";

class HLandingPage extends React.Component {
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
            <div>
            <HJumbotron/>
            <CategoryListView/>
            </div>
        );
    }
}

export default HLandingPage;