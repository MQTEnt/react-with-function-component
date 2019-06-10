import React, { useState } from 'react';
import './Detail.css';

const Create = ({handleClick}) => {
    const [item, setItem] = useState({name: '', price: ''});
    const handleChangeInput = (e, type) => {
        let i = {...item, [type]: e.target.value};
        setItem(i); // Hook for setting State in Function Component
        return;
    }
    const disableCreateButton = () => {
        return !item.name || !item.price;
    }
    return (
        <div>
            Create Item
            <br/>
            <input type="text" value={item.name} onChange={e => handleChangeInput(e, 'name')}/>
            <br/>
            <input type="text" value={item.price} onChange={e => handleChangeInput(e, 'price')} />
            <br/>
            <button type="button" disabled={disableCreateButton()} onClick={() => handleClick(item)}>Create</button>
        </div>
    );
}

export default Create;