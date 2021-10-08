// Write your Character component here
import React from 'react'
import styled from 'styled-components'

export default function Character(props) {
    const { data } = props

    return (
        <div>
            <h2>{data.name}</h2>
            <div>
                <h3>Data:</h3>
                <ul>
                    <li>Birth Year: {data.birth_year}</li>
                    <li>Homeworld: {data.homeworld.name}</li>
                    <li>Eye Color: {data.eye_color}</li>
                    <li>Gender: {data.gender}</li>
                    <li>Hair Color: {data.hair_color}</li>
                    <li>Height: {data.height}</li>
                    <li>Mass: {data.mass}</li>
                    <li>Skin Color: {data.skin_color}</li>
                </ul>
            </div>
        </div>
    )
}