import React from 'react'
import "./Main.css"
import Trow from '../Trow/Trow';
export default function Main({ utenti }) {

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
                        {utenti.map((element) => <Trow key={element.ID} utente={element} />)}
                    </tbody>
                </table>
            </div>
        </main>
    )
}
