import React, {useState, useEffect} from 'react';
import styled from 'styled-components'
import axios from 'axios'
import { SearchBar } from '../SearchBar'
import { UserCard } from '../UserCard'

export const UserCardList = () => {

    const [users, setUsers] = useState([]);
    const [filteredUsers, setFilteredUsers] = useState([]);
   

    useEffect(async () => {
        const response = await axios.get(
          'https://jsonplaceholder.typicode.com/users'
        );
        const users = response.data;
        
        setUsers(users);
        setFilteredUsers(users)
    }, []);

    const handleSearch = (search) => {
        const normalizedSearch = search.toLowerCase();
        const filteredUsers = search ===  "" ? users : users.filter((u) =>
            u.name.toLowerCase().includes(normalizedSearch) || u.email.toLowerCase().includes(normalizedSearch)
        )
        setFilteredUsers(filteredUsers);
    };


    const renderCard = (user) => {
        return (
            <UserCard
                key={user.id}
                id={user.id}
                name={user.name}
                email={user.email}
                phone={user.phone}
                address={user.address}
                company={user.company}
            />
        )
    }

    return (
        <>
            <SearchBar onChange={handleSearch}/>
            <ContainerUserCardList>
                {filteredUsers.map((user) => renderCard(user))}
            </ContainerUserCardList>
        </>
    )
    
}


const ContainerUserCardList = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
`

