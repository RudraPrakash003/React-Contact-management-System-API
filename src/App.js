import React, { useState, useEffect } from 'react';
import axios from 'axios';

const App = () => {
  const [contacts, setContacts] = useState([]);
  const [contactData, setContactData] = useState({ name: '', email: '', phone: '' });
  const [editingContactId, setEditingContactId] = useState(null);
  const [nextId, setNextId] = useState(1);

  useEffect(() => {
    fetchContacts();
  }, []);

  const fetchContacts = async () => {
    try {
      const res = await axios.get('https://jsonplaceholder.typicode.com/users');
      setContacts(res.data);
      const maxId = Math.max(...res.data.map(contact => contact.id), 0);
      setNextId(maxId + 1);
    } catch (error) {
      console.error('Error fetching contacts', error);
    }
  };

  const handleAddContact = async () => {
    try {
      const newContact = { ...contactData, id: nextId };
      const res = await axios.post('https://jsonplaceholder.typicode.com/users', newContact);
      setContacts([...contacts, res.data]);
      setContactData({ name: '', email: '', phone: '' });
      setNextId(nextId + 1);
      console.log('Add Contact Response:', res.data);
    } catch (error) {
      console.error('Error adding contact', error);
    }
  };

  const handleEditContact = async (id) => {
    try {
      const res = await axios.put(`https://jsonplaceholder.typicode.com/users/${id}`, contactData);
      setContacts(contacts.map(contact => contact.id === id ? res.data : contact));
      setEditingContactId(null);
      setContactData({ name: '', email: '', phone: '' });
      console.log('Edit Contact Response:', res.data);
    } catch (error) {
      console.error('Error editing contact', error);
    }
  };

  const handleDeleteContact = async (id) => {
    try {
      await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`);
      setContacts(contacts.filter(contact => contact.id !== id));
    } catch (error) {
      console.error('Error deleting contact', error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setContactData({ ...contactData, [name]: value });
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Contact Management System</h1>

      <div className="mb-8">
        <h2 className="text-xl mb-2">{editingContactId ? 'Edit Contact' : 'Add Contact'}</h2>
        <input
          className="border p-2 mb-2 w-full"
          type="text"
          name="name"
          placeholder="Name"
          value={contactData.name}
          onChange={handleInputChange}
        />
        <input
          className="border p-2 mb-2 w-full"
          type="email"
          name="email"
          placeholder="Email"
          value={contactData.email}
          onChange={handleInputChange}
        />
        <input
          className="border p-2 mb-2 w-full"
          type="text"
          name="phone"
          placeholder="Phone"
          value={contactData.phone}
          onChange={handleInputChange}
        />
        <button
          className="bg-blue-500 text-white p-2"
          onClick={() => {
            editingContactId ? handleEditContact(editingContactId) : handleAddContact();
          }}
        >
          {editingContactId ? 'Update Contact' : 'Add Contact'}
        </button>
      </div>

      <div>
        <h2 className="text-xl mb-2">Contact List</h2>
        <ul>
          {contacts.map(contact => (
            <li key={contact.id} className="border p-2 mb-2">
              <p>Name: {contact.name}</p>
              <p>Email: {contact.email}</p>
              <p>Phone: {contact.phone}</p>
              <button
                className="bg-green-500 text-white p-2 mr-2"
                onClick={() => {
                  setEditingContactId(contact.id);
                  setContactData({ name: contact.name, email: contact.email, phone: contact.phone });
                }}
              >
                Edit
              </button>
              <button
                className="bg-red-500 text-white p-2"
                onClick={() => handleDeleteContact(contact.id)}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default App;
