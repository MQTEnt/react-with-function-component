import React from 'react';

const Item = ({item, handleClick, utility}) => {
    return <li key={item.id} onClick={e => handleClick(item)}>
        {utility.capitalizeWord(item.name)} / {utility.addCurrentUnit(item.price)}
    </li>
}
 
export default Item;