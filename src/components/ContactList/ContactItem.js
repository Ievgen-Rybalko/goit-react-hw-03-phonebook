import styles from './ContactList.module.css';

const ContactItem = ({ id, name, number, onDeleteContact }) => (
  <li className={styles.contactlist__item}>
    <p>
      {name}, {number}
    </p>
    <button
      type="button"
      className={styles.button__delete}
      onClick={() => onDeleteContact(id)}
    >
      Удалить
    </button>
  </li>
);

export default ContactItem;
