import React, {useState} from 'react'
import Input from './Input';

function Header(){
    const [selectedSource, setSelectedSource] = useState(null);
    return <div className='Header'>
        <div className='Title'></div>
        <div className='InputAndMic'>
        <Input setSelected={setSelectedSource} InputType="Source"></Input>
        </div>
    </div>
}
export default Header;
