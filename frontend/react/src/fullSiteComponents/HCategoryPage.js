import React from "react";
import HCardView from "../containers/HCardView";

class HCategoryPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            itemsInRow: 3,
            endpoint: "http://127.0.0.1:8000/api/forum/categories",
            cards: [],
            urlCategory: "topics"
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
            <div style={{paddingLeft: '20%', paddingRight: '20%'}}>
                <HCardView
                    urlCategory={this.state.urlCategory}
                    itemsInRow={this.state.itemsInRow}
                    endpoint={this.state.endpoint}
                    cards={this.state.cards}
                />
            </div>
        );
    }
}

export default HCategoryPage;