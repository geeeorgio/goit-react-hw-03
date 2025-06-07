import { User, Phone } from "lucide-react";
import css from "./Contact.module.css";

const Contact = ({ contact: { id, name, number }, handleDeleteContact }) => {
  return (
    <li className={css.item}>
      <div className={css.info}>
        <p className={css.text}>
          <User size={18} />
          {name}
        </p>
        <p className={css.text}>
          <Phone size={18} />
          {number}
        </p>
      </div>
      <button
        className={css.button}
        type="button"
        onClick={() => handleDeleteContact(id)}
      >
        Delete
      </button>
    </li>
  );
};

export default Contact;
