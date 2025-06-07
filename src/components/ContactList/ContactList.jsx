import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";

const ContactList = ({ contacts, filteredContacts, handleDeleteContact }) => {
  const list = filteredContacts.length > 0 ? filteredContacts : contacts;

  return (
    <ul className={css.list}>
      {list.map((contact) => (
        <Contact
          key={contact.id}
          contact={contact}
          handleDeleteContact={handleDeleteContact}
        />
      ))}
    </ul>
  );
};

export default ContactList;
