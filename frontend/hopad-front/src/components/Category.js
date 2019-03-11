import React from 'react';
import {List, Card} from 'antd';


const Category = (props) => {
    return (
        <List
            grid={{gutter: 16, column: 4}}
            dataSource={props.categories}
            renderItem={item => (
                <List.Item>
                    <Card title={item.name}>Card content</Card>
                </List.Item>
            )}
        />
    );
}

export default Category;