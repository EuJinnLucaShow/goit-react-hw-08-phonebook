// import { useDispatch, useSelector } from 'react-redux';
// import { authSelectors, authOperations } from '../../redux/auth';
import defaultAvatar from './default-avatar.png';
import { Container, Name, Avatar, Button } from './UserMenu.styled';
import { ReactComponent as AddIcon } from '../icons/getout.svg';

export default function UserMenu() {
  // const dispatch = useDispatch();
  // const name = useSelector(authSelectors.getUsername);
  const avatar = defaultAvatar;

  return (
    <Container>
      <Avatar src={avatar} alt="avatar" />
      <Name>Welcome</Name>
      <Button type="button">
        <AddIcon />
      </Button>
    </Container>
  );
}
