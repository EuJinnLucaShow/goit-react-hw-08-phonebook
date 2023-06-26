import { Routes, Route } from 'react-router-dom';
import { Layout } from './Layout';
import Phonebook from '../pages/Phonebook';
import { Container } from './App.styled';
import Home from '../pages/Home';
import RegisterView from '../pages/Register';
import LoginView from '../pages/Login';

function App() {
  return (
    <Container>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="phonebook" element={<Phonebook />} />
          <Route path="registration" element={<RegisterView />} />
          <Route path="login" element={<LoginView />} />
        </Route>
      </Routes>
    </Container>
  );
}

export default App;
