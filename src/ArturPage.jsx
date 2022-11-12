import { useState } from 'react';
import '../src/Arturpage.css'
function ArturPage(props){
    const[pic, setPic] = useState('');
    const[txt, setTxt] = useState('');
    const[meme, setMeme] = useState('');

    function getProps(){
            if (pic == '') generate();
    }
    function generate(){
        let pic = Math.floor(Math.random() * props.pics.length);
            setPic(props.pics[pic])
            setTxt(props.texts[pic][ Math.floor(Math.random() * props.texts[pic].length)]);
           setMeme(props.memes[Math.floor(Math.random() * props.memes.length)]);
    }
    function removeAnimations(){
        document.getElementById('ArturLohPic').classList.remove('ArturLohPicAnimation');
        document.getElementById('ArturLohText').classList.remove('ArturLohTextAnimation');
        document.getElementById('ArturLohMeme').classList.remove('ArturLohMemePicAnimation');
    }
    function setAnims(){
        document.getElementById('ArturLohPic').classList.add('ArturLohPicAnimation');
        document.getElementById('ArturLohText').classList.add('ArturLohTextAnimation');
        document.getElementById('ArturLohMeme').classList.add('ArturLohMemePicAnimation');
    }
    function reset(){
        removeAnimations();
        void document.getElementById('ArturLohPic').offsetWidth;
        generate();
        setAnims();
        
    }
    getProps(true);
    return (
    <div className='ArturPageContainer'>
        <div className="ArturContainer">

        <img id ='ArturLohPic' className='ArturLohPic ArturLohPicAnimation' src={pic} />
      
        <h2 id = 'ArturLohText' className='ArturLohText ArturLohTextAnimation'>{txt}</h2>
       
      </div>
        <img id = 'ArturLohMeme' className='ArturLohMemePic ArturLohMemePicAnimation' src={meme}/>

      <div>
        <button className = 'resetButton' onClick={() => reset()}>Reset Karlik</button>
      </div>

    </div>)
}
export default ArturPage;