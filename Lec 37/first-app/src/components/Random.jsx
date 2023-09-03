import React from 'react'
import './Random.css'

const Random = () => {
    const emojis = ['😀', '😋', '😶', '😱', '🤡', '💀']
    const randomNum = Math.floor(Math.random() * 10);

    const emojiList = emojis.map((item, index) => {
        return <li key={index}>{item}</li>
    });

    // const arr = [];
    // for(let item of emojis){
    //     arr.push(<li>{item}</li>)
    // }

    return (
        <div>
            {/* {randomNum %2 === 0 ? <img src="https://images.unsplash.com/photo-1692721430986-6d71f39afe48?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=800&q=60" alt="" /> : ''} */}
            {randomNum %2 === 0 && <img src="https://images.unsplash.com/photo-1692721430986-6d71f39afe48?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=800&q=60" alt="" />}
            {emojiList}
            {/* {arr} */}
            {randomNum}
        </div>
    )
}

export default Random