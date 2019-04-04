import React from "react";

import HJumbotron from "../components/HJumbotron";
import HCardView from "../containers/HCardView";

class HLandingPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            itemsInRow: 4,
            endpoint: process.env.REACT_APP_API_FORUM_CATEGORIES,
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
                    cards={this.state.cards}
                />
            </div>
        );
    }
}

export default HLandingPage;