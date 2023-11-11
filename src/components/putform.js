import React, { useState } from 'react';

const MyForm = () => {
  const [formData, setFormData] = useState({
    Name: '',
    Address1: '',
    License: '',
    Age: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5043/api/Customers', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const responseData = await response.json();
      console.log('Data sent successfully:', responseData);
      // You can handle the response data as needed
    } catch (error) {
      console.error('Error sending data to the API:', error.message);
      // Handle errors
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" name="Name" value={formData.Name} onChange={handleChange} />
      </label>
      <br />
      <label>
        Address:
        <input type="text" name="Address1" value={formData.Address1} onChange={handleChange} />
      </label>
      <br />
      <label>
        License:
        <input type="text" name="License" value={formData.License} onChange={handleChange} />
      </label>
      <br />
      <label>
        Age:
        <input type="number" name="Age" value={formData.Age} onChange={handleChange} />
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
  );
};

export default MyForm;
