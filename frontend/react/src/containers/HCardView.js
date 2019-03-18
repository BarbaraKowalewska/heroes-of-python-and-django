import React from 'react';

import HCard from "../components/HCard";


class HCardView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            itemsInRow: props.itemsInRow,
            bootstrapGridValue: this.calculateBootstrapGridValue(),
            host: process.env.REACT_APP_API_URL,
            cards: props.cards
        };
    }

    calculateBootstrapGridValue = () => {
        return Math.floor(12 / this.props.itemsInRow);
    };

    createGrid = () => {
        this.calculateBootstrapGridValue();

        let items = this.state.cards;
        let rowSize = this.state.itemsInRow;
        let itemsQuantity = items.length;

        let container = [];
        let row = [];

        for (let i = 0; i < itemsQuantity; i++) {

            row.push(<HCard
                urlCategory={this.props.urlCategory}
                bootstrapGridValue={this.state.bootstrapGridValue}
                host={this.state.host}
                category={items[i]}
            />);

            if (i % rowSize === rowSize - 1 || i + 1 === itemsQuantity) {
                container.push(<div className="row">{row}</div>);
                row = [];
            }
        }

        return container;
    };


    render() {
        return (
            <div className="container">
                {this.createGrid()}
            </div>
        );
    }
}

export default HCardView;