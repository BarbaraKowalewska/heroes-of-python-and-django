import React from 'react';

import HCard from "../components/HCard";

class CategoryListView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            categories: []
        };
    }


    componentDidMount() {
        fetch("http://127.0.0.1:8000/api/forum/")
            .then(data => data.json())
            .then((data) => this.setState({categories: data}))
    }


    createGrid = () => {
        let items = this.state.categories;
        let itemsQuantity = items.length;
        let itemsInRow = 4;
        let rowsQuantity = Math.floor(itemsQuantity / itemsInRow);
        let itemsInLastRow = itemsQuantity % itemsInRow;
        let container = [];

        if (itemsQuantity === 0) {
            return;
        }

        for (let i = 0; i < rowsQuantity; i++) {
            let row = [];
            for (let j = 0; j < itemsInRow; j++) {
                row.push(< HCard category={items[j + (itemsInRow * i)]}/>);
            }
            container.push(<div className="row">{row}</div>)
        }

        if (itemsInLastRow !== 0) {
            let row = [];
            for (let i = 0; i < itemsInLastRow; i++) {
                row.push(< HCard category={items[rowsQuantity * itemsInRow + i]}/>);
            }
            container.push(<div className="row">{row}</div>)
        }

        return container;
    }


    render() {
        return (
            <div className="container">
                {this.createGrid()}
            </div>
        );
    }
}

export default CategoryListView;