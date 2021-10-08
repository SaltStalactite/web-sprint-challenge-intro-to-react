// Write your Character component here
import React from 'react'

export default function Character(props) {
    const { data } = props
    return (
        <div>
            <h2>Name: {data.name}</h2>
            <p>Birth Year: {data.birth_year}</p>
        </div>
    )
}