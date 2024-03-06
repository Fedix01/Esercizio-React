import React from 'react'

export default function ListItem({ canzoni }) {

    return (
        <div>
            <ol>
                {canzoni.map((element) => <li key={element}>{element}</li>)}
            </ol>
        </div>
    )
}
