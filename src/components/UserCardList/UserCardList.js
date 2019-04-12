import React, {Component} from 'react';
import {SearchInput} from "../SearchInput";
import {UserCard} from "../UserCard";
import "./style.css"

class UserCardList extends Component {
    state = {users: [], filteredUsers: []}

    componentDidMount() {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(res => res.json())
            .then((users) => {
                this.setState({users});
            })
    }

    handleSearch = (search) => {
        const { users } = this.state; // const users = this.state.users;
        const filteredUsers = search ===  "" ? [] : users.filter((u) => u.name.includes(search) || u.email.includes(search));

        // const filteredUsers = search ===  "" ? this.state.users : this.state.users.filter((u) => u.name === search);

        this.setState({ filteredUsers });
    }

    render() {
        const {filteredUsers} = this.state;

        return (
            <React.Fragment>
                <SearchInput onChange={this.handleSearch}/>
                <div className="card-list">
                    {filteredUsers.map(user => (
                        <UserCard
                            id={user.id}
                            name={user.name}
                            email={user.email}
                            phone={user.phone}
                            company={user.company}
                        />
                    ))}
                </div>
            </React.Fragment>
        )
    }
}

export default UserCardList;