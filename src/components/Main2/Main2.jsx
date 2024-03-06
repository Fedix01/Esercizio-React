import React from 'react'
import ListItem from '../ListItem/ListItem'
export default function Main2() {
    const songs = [
        ["Diamond"],
        ["Fly Away"],
        ["Ciao Ciao"]]
    return (
        <>
            <ListItem canzoni={songs} />
        </>
    )
}
