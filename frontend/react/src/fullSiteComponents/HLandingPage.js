import React from "react";

import HJumbotron from "../components/HJumbotron";
import HCardView from "../containers/HCardView";

class HLandingPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            itemsInRow: 4,
            endpoint: "http://127.0.0.1:8000/api/forum/categories",
            cards: []
        };
    }

    componentDidMount() {
        fetch(this.state.endpoint)
            .then(data => data.json())
            .then((data) => this.setState({cards: data}))
    }

    render() {
        if (this.state.cards.length === 0)
            return 0;

        return (
            <div>
                <HJumbotron/>
                <HCardView
                    itemsInRow={this.state.itemsInRow}
                    endpoint={this.state.endpoint}
                    cards={this.state.cards}
                />
            </div>
        );
    }
}

export default HLandingPage;