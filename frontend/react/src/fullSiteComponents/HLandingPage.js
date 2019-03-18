import React from "react";

import HJumbotron from "../components/HJumbotron";
import HCardView from "../containers/HCardView";

class HLandingPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            itemsInRow: 4,
            endpoint: "http://127.0.0.1:8000/api/forum/categories",
            categories: []
        };
    }

    componentDidMount() {
        fetch(this.state.endpoint)
            .then(data => data.json())
            .then((data) => this.setState({categories: data}))
    }

    render() {
        return (
            <div>
                <HJumbotron/>
                <HCardView itemsInRow={this.state.itemsInRow} endpoint={this.state.endpoint}/>
            </div>
        );
    }
}

export default HLandingPage;