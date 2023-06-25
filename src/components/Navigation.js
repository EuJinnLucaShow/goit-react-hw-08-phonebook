import React from 'react';

const styles = {
  link: {
    display: 'inline-block',
    textDecoration: 'none',
    padding: 12,
    fontWeight: 700,
    color: '#2A363B',
  },
  activeLink: {
    color: '#E84A5F',
  },
};

const Navigation = () => (
  <nav>
    <div to="" exact style={styles.link} activeStyle={styles.activeLink}>
      Home
    </div>

    <div to="" exact style={styles.link} activeStyle={styles.activeLink}>
      Phonebook
    </div>
  </nav>
);

export default Navigation;
