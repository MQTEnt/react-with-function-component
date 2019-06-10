import React from 'react';
import './Detail.css';
import pP from './HOC.js';


const Detail = ({item, handleChangeItem, handleClick}) => {
    return (
        <div>
            Detail Item
            <br/>
            <input type="text" value={item.name} onChange={e => handleChangeItem(e, 'name')}/>
            <br/>
            <input type="text" value={item.price} onChange={e => handleChangeItem(e, 'price')} />
            <br/>
            <button type="button" onClick={() => handleClick(item.id)}>Delete</button>
        </div>
    );
}

export default pP(Detail);

// function pP will handle change event of inputs (inside Detail Component)
// functiion pP also use 'item' and 'handleChange' (the props from List Component pass to Detail Component) to handle data
// ===> So that, we don't need to write change event funcion (handleChangeItem function) in Detail Component