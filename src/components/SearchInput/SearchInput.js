import React, { Component } from 'react';

import "./style.css"

class SearchInput extends Component {
    render() {
        const { onChange } = this.props;

        return (
            <div className="search">
                <input className="search__input" type="text" onChange={(e) => onChange(e.target.value)} placeholder="Search here..."/>
                <button className="search__btn" type="submit">Search</button>
            </div>
        )
    }
}

export default SearchInput;