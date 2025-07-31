import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from '../../redux/contacts/contactsOperations';

export default function ContactForm() {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({ name: '', number: '' });

  const contacts = useSelector(state => state.contacts.items);

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = e => {
    e.preventDefault();

    const normalizedName = formData.name.toLowerCase();

    const isDuplicate = contacts.some(
      contact => contact.name.toLowerCase() === normalizedName
    );

    if (isDuplicate) {
      alert(`${formData.name} is already in contacts.`);
      return;
    }

    dispatch(addContact(formData));
    setFormData({ name: '', number: '' });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Add Contact</h3>
      <input
        type="text"
        name="name"
        value={formData.name}
        placeholder="Name"
        onChange={handleChange}
        required
      />
      <input
        type="tel"
        name="number"
        value={formData.number}
        placeholder="Phone Number"
        onChange={handleChange}
        required
      />
      <button type="submit">Add</button>
    </form>
  );
}
