const styles = {
  container: {
    minHeight: 'calc(50vh - 50px)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontWeight: 700,
    fontSize: 30,
    textAlign: 'center',
  },
};

const HomeView = () => (
  <div style={styles.container}>
    <h1 style={styles.title}>Home page of the Phonebook</h1>
  </div>
);

export default HomeView;
