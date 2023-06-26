// import { useSelector } from 'react-redux';
import Navigation from '../Navigation/Navigation';
import UserMenu from '../UserMenu/UserMenu';
import AuthNav from '../AuthNav/AuthNav';
import { Header } from './AppBar.styled';
// import { authSelectors } from '../redux/auth';

export default function AppBar() {
  // const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <Header>
      <Navigation />
      <AuthNav />
      <UserMenu />
      {/* {isLoggedIn ? <UserMenu /> : <AuthNav />} */}
    </Header>
  );
}
