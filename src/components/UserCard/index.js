import React from 'react'
import styled from 'styled-components'
import LazyLoad from 'react-lazyload'
import propTypes from 'prop-types'

import { UserCardInfo } from '../UserCardInfo';

export const UserCard = ({id, name, email, phone, address, company}) => (
    <ContainerUserCard>
       <LazyLoad>
            <UserCardImage alt="avatar" src={`https://source.unsplash.com/collection/${id}/400x300`}/>
       </LazyLoad>
       <UserCardProfile>
            <UserCardInfo children={name} emoji={"👤"}>{name}</UserCardInfo>
            <UserCardInfo children={email} emoji={"📧"}>{email}</UserCardInfo>
            <UserCardInfo children={phone} emoji={"📞"}>{phone}</UserCardInfo>
            <UserCardInfo children={address.city} emoji={"📍"}>{address.city}</UserCardInfo>
            <UserCardInfo children={company.name} emoji={"💼"}>{company.name}</UserCardInfo>
        </UserCardProfile>  
    </ContainerUserCard>
)


UserCard.propTypes = {
    id: propTypes.number.isRequired,
};


const ContainerUserCard = styled.div`
    display: flex;
    box-shadow: 0 0 0.5rem rgb(0 0 0 / 50%);
    border-radius: 0.3rem;
    padding: 1rem;
    font-size: 1.4rem;
    width: 400px;
    margin: 2rem 2rem 2rem 0;
`

const UserCardImage = styled.img`
    width: 15rem;
    height: 15rem;
    border-radius: 50%;
    margin: auto;
`

const UserCardProfile = styled.div`
 
`





