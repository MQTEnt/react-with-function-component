import React from 'react';

const Item = ({item, handleClick}) => {
    return <li key={item.id} onClick={e => handleClick(item)}>{item.name} / {item.price}$</li>
}
 
export default Item;