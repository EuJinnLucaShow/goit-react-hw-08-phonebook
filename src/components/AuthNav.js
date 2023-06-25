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

export default function AuthNav() {
  return (
    <div>
      <div to="" exact style={styles.link} activeStyle={styles.activeLink}>
        Регистрация
      </div>
      <div to="" exact style={styles.link} activeStyle={styles.activeLink}>
        Логин
      </div>
    </div>
  );
}
