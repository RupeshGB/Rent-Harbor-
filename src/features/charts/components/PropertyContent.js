// import React from 'react';

// function PropertyContent({ propertyId, propertyInfo }) {
//   // Assume propertyInfo is an object containing property details passed as a prop
//   return (
//     <div>
//       <div style={{ marginBottom: '20px', borderRadius: '10px', padding: '20px', backgroundColor: 'white', width: '100%' }}>
//         <h2 className="text-xl font-bold">Property {propertyId}</h2>
//         <p className="mt-4">Address: {propertyInfo.address}</p>
//         <p className="mb-6">Current Leasor: {propertyInfo.leasor}</p>
//         <div className="mt-8">
//           <h2 className="text-l font-bold">Property Details</h2>
//           <ul className="list-none p-0">
//             {/* Example of displaying additional details */}
//             <li className="mb-2">Type: {propertyInfo.type}</li>
//             <li className="mb-2">Size: {propertyInfo.size} sqft</li>
//             <li className="mb-2">Year Built: {propertyInfo.yearBuilt}</li>
//             {/* Add more details as needed */}
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default PropertyContent;

import React from 'react';

function PropertyContent({ propertyId, propertyInfo }) {
  return (
    <div className="mb-5">
      <div className="bg-white rounded-lg p-5 shadow-md w-full">
        <h2 className="text-xl font-bold">Property {propertyId}</h2>
        <p className="mt-4">Address: {propertyInfo.address}</p>
        <p className="mb-6">Current Leasor: {propertyInfo.leasor}</p>
        <div className="mt-8">
          <h2 className="text-lg font-bold">Property Details</h2>
          <ul className="list-none p-0">
            <li className="mb-2">Type: {propertyInfo.type}</li>
            <li className="mb-2">Size: {propertyInfo.size} sqft</li>
            <li className="mb-2">Year Built: {propertyInfo.yearBuilt}</li>
            {/* Add more details as needed */}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default PropertyContent;
