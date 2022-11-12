import { useState } from 'react';
import '../src/Arturpage.css'
function ArturPage(props){
    const[pic, setPic] = useState('');
    const[txt, setTxt] = useState('');
    const[meme, setMeme] = useState('');

    function getProps(){
        if (txt == '') setTxt(props.texts[Math.floor(Math.random() * props.texts.length)]);
        console.log()
        if (pic == '') setPic(props.pics[Math.floor(Math.random() * props.pics.length)]);
        console.log(props);
    }
    getProps();
    return (
    <div className='ArturPageContainer'>
        <div className="ArturContainer">

        <img className='ArturLohPic ArturLohPicAnimation' src={pic} />
      
        <h2 className='ArturLohText ArturLohTextAnimation'>{txt}</h2>
       
    </div>
        <img className='ArturLohMemePic ArturLohMemePicAnimation' src={require('../src/pics/triangle.jpeg')}/>
    </div>)
}
export default ArturPage;