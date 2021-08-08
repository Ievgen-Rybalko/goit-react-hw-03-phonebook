import PropTypes from 'prop-types';

import styles from './ContactList.module.css';

const Filter = ({ message, filter, onChange }) => (
  <div>
    <p className={styles.contactlist__item}>{message}</p>
    <input
      className={styles.button}
      type="text"
      value={filter}
      onChange={onChange}
      pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
      title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
      required
    />
  </div>
);

Filter.propTypes = {
  message: PropTypes.string.isRequired,
  filter: PropTypes.string,
};

export default Filter;
