// Write your Character component here
import React from 'react'
import styled from 'styled-components'

export default function Character(props) {
    const { data } = props

    const StyledDiv = styled.div`
        text-align: center;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    
    `

    const StyledList = styled.ul`
       display: flex;
       flex-direction: column;
       justify-content: center;
       justify-items: center;
       align-items: center;
       align-content: center;
    `

    const StyledListItem = styled.li`
        list-style: none;
    `

    const CharacterInfo = styled.div`
     
    `

    const DisplayButtons = styled.div`
    
    `

    const OpenButton = styled.button`
        font-size: 1.3rem;
    `

    const CloseButton = styled.button`
        display: none;
        font-size: 1.3rem;
    `


    return (
        <StyledDiv>
            <h2>{data.name}</h2>
            <DisplayButtons className='buttons'>
                <OpenButton>⇃</OpenButton>
                <CloseButton>↾</CloseButton>
            </DisplayButtons>
            <CharacterInfo>
                <h3>Data:</h3>
                <StyledList>
                    <StyledListItem>Birth Year: {data.birth_year}</StyledListItem>
                    <StyledListItem>Homeworld: {data.homeworld.name}</StyledListItem>
                    <StyledListItem>Eye Color: {data.eye_color}</StyledListItem>
                    <StyledListItem>Gender: {data.gender}</StyledListItem>
                    <StyledListItem>Hair Color: {data.hair_color}</StyledListItem>
                    <StyledListItem>Height: {data.height}</StyledListItem>
                    <StyledListItem>Mass: {data.mass}</StyledListItem>
                    <StyledListItem>Skin Color: {data.skin_color}</StyledListItem>
                </StyledList>
            </CharacterInfo>
        </StyledDiv>
    )
}