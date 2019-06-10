import React from 'react';

function pP(WrappedComponent) {
  return class PP extends React.Component {
    constructor(props) {
        super(props)
        this.state = {};
    }

    handleChangeItem(e, type) {
        const {item, handleChange} = this.props;
        const value = e.target.value
        if (!value)
            return;
        let newDetail = {...item, [type]: value};
        handleChange(newDetail);
        return;
    }

    render() {
        const props = Object.assign({}, this.props, {
            handleChangeItem: this.handleChangeItem.bind(this),
        });
        return <WrappedComponent {...props}/>
    }
  }
}

export default pP;