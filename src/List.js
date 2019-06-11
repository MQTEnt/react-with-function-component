import React, { Component } from 'react';
import Item from './Item';
import Utility from './Utility';
import Detail from './Detail';
import Create from './Create';
import './List.css';

const items = [
    { id: 1, name: 'Apple', price: 10 },
    { id: 2, name: 'Banana', price: 11 },
    { id: 3, name: 'Orange', price: 12 },
    { id: 4, name: 'Strawberry', price: 13 },
    { id: 5, name: 'Lemon', price: 14 },
    { id: 6, name: 'Waterlemon', price: 15 }
  ];

class List extends Component {
    constructor(props) {
        super(props);

        this.state = {items, 'selectedItem': null};

        this.selectItem = this.selectItem.bind(this);
        this.changeItem = this.changeItem.bind(this);
        this.createNewItem = this.createNewItem.bind(this);
        this.clickCreateButton = this.clickCreateButton.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
    }
    selectItem(item) {
        this.setState({'selectedItem': item, 'displayCreate': false});
    }
    changeItem(item) {
        const updatedList = this.state.items.map(i => i.id === item.id ? item : i);
        this.setState({items: updatedList, selectedItem: item});
    }
    createNewItem(item) {
        const newItem = {...item, id: this.state.items.length + 1};
        const updateList = [...this.state.items, newItem];
        this.setState({items: updateList});
    }
    clickCreateButton() {
        this.setState({'selectedItem': null, 'displayCreate': true});
    }
    deleteItem(id) {
        const updatedList = this.state.items.filter(i => i.id !== id);
        this.setState({items: updatedList, selectedItem: null});
    }
    render() {
        const {items, selectedItem, displayCreate} = this.state;
        return (
            <div>
                <ul>
                {
                    items.map(item => 
                        <Utility 
                            key={item.id}
                            render={utility => (
                                <Item 
                                    utility={utility}
                                    item={item}
                                    handleClick={this.selectItem}
                                />
                        )}/>
                    )
                }
                </ul>
                <button type="button" onClick={this.clickCreateButton}>+</button>
                {displayCreate && !selectedItem ? <Create handleClick={this.createNewItem}/> : ''}
                {selectedItem && !displayCreate ? 
                <Detail
                    item={selectedItem}
                    handleChange={this.changeItem}
                    handleClick={this.deleteItem}
                />
                : ''}
            </div>
        );
    }
}
 
export default List;