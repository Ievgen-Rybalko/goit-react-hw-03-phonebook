import ContactItem from './ContactItem';
import PropTypes from 'prop-types';

import styles from './ContactList.module.css';

const ContactList = ({ contacts, onDeleteCont }) => (
  <div>
    <p className={styles.title}>Contact list</p>
    <ul>
      {contacts.map(({ name, number, id }) => {
        return (
          <ContactItem
            key={id}
            id={id}
            name={name}
            number={number}
            onDeleteContact={onDeleteCont}
          />
        );
      })}
    </ul>
  </div>
);

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.any.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }),
  ),
};

export default ContactList;
