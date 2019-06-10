import React from 'react';
import './Detail.css';

const Detail = ({item, handleChange, handleClick}) => {
    const handleChangeItem = (e, type) => {
        const value = e.target.value
        if (!value)
            return;
        let newDetail = {...item, [type]: value};
        handleChange(newDetail);
        return;
    }
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

export default Detail;