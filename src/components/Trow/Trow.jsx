import React from 'react'
export default function Trow({ utente }) {
    console.log(utente)
    const { Name, Surname, Age } = utente;
    return (

        <tr>
            <td>{Name}</td>
            <td>{Surname}</td>
            <td>{Age}</td>
        </tr>


    )
}
