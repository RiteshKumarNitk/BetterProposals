import React from "react"

const QuotationDetails = ({ quotationDetails, handleChange }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 mb-6">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800">Quotation Details</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Date:</label>
          <input
            type="date"
            value={quotationDetails.date}
            onChange={(e) => handleChange("date", e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Quotation No:</label>
          <input
            type="text"
            value={quotationDetails.number}
            onChange={(e) => handleChange("number", e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Quotation Number"
          />
        </div>
      </div>
    </div>
  )
}

export default QuotationDetails

