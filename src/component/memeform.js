import React, {useState} from 'react'
import defaultimage from '../images/default.png'
import memesData from '../memesData'
export default function Meme() {
  const [meme, setmeme] = useState(defaultimage);
  const [text,settext]=useState({toptext:"",bottomtext:""})


  const showaimage=()=>{
    const memearray=memesData.data.memes;
    const randomNumber = Math.floor(Math.random() * memearray.length)
    setmeme(memearray[randomNumber].url);
  }
  
  const handlechange=(e)=>{
    settext(()=>({
        ...text,
        [e.target.name]:e.target.value,
        [e.target.name]:e.target.value
    }))}
  return (
    <div id='memeform'>
        <div className="memeinput">
            <input type="text" name="toptext" value={text.toptext} onChange={handlechange} placeholder='top text' />
            <input type="text" name="bottomtext" value={text.bottomtext} onChange={handlechange} placeholder='bottom text' />
        </div>
        <input type="submit" value="Get a new meme image 🖼️" id='memesubmit'onClick={showaimage} />
        <img src={meme} alt='error' />
        <h1 className="toptext memetext">{text.toptext} </h1>
        <h1 className="bottomtext memetext">{text.bottomtext}</h1>
    </div>
  )
}
