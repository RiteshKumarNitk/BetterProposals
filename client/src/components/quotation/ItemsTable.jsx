import React from "react"

const ItemsTable = ({ items, handleItemChange, handleRemoveItem, handleAddItem }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 mb-6">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800">Quotation Items</h2>
      {items.map((item, index) => (
        <div key={item.id} className="border border-gray-200 p-4 mb-4 rounded-lg">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Position Type</label>
              <select
                value={item.type}
                onChange={(e) => handleItemChange(index, "type", e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="" disabled>
                  Position Type
                </option>
                <option value="Mirror">Mirror</option>
                <option value="Window">Window</option>
                <option value="Gate">Gate</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Quantity</label>
              <input
                type="number"
                value={item.quantity}
                onChange={(e) => handleItemChange(index, "quantity", Number.parseInt(e.target.value) || 0)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Quantity"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Area (Sqft)</label>
              <input
                type="number"
                value={item.area}
                onChange={(e) => handleItemChange(index, "area", Number.parseFloat(e.target.value) || 0)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Area (Sqft)"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Unit Price</label>
              <input
                type="number"
                value={item.unitPrice}
                onChange={(e) => handleItemChange(index, "unitPrice", Number.parseFloat(e.target.value) || 0)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Unit Price"
              />
            </div>
          </div>
          <div className="mt-4">
            <button
              onClick={() => handleRemoveItem(index)}
              className="text-red-500 hover:text-red-700 text-sm font-medium"
            >
              Remove Item
            </button>
          </div>
        </div>
      ))}
      <button
        onClick={handleAddItem}
        className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      >
        Add Item
      </button>
    </div>
  )
}

export default ItemsTable

