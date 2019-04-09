import React from 'react';

import HCard from "../components/HCard";


class HCardView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            itemsInRow: props.itemsInRow,
            bootstrapGridValue: this.calculateBootstrapGridValue(),
            cards: props.cards,
            urlPattern: props.urlPattern,
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
                urlPattern={this.props.urlPattern}
                bootstrapGridValue={this.state.bootstrapGridValue}
                card={items[i]}
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