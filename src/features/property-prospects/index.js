import React from 'react';
import 'leaflet/dist/leaflet.css';
import PropertyMap from './components/PropertyMap';
import PropertyTile from './components/PropertyTile';


const images = [
    {name: "Grey Abbey", icon : "../../../house.jpeg", description : "This nice house"},
    {name: "Grey Abbey", icon : "../../../house.jpeg", description : "This nice house"},
    {name: "Grey Abbey", icon : "../../../house.jpeg", description : "This nice house"},
    {name: "Grey Abbey", icon : "../../../house.jpeg", description : "This nice house"},
    {name: "Grey Abbey", icon : "../../../house.jpeg", description : "This nice house"},
    {name: "Grey Abbey", icon : "../../../house.jpeg", description : "This nice house"},
    {name: "Grey Abbey", icon : "../../../house.jpeg", description : "This nice house"},
    {name: "Grey Abbey", icon : "../../../house.jpeg", description : "This nice house"},
    {name: "Grey Abbey", icon : "../../../house.jpeg", description : "This nice house"},
    {name: "Grey Abbey", icon : "../../../house.jpeg", description : "This nice house"},
];

const properties = [
    {
      name: "Casa Bonita",
      description: "A beautiful house located in the city center, close to all amenities.",
      latitude: 34.0445,
      longitude: -84.2526,
      squareFootage: 2500,
      bedrooms: 4,
      bathrooms: 3,
      price: 750000,
    },

    {
        name: "Hello",
        description: "A beautiful house located in the city center, close to all amenities.",
        latitude: 34.052703,
        longitude: -84.248075,
        squareFootage: 2500,
        bedrooms: 4,
        bathrooms: 3,
        price: 750000,
      },
];

function PropertyProspects(){

    return(
        <>
            <h2 className="text-2xl font-semibold mb-4">Top 10 Listings For You</h2>
            <PropertyTile images = {images} />
            <PropertyMap properties={properties} />
        </>
    )
}

export default PropertyProspects