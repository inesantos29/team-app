import React from 'react'
import styled from 'styled-components'

import  GlobalStyle  from './globalStyle'
import { UserCardList } from './components/UserCardList'

function App() {
  return (
    <>
      <GlobalStyle/>
      <Container>
        <Title>Team App</Title>
        <UserCardList /> 
      </Container>
  </>
  )
}

export default App


const Container = styled.main`
  max-width: 1366px;
  margin: 0 auto;
  padding: 40px;

  display: flex;
  flex-direction: column;
  align-items: center;
`

const Title = styled.h1`
 font-size: 30px;
 margin-bottom: 50px;
`

