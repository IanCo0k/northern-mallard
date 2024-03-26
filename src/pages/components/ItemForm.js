import { useState, useRef, useEffect } from 'react';

export default function ItemForm({ onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    image_key_1: '',
    image_key_2: '',
    image_key_3: '',
    startingBid: '',
    expirationDate: '',
  });

  const formRef = useRef(null);

  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (formRef.current && !formRef.current.contains(e.target)) {
        onClose();
      }
    };

    document.addEventListener('mousedown', handleOutsideClick);
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [onClose]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/postItem', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      if (!response.ok) {
        throw new Error('Failed to add new item');
      }
      console.log('New item added successfully');
      // Optionally, you can clear the form data after submission
      setFormData({
        name: '',
        description: '',
        image_key_1: '',
        image_key_2: '',
        image_key_3: '',
        startingBid: '',
        expirationDate: '',
      });
      onClose();
    } catch (error) {
      console.error('Error adding new item:', error.message);
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 backdrop-filter backdrop-blur-sm">
      <div ref={formRef} className="bg-white p-8 rounded-md w-96">
        <h2 className="text-lg font-semibold mb-4">Add New Item</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block font-medium">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="border border-gray-300 rounded-md w-full px-3 py-2 focus:outline-none focus:border-blue-500"
              required
            />
          </div>
          <div>
            <label htmlFor="description" className="block font-medium">Description:</label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              className="border border-gray-300 rounded-md w-full px-3 py-2 focus:outline-none focus:border-blue-500"
              required
            ></textarea>
          </div>
          <div>
            <label htmlFor="image_key_1" className="block font-medium">Image URL 1:</label>
            <input
              type="text"
              id="image_key_1"
              name="image_key_1"
              value={formData.image_key_1}
              onChange={handleChange}
              className="border border-gray-300 rounded-md w-full px-3 py-2 focus:outline-none focus:border-blue-500"
              required
            />
          </div>
          <div>
            <label htmlFor="image_key_2" className="block font-medium">Image URL 2:</label>
            <input
              type="text"
              id="image_key_2"
              name="image_key_2"
              value={formData.image_key_2}
              onChange={handleChange}
              className="border border-gray-300 rounded-md w-full px-3 py-2 focus:outline-none focus:border-blue-500"
              required
            />
          </div>
          <div>
            <label htmlFor="image_key_3" className="block font-medium">Image URL 3:</label>
            <input
              type="text"
              id="image_key_3"
              name="image_key_3"
              value={formData.image_key_3}
              onChange={handleChange}
              className="border border-gray-300 rounded-md w-full px-3 py-2 focus:outline-none focus:border-blue-500"
              required
            />
          </div>
          <div>
            <label htmlFor="startingBid" className="block font-medium">Starting Bid:</label>
            <input
              type="number"
              id="startingBid"
              name="startingBid"
              value={formData.startingBid}
              onChange={handleChange}
              className="border border-gray-300 rounded-md w-full px-3 py-2 focus:outline-none focus:border-blue-500"
              required
            />
          </div>
          <div>
            <label htmlFor="expirationDate" className="block font-medium">Expiration Date:</label>
            <input
              type="date"
              id="expirationDate"
              name="expirationDate"
              value={formData.expirationDate}
              onChange={handleChange}
              className="border border-gray-300 rounded-md w-full px-3 py-2 focus:outline-none focus:border-blue-500"
              required
            />
          </div>
          <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-md focus:outline-none hover:bg-blue-600">Submit</button>
          <button type="button" onClick={onClose} className="bg-red-500 text-white py-2 px-4 rounded-md focus:outline-none hover:bg-red-600">Close</button>
        </form>
      </div>
    </div>
  );
}
