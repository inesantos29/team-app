import React from 'react';

import "./style.css"

const UserCardInfo = ({ children, emoji }) => (
    <p className="user-card__info">
        <span className="user-card__info-emoji">{emoji}</span>
        {children}
    </p>
);

export default UserCardInfo;