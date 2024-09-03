
import React, {useState, useEffect} from 'react';
import { GoogleMap, useLoadScript, Marker, OverlayView} from '@react-google-maps/api';
import Input from './Input';
import { PiFlagPennantFill } from "react-icons/pi";
// import Mic from './Mic';
import 'regenerator-runtime/runtime';

const libraries = ['places'];
const mapContainerStyle = {
  width: '800px',
  height: '90vh',
};
const defaultCenter = {
  lat: 7.2905715,
  lng: 80.6337262,
};

const AppTemplate = () => {
    const [selectedSource, setSelectedSource] = useState(null);
    const [selectedDestination, setSelectedDestination] = useState(null);
    const [center, setCenter] = useState(defaultCenter);
    const { isLoaded, loadError } = useLoadScript({
        googleMapsApiKey: 'Your_API_Key_here',
        libraries,
    });

    useEffect(() => {
        if (selectedSource) {
            setCenter(selectedSource);
        } else if (selectedDestination) {
            setCenter(selectedDestination);
        }
    }, [selectedSource, selectedDestination]);

    if (loadError) {
        return <div>Error loading maps</div>;
    }

    if (!isLoaded) {
        return <div>Loading maps</div>;
    }
    const renderCustomMarker = (position) => (
        <OverlayView
            position={position}
            mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}
        >
            <div style={{ transform: 'translate(-50%, -50%)' }}>
                <PiFlagPennantFill size={"50px"} color="Blue" /> {/* Customize as needed */}
            </div>
        </OverlayView>
    );
    return <div className='Main'>
        <div className='Left'>
            <div className='Input'>
            <Input setSelected={setSelectedSource} InputType="Source"></Input>
            <Input setSelected={setSelectedDestination} InputType="Destination"></Input>
            </div>
            <div className='Mic'>
                {/* <Mic></Mic> */}
            </div>
        </div>
        <div className='Right'>
            <GoogleMap
                mapContainerStyle={mapContainerStyle}
                zoom={10}
                center={center}
            >
                {selectedSource && <Marker position={selectedSource} />}
                {selectedDestination && renderCustomMarker(selectedDestination)}
            </GoogleMap>
        </div>
    </div>
}

export default AppTemplate;
