import React from 'react';

const Utility = (props) => {
    const capitalizeWord = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
    const addCurrentUnit = (string) => {
        return <span>{string}<sup>$</sup></span>
    }
    return (
        <div>
            { props.render({capitalizeWord, addCurrentUnit}) }
        </div>
    );
}
 
export default Utility;

// Utility is shared component, so using Render Prop technical (with Utility Component) to inject utility functions to components which wants to use