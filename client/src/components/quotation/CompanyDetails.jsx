import React from "react"

const CompanyDetails = ({ companyDetails, handleChange }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 mb-6">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800">Company Details</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Company Logo:</label>
          <input
            type="file"
            accept="image/*"
            onChange={(e) => handleChange("logo", e.target.files[0])}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Company Name:</label>
          <input
            type="text"
            value={companyDetails.name}
            onChange={(e) => handleChange("name", e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Company Name"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">CIN:</label>
          <input
            type="text"
            value={companyDetails.cin}
            onChange={(e) => handleChange("cin", e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="CIN"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Company Address:</label>
          <input
            type="text"
            value={companyDetails.address}
            onChange={(e) => handleChange("address", e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Company Address"
          />
        </div>
      </div>
    </div>
  )
}

export default CompanyDetails

