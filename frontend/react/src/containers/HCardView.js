import React from 'react';

import HCard from "../components/HCard";


class HCardView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            itemsInRow: props.itemsInRow,
            bootstrapGridValue: this.calculateBootstrapGridValue(),
            endpoint: props.endpoint,
            host: "",
            categories: []
        };
    }


    componentDidMount() {
        fetch(this.state.endpoint)
            .then(data => {
                    let parser = document.createElement('parser');
                    parser.href = data.url;
                    this.setState({host: parser.origin});
                    return data;
                }
            )
            .then(data => data.json())
            .then((data) => this.setState({categories: data}))
    }


    calculateBootstrapGridValue = () => {
        return 12 / this.props.itemsInRow;
    };


    createGrid = () => {
        this.calculateBootstrapGridValue();

        let items = this.state.categories;
        let itemsQuantity = items.length;
        let rowsQuantity = Math.floor(itemsQuantity / this.state.itemsInRow);
        let itemsInLastRow = itemsQuantity % this.state.itemsInRow;
        let container = [];

        if (itemsQuantity === 0) {
            return;
        }

        for (let i = 0; i < rowsQuantity; i++) {
            let row = [];
            for (let j = 0; j < this.state.itemsInRow; j++) {
                row.push(< HCard
                    urlCategory={this.props.urlCategory}
                    bootstrapGridValue={this.state.bootstrapGridValue}
                    host={this.state.host}
                    category={items[j + (this.state.itemsInRow * i)]}/>);
            }
            container.push(<div className="row">{row}</div>)
        }

        if (itemsInLastRow !== 0) {
            let row = [];
            for (let i = 0; i < itemsInLastRow; i++) {
                row.push(< HCard
                    urlCategory={this.props.urlCategory}
                    bootstrapGridValue={this.state.bootstrapGridValue}
                    host={this.state.host}
                    category={items[rowsQuantity * this.state.itemsInRow + i]}/>);
            }
            container.push(<div className="row">{row}</div>)
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