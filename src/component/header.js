import React from 'react'
import troll from '../images/troll-face.png'
export default function Header() {
    return (
        <header>
            <img src={troll} alt="error" />
            <span>Meme Generator</span>
        </header>

    )
}
