import React, { Component } from 'react';
import propTypes from 'prop-types';

import "./style.css"


/*
function UserCardInfo({ children, emoji }) {
    return (
        <p className="user-card__info">
            <span className="user-card__info-emoji">{emoji}</span>
            {children}
        </p>
    )
}*/

class UserCard extends Component {
    render() {
        const { id, name, email, phone, company } = this.props;

        return (
            <div className="user-card">
                <img className="user-card__img" src={`https://api.adorable.io/avatars/100/${id}`}/>
                <div className="user-card__profile">
                    <p className="user-card__info">
                        <span className="user-card__info-emoji">👤</span>
                        {name}
                    </p>
                    <p className="user-card__info">
                        <span className="user-card__info-emoji">💼</span>
                        {company.name}
                    </p>
                    <p className="user-card__info">
                        <span className="user-card__info-emoji">📞</span>
                        {phone}
                    </p>
                    <p className="user-card__info">
                        <span className="user-card__info-emoji">📧</span>
                        {email}
                    </p>
                </div>
            </div>
       )
    }
}

UserCard.propTypes = {
    id: propTypes.number.isRequired,
}

export default UserCard;