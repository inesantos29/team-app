import React from 'react';
import styled from 'styled-components'


export const UserCardInfo = ({ children, emoji }) => (
    <Info>
        <Emoji>{emoji}</Emoji>
        {children}
    </Info>
);

const Info = styled.p`
    margin: 12px 0 12px; 
`

const Emoji = styled.span`
    padding-right: 1rem;    
`