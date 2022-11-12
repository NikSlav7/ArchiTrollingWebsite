import { useState } from 'react';
import '../src/Arturpage.css'
function ArturPage(props){
    const[pic, setPic] = useState('');
    const[txt, setTxt] = useState('');
    const[meme, setMeme] = useState('');

    function getProps(){
        if (pic == '') {
            let pic = Math.floor(Math.random() * props.pics.length);
            setPic(props.pics[pic])
            setTxt(props.texts[pic][ Math.floor(Math.random() * props.texts[pic].length)]);
           setMeme(props.memes[Math.floor(Math.random() * props.memes.length)]);
        }
    }
    getProps();
    return (
    <div className='ArturPageContainer'>
        <div className="ArturContainer">

        <img className='ArturLohPic ArturLohPicAnimation' src={pic} />
      
        <h2 className='ArturLohText ArturLohTextAnimation'>{txt}</h2>
       
    </div>
        <img className='ArturLohMemePic ArturLohMemePicAnimation' src={meme}/>
    </div>)
}
export default ArturPage;