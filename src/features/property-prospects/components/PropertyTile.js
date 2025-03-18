import TitleCard from "../../../components/Cards/TitleCard"
import React from 'react';
import 'leaflet/dist/leaflet.css';

const PropertyTile = ({ images }) => {
    return (
        <div className="flex overflow-x-auto py-4 space-x-4 bg-gray-100 p-4 h-64">
            {images.map((image, index) => (
                <div key={index} className="min-w-[200px]">
                    <a href="https://www.zillow.com/homedetails/153-Harwell-Rd-NW-Atlanta-GA-30331/65441231_zpid/" target="_blank" rel="noopener noreferrer" className="no-underline">
                        <TitleCard title={image.name} topMargin={"mt-2"}>
                            <p className="flex">
                                <img alt="icon" src={image.icon} className="w-12 h-12 inline-block mr-4" />
                                {image.description}
                            </p>
                        </TitleCard>
                    </a>
                </div>
            ))}
        </div>
    );
};

export default PropertyTile;