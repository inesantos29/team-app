import React, { Component } from 'react';
import propTypes from 'prop-types';
import {UserCardInfo} from "../UserCardInfo";

import "./style.css"


class UserCard extends Component {
    render() {
        const { id, name, email, phone, company } = this.props;

        return (
            <div className="user-card">
                <img className="user-card__img" src={`https://api.adorable.io/avatars/100/${id}`}/>
                <div className="user-card__profile">
                    <UserCardInfo children={name} emoji={"👤"}>{name}</UserCardInfo>
                    <UserCardInfo children={company.name} emoji={"💼"}>{company.name}</UserCardInfo>
                    <UserCardInfo children={phone} emoji={"📞"}>{phone}</UserCardInfo>
                    <UserCardInfo children={email} emoji={"📧"}>{email}</UserCardInfo>
                </div>
            </div>
       )
    }
}

UserCard.propTypes = {
    id: propTypes.number.isRequired,
};

export default UserCard;