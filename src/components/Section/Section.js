import PropTypes from 'prop-types';
import styles from './Section.module.css';

const Section = ({ title, children }) => (
  <div className={styles.section + ' ' + styles.container}>
    {title && <h2> {title}</h2>}
    {children}
  </div>
);

Section.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string,
};

export default Section;
