import React from "react"

const ClientDetails = ({ clientDetails, handleChange }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 mb-6">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800">Client Details</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Client Name:</label>
          <input
            type="text"
            value={clientDetails.name}
            onChange={(e) => handleChange("name", e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Client Name"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Client Address:</label>
          <input
            type="text"
            value={clientDetails.address}
            onChange={(e) => handleChange("address", e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Client Address"
          />
        </div>
      </div>
    </div>
  )
}

export default ClientDetails

