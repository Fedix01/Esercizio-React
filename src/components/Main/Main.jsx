import React from 'react'
import "./Main.css"

export default function Main({ utenti }) {
    console.log(utenti);
    return (
        <main>
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>Nome</th>
                            <th>Cognome</th>
                            <th>Età</th>
                        </tr>
                    </thead>
                    <tbody>
                        {utenti.map((element) => <tr key={element.ID}>
                            <td>{element.Name}</td>
                            <td>{element.Surname}</td>
                            <td>{element.Age}</td>
                        </tr>)}
                    </tbody>
                </table>
            </div>
        </main>
    )
}
