import React, { Component } from 'react';
import {SearchInput} from "../SearchInput";
import { UserCard } from "../UserCard";
import "./style.css"

class UserCardList extends Component {
    render() {
        return (
            <div>
                <h1>Blah</h1>
                <SearchInput/>
                <UserCard/>
            </div>

        )
    }
}

export default UserCardList;