import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { setPageTitle } from "../common/headerSlice";
import PropertyContent from "./components/PropertyContent";

// Simple modal component for demonstration
const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(0, 0, 0, 0.5)', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <div style={{ backgroundColor: 'white', padding: 20, borderRadius: 5, width: '50%' }}>
        <button onClick={onClose} style={{ float: 'right' }}>Close</button>
        {children}
      </div>
    </div>
  );
};

function Charts() {
  const dispatch = useDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [properties, setProperties] = useState([
    {
      id: 1,
      address: '123 Main Street, Springfield',
      leasor: 'Jane Doe',
      type: 'Residential',
      size: 1500,
      yearBuilt: 1995,
      amenities: ['Swimming Pool', 'Garage', 'Garden'],
      monthlyRent: 2500,
      status: 'Available'
    },
    // More initial properties can be added here
  ]);

  const [newProperty, setNewProperty] = useState({
    address: '',
    leasor: '',
    type: '',
    size: '',
    yearBuilt: '',
    amenities: '',
    monthlyRent: '',
    status: ''
  });

  const handleInputChange = (e) => {
    setNewProperty({ ...newProperty, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const nextId = properties.length + 1;
    const formattedProperty = {
      ...newProperty,
      id: nextId,
      size: parseInt(newProperty.size), // Ensure size is an integer
      yearBuilt: parseInt(newProperty.yearBuilt), // Ensure yearBuilt is an integer
      monthlyRent: parseFloat(newProperty.monthlyRent), // Ensure monthlyRent is a float
      amenities: newProperty.amenities.split(',').map(item => item.trim())
    };
    setProperties([...properties, formattedProperty]);
    setNewProperty({
      address: '',
      leasor: '',
      type: '',
      size: '',
      yearBuilt: '',
      amenities: '',
      monthlyRent: '',
      status: ''
    });
    closeModal();
  };

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  useEffect(() => {
    dispatch(setPageTitle({ title: "My Properties" }));
  }, []);


  return (
    <div style={{ marginBottom: '20px' }}>
        {properties.map((property) => (
        <PropertyContent key={property.id} propertyId={property.id} propertyInfo={property} />
        ))}

        <button 
        onClick={openModal} 
        style={{ backgroundColor: 'black', color: 'white', border: 'none', padding: '10px 20px', margin: '10px 0' }}
        >
        Add Property
        </button>
      
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <form onSubmit={handleSubmit}>
          <input name="address" value={newProperty.address} onChange={handleInputChange} placeholder="Address" />
          <input name="leasor" value={newProperty.leasor} onChange={handleInputChange} placeholder="Leasor" />
          <input name="type" value={newProperty.type} onChange={handleInputChange} placeholder="Type" />
          <input name="size" value={newProperty.size} onChange={handleInputChange} placeholder="Size (sqft)" type="number" />
          <input name="yearBuilt" value={newProperty.yearBuilt} onChange={handleInputChange} placeholder="Year Built" type="number" />
          <input name="amenities" value={newProperty.amenities} onChange={handleInputChange} placeholder="Amenities (comma separated)" />
          <input name="monthlyRent" value={newProperty.monthlyRent} onChange={handleInputChange} placeholder="Monthly Rent" type="number" />
          <input name="status" value={newProperty.status} onChange={handleInputChange} placeholder="Status" />
          <button type="submit">Add Property</button>
        </form>
      </Modal>
    </div>
  );
}

export default Charts;
