import React from 'react'
import styled from 'styled-components'


export const SearchBar = ({ handleSearch }) => (

    <SearchForm>
        <SearchInput 
            type="text"
            placeholder="Search by name and email..."
            onChange={(e) => handleSearch(e.target.value)}>
        </SearchInput>
    </SearchForm>
)

const SearchForm = styled.form`
    display: flex;
    width: 100%;
`

const SearchInput = styled.input`
    padding: 1em;
    flex-grow: 1;
    font-size: inherit;
    border: none;
    background-color: #EEE;
    border-radius: 3px;
    margin-bottom: 40px;


    &:focus{
        outline: 0;
        background: #fff;
        box-shadow: 0 0 2px rgba(0,0,0,.8);
    }

    &::-webkit-input-placeholder {
        color: #999;
        font-style: italic;
    }

    &::-moz-placeholder {
        color: #999;
        font-style: italic;
    }

    &::-ms-input-placeholder {
        color: #999;
        font-style: italic;
    }

`








