import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';

const PropertyMap = ({ properties }) => {
    const myIcon = new L.Icon({
        iconUrl: '../../../../map_icon.png', // Add your image path here
        iconSize: [32, 32], // Size of the icon
        iconAnchor: [16, 32], // Point of the icon which will correspond to marker's location
        popupAnchor: [0, -32], // Point from which the popup should open relative to the iconAnchor
    });
    return (
            <MapContainer center={[34.0445, -84.2526]} zoom={13} style={{ height: '400px', width: '100%' }}>
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            {properties.map((property, index) => (
                <Marker key={index} position={[property.latitude, property.longitude]} icon={myIcon}>
                    <Popup>
                        {property.name}<br />
                        {property.description}
                    </Popup>
                </Marker>
            ))}
        </MapContainer>
    );
};

export default PropertyMap;