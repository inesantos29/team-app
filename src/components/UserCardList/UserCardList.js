import React, {Component} from 'react';
import {SearchInput} from "../SearchInput";
import {UserCard} from "../UserCard";
import "./style.css"

class UserCardList extends Component {
    state = {
        users: [],
        filteredUsers: [],
    };

    componentDidMount() {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(res => res.json())
            .then((users) => {
                this.setState({users: users, filteredUsers: users});
            })
    }

    handleSearch = (search) => {
        const normalizedSearch = search.toLowerCase();
        const { users } = this.state; // const users = this.state.users;
        const filteredUsers = search ===  "" ? users : users.filter((u) => u.name.toLowerCase().includes(normalizedSearch) || u.email.toUpperCase().includes(normalizedSearch));

        this.setState({ filteredUsers });
    }

    render() {
        const {filteredUsers} = this.state;

        return (
            <>
                <SearchInput onChange={this.handleSearch}/>
                <div className="card-list">
                    {filteredUsers.map(user => (
                        <UserCard
                            id={user.id}
                            key={user.id}
                            name={user.name}
                            email={user.email}
                            phone={user.phone}
                            company={user.company}
                        />
                    ))}
                </div>
            </>
        )
    }
}

export default UserCardList;