import React from 'react';

import HCategoryTopic from '../components/HCategoryTopic';

class HCategoryTopicsView extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            topics: []
        };
    }

    componentDidMount() {
        this.loadTopics();
    }


    loadTopics = () => {
        const categoryName = this.props.match.params.categoryName;
        fetch(`http://127.0.0.1:8000/api/forum/categories/${categoryName}/topics`)
            .then(data => data.json())
            .then((data) => this.setState({topics: data}))
    };


    createListOfTopics() {
        let topics = this.state.topics;
        let listOfTopics = [];

        if (topics.length === 0) {
            return;
        }

        topics.map((topic, index) => {
            return listOfTopics.push(<HCategoryTopic
                loadTopics={this.loadTopics}
                topic={topic}
                key={index}/>)
        });

        return listOfTopics
    }


    render() {
        return (
            <ul className="list-unstyled container">
                {this.createListOfTopics()}
            </ul>
        );
    }
}

export default HCategoryTopicsView;