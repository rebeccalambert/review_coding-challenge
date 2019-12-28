import React from 'react';
import "./Emojis.css";

function Emojis( {update, guests, review} ) {
  
    let emojis_array = "😀 😁 😂 🤣 😃 😄 😅 😆 😉 😊 😋 😎 😍 😘 🥰 😗 😙 😚 🙂 🤗 🤩 🤔 🤨 😐 😑 😶 🙄 😏 😣 😥 😮 🤐 😯 😪 😫 😴 😌 😛 😜 😝 🤤 😒 😓 😔 😕 🙃 🤑 😲 🙁 😖 😞 😟 😤 😢 😭 😦 😧 😨 😩 🤯 😬 😰 😱 🥵 🥶 😳 🤪 😵 😡 😠 🤒 🤢 🤮 🤧 😇 🥳 🥴 🥺 🧐 🤓 😈 💀 👻 💩 🙌 💃 🕺 🏆 🥇 🥈 🥉 🌠 🎊 🎉 🧡 💚 💙 💜 🖤 💔".split(" ")
    // let others_array = "😈 💀 👻 💩 🙌 💃 🕺 🏆 🥇 🥈 🥉 🌠 🎊 🎉 🧡 💚 💙 💜 🖤 💔".split(" ")


    let emojis = emojis_array.map( ( emoji, idx) => {
        return <li key={`emojis-${idx}`}>{emoji}</li>
    });

    const newEmoji = (emoji) => {
        // console.log(emoji.innerText)
       update(guests, review, emoji)
    }

    // let others = others_array.map( ( obj, idx) => {
    //     return <li key={`others-${idx}`}>{obj}</li>
    // });
    
    return (
        <div>
            <p onClick={e=> newEmoji(e.target.innerText)}>{emojis}</p>
            {/* <p>{others_array}</p> */}
        </div>
    );
}

export default Emojis;

