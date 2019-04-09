import React from "react";

import HJumbotron from "../components/HJumbotron";
import HCardView from "../containers/HCardView";
import {routes} from "../routes";

class HLandingPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            itemsInRow: 4,
            endpoint: process.env.REACT_APP_API_LANDING_PAGE,
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
                    urlPattern={routes.APPLICATION_PAGE}
                    itemsInRow={this.state.itemsInRow}
                    cards={this.state.cards}
                />
            </div>
        );
    }
}

export default HLandingPage;