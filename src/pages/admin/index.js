import { useEffect, useState } from 'react';
import ItemForm from '../components/ItemForm';

export default function ItemsDisplay() {
  const [items, setItems] = useState([]);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await fetch('/api/items');
        if (!response.ok) throw new Error('Failed to fetch items');
        const data = await response.json();
        setItems(data);
      } catch (error) {
        console.error('Error fetching items:', error);
      }
    };

    fetchItems();
  }, []);

  const modalTrigger = () => {
    setShowModal(true);
  }

  const handleEditName = async (itemId, newName) => {
    try {
      const response = await fetch(`/api/items/${itemId}/name`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name: newName }),
      });
      if (!response.ok) throw new Error('Failed to update name');
      // Update the item in the local state after successful update on the backend
      setItems(prevItems =>
        prevItems.map(item =>
          item.id === itemId ? { ...item, name: newName } : item
        )
      );
    } catch (error) {
      console.error('Error updating name:', error);
    }
  };

  const handleEditDescription = async (itemId, newDescription) => {
    try {
      const response = await fetch(`/api/items/${itemId}/description`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ description: newDescription }),
      });
      if (!response.ok) throw new Error('Failed to update description');
      // Update the item in the local state after successful update on the backend
      setItems(prevItems =>
        prevItems.map(item =>
          item.id === itemId ? { ...item, description: newDescription } : item
        )
      );
    } catch (error) {
      console.error('Error updating description:', error);
    }
  }
    

  return (
    <div className='p-6 relative mt-0 max-w-full w-full mx-auto bg-white rounded-xl shadow-md space-y-2 sm:p-8'>
      <div className='flex flex-col'>
        <h3 className='font-semibold text-lg text-gray-700'>Items List</h3>
        <button onClick={modalTrigger} className='bg-blue-500 text-white rounded px-4 py-1 focus:outline-none hover:bg-blue-600'>
          Add Item
        </button>
        {items.length === 0 ? (
          <p className='text-gray-500'>No items found.</p>
        ) : (
          <div className="overflow-x-auto">
            <table className="table-auto min-w-full divide-y divide-gray-200">
              {/* Table headers */}
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Description</th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">First Image</th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Second Image</th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Third Image</th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Starting Bid</th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Expires on</th>
                </tr>
              </thead>
              {/* Table body */}
              <tbody className="bg-white divide-y divide-gray-200">
                {items.map((item) => (
                  <tr key={item.id}>
                    {/* Editable columns */}
                    <td className="px-6 py-4 whitespace-nowrap">
                      <EditableField
                        value={item.name}
                        onSave={(newName) => handleEditName(item.id, newName)}
                      />
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <EditableField
                        value={item.description}
                        onSave={(newDescription) => handleEditDescription(item.id, newDescription)}
                      />
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <img src={item.image_key_1} alt={item.name} className="h-12 w-12" />
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <img src={item.image_key_2} alt={item.name} className="h-12 w-12" />
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <img src={item.image_key_3} alt={item.name} className="h-12 w-12" />
                    </td>

                    <td className="px-6 py-4 whitespace-nowrap">${item.starting_bid}</td>
                    <td className="px-6 py-4 whitespace-nowrap">{new Date(item.expiration_date).toLocaleDateString()}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {showModal && (
        <ItemForm onClose={() => setShowModal(false)} />
      )}
    </div>
  );
}

// A simple component for an editable field
function EditableField({ value, onSave }) {
  const [editing, setEditing] = useState(false);
  const [newValue, setNewValue] = useState(value);

  const handleSave = () => {
    onSave(newValue);
    setEditing(false);
  };

  return (
    <div className="relative">
      {editing ? (
        <div className="flex items-center">
          <input
            type="text"
            value={newValue}
            onChange={(e) => setNewValue(e.target.value)}
            className="border border-gray-300 rounded px-3 py-1 mr-2 focus:outline-none focus:border-blue-500"
          />
          <button
            onClick={handleSave}
            className="bg-blue-500 text-white rounded px-4 py-1 focus:outline-none hover:bg-blue-600"
          >
            Save
          </button>
        </div>
      ) : (
        <div
          onClick={() => setEditing(true)}
          className="border border-gray-300 rounded px-3 py-1 cursor-pointer hover:bg-gray-50"
        >
          {value}
        </div>
      )}
    </div>
  );
}

