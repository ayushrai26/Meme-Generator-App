import React from 'react'
import Data from '../Data'
export default function Main() {

    // const[memeImage , setMemeImage] = React.useState(" ")
      const[Meme, setMeme] = React.useState({
        toptext: "",
        bottomtext:"",
        randomImage:"https://i.imgflip.com/30b1gx.jpg"
      })
      const[allMemeImages, setAllMemeImages] = React.useState(Data)
    function getMemeImage(){
         const memesArray = allMemeImages.data.memes
         const randomNumber = Math.floor(Math.random()*memesArray.length)
         const url = memesArray[randomNumber].url
         setMeme(prevMeme => ({
            ...prevMeme, 
            randomImage:url
          }))
        
    }
    function handleChange(event){
      const{name, value} = event.target
      setMeme(prevMeme =>({
        ...prevMeme,
           [name]:value
      }))


    }
    return(
        <main>
           
            <div className='form'>
            
            <input 
            type='text'  
            placeholder='Top-text'
            className='form-input'
            name="toptext"
            value={Meme.toptext}
            onChange={handleChange}
            />
            <input 
            type='text'
            placeholder='Bottom-text'
            className='form-input'
            name="bottomtext"
            value={Meme.bottomtext}
            onChange={handleChange}
            />
            <button 
            className='form-button'
            onClick={getMemeImage}>
                Get a new meme image
            </button>

            </div>
            <div className="meme">
            <img src={Meme.randomImage} className="meme--image" />
            <h2 className="meme-text top">{Meme.toptext}</h2>
            <h2 className="meme-text bottom">{Meme.bottomtext}</h2>
            </div>
            
        </main>
    )
}