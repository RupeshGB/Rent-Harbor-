import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { setPageTitle, showNotification } from "../common/headerSlice"
import LeaseAgreementContent from "./components/LeaseAgreementContent"

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

function LeaseAgreement(){

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setPageTitle({ title : "Documentation"}))
      }, [])

    const propertyIds = [1, 2, 3]; // IDs of the properties

    return (
        <>
        <article className="prose" style={{ marginBottom: '20px' }}>
            <h1>Lease Agreements</h1>
        </article>

        {propertyIds.map((propertyId) => (
            <LeaseAgreementContent key={propertyId} propertyId={propertyId} />
        ))}
        </>
    );
}

export default LeaseAgreement