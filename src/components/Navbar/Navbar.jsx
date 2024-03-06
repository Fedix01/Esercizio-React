import React from 'react'
import "./Navbar.css"
export default function Navbar({ menu }) {
    console.log(menu)
    return (
        <div>
            <nav>
                <ol>
                    {menu.map((item) => <li key={item}>{item}</li>)}
                </ol>
            </nav>
        </div>
    )
}
