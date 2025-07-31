import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import {
  fetchContacts,
  deleteContact,
} from '../redux/contacts/contactsOperations';
import ContactForm from '../components/ContactForm/ContactForm';
import Filter from '../components/Filter/Filter';

export default function ContactsPage() {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts.items);
  const isLoading = useSelector(state => state.contacts.isLoading);
  const filter = useSelector(state => state.filter);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const handleDelete = id => {
    dispatch(deleteContact(id));
  };

  const visibleContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div>
      <h2>Your Contacts</h2>

      <ContactForm />
      <Filter />

      {isLoading && <p>Loading...</p>}
      <ul>
        {visibleContacts.map(({ id, name, number }) => (
          <li key={id}>
            {name}: {number}
            <button onClick={() => handleDelete(id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
