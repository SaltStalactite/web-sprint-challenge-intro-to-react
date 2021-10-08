// Write your Character component here
import React from 'react'

export default function Character(props) {

    return (
        <div>
            <h2>Name: {props.name}</h2>
            <p>Birth Year: {props.birth_year}</p>
        </div>
    )
}