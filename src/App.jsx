import { useEffect, useState } from "react";
import { nanoid } from "nanoid";
import ContactForm from "./components/ContactForm/ContactForm";
import SearchBox from "./components/SearchBox/SearchBox";
import ContactList from "./components/ContactList/ContactList";
import "./App.css";

const initialContacts = [
  { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
  { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
  { id: "id-3", name: "Eden Clements", number: "645-17-79" },
  { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
];

function App() {
  const getInitialContacts = () => {
    const saved = JSON.parse(localStorage.getItem("CONTACTS"));
    return Array.isArray(saved) && saved.length > 0 ? saved : initialContacts;
  };

  const [contacts, setContacts] = useState(getInitialContacts);
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    localStorage.setItem("CONTACTS", JSON.stringify(contacts));
  }, [contacts]);

  const handleSearchChange = (e) => {
    setSearchValue(e.target.value);
  };

  const handleFormSubmit = (values) => {
    setContacts([...contacts, { id: nanoid(), ...values }]);
  };

  const handleDeleteContact = (id) => {
    setContacts((prev) => prev.filter((contact) => contact.id !== id));
  };

  const visibleContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(searchValue.trim().toLowerCase())
  );

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm handleFormSubmit={handleFormSubmit} />
      <SearchBox value={searchValue} onChange={handleSearchChange} />
      <ContactList
        contacts={visibleContacts}
        handleDeleteContact={handleDeleteContact}
      />
    </div>
  );
}

export default App;
