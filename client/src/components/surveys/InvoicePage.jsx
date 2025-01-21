import React, { useRef } from "react"
import { useLocation, useNavigate } from "react-router-dom"

const InvoicePage = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const { formData } = location.state || {}
  const printRef = useRef()

  if (!formData) {
    return <div>No data available</div>
  }

  const { companyDetails, quotationDetails, clientDetails, items } = formData

  const calculateTotals = () => {
    const totalArea = items.reduce((sum, item) => sum + (item.area || 0), 0)
    const totalUnits = items.reduce((sum, item) => sum + (item.quantity || 0), 0)
    const subtotal = items.reduce((sum, item) => sum + (item.total || 0), 0)
    const grandTotal = subtotal

    return { totalArea, totalUnits, grandTotal, pricePerSqft: grandTotal / (totalArea || 1) }
  }

  const { totalArea, totalUnits, grandTotal, pricePerSqft } = calculateTotals()

  const handlePrint = () => {
    window.print()
  }

  return (
    <div className="container mx-auto px-4 py-8 bg-gray-50">
      <div ref={printRef} className="bg-white shadow-md rounded-lg p-6 mb-6">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-gray-800">Invoice</h1>
          <button
            onClick={handlePrint}
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline print:hidden"
          >
            Print Invoice
          </button>
        </div>

        <div className="mb-6 flex items-center">
          {companyDetails.logo && (
            <img
              src={URL.createObjectURL(companyDetails.logo) || "/placeholder.svg"}
              alt="Company Logo"
              className="w-24 h-24 object-contain mr-4"
            />
          )}
          <div>
            <h2 className="text-2xl font-semibold mb-2 text-gray-800">{companyDetails.name}</h2>
            <p>{companyDetails.address}</p>
            <p>CIN: {companyDetails.cin}</p>
          </div>
        </div>

        <div className="mb-6">
          <h2 className="text-2xl font-semibold mb-2 text-gray-800">Quotation Details</h2>
          <p>Date: {quotationDetails.date}</p>
          <p>Quotation Number: {quotationDetails.number}</p>
        </div>

        <div className="mb-6">
          <h2 className="text-2xl font-semibold mb-2 text-gray-800">Client Details</h2>
          <p>{clientDetails.name}</p>
          <p>{clientDetails.address}</p>
        </div>

        <div className="mb-6">
          <h2 className="text-2xl font-semibold mb-2 text-gray-800">Items</h2>
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-200">
                <th className="border p-2">Type</th>
                <th className="border p-2">Quantity</th>
                <th className="border p-2">Area (Sqft)</th>
                <th className="border p-2">Unit Price</th>
                <th className="border p-2">Total</th>
              </tr>
            </thead>
            <tbody>
              {items.map((item, index) => (
                <tr key={index}>
                  <td className="border p-2">{item.type}</td>
                  <td className="border p-2">{item.quantity}</td>
                  <td className="border p-2">{item.area}</td>
                  <td className="border p-2">{item.unitPrice}</td>
                  <td className="border p-2">{item.total}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mb-6">
          <h2 className="text-2xl font-semibold mb-2 text-gray-800">Totals</h2>
          <p>Total Area: {totalArea.toFixed(2)} Sqft</p>
          <p>Total Units: {totalUnits}</p>
          <p>Price per Sqft: ₹{pricePerSqft.toFixed(2)}</p>
          <p className="font-bold">Grand Total: ₹{grandTotal.toFixed(2)}</p>
        </div>

        <button
          onClick={() => navigate("/")}
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline print:hidden"
        >
          Back to Form
        </button>
      </div>
    </div>
  )
}

export default InvoicePage

