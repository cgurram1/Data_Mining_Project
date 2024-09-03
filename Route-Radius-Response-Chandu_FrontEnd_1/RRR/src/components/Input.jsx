import React from 'react'
import PlacesAutocomplete from './PlacesAutocomplete';
import { PiFlagPennantFill } from "react-icons/pi";
import { MdLocationPin } from "react-icons/md";

function Input({setSelected, InputType}){
    return <div className='InputDiv'>
        <div className='InputMarker'>
            {InputType === "Destination" ? (
            <PiFlagPennantFill size={"25px"} color='Blue'/>
            ) : (
            <MdLocationPin size={"25px"} color='Red'/> // Assuming you also want to specify size and color for TiLocation
            )}
        </div>
        <div className='InputText'>
            <div className="places-container">
                <PlacesAutocomplete setSelected={setSelected} InputType={InputType}/>
            </div>
        </div>
    </div>
}

export default Input;