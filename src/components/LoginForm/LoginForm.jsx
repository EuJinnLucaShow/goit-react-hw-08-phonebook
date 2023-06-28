import { useDispatch } from 'react-redux';
import toast from 'react-hot-toast';

import { logIn } from 'redux/auth/auth-operations';
import { Form, Input, Text, Button } from './LoginForm.styled';

const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const { email, password } = e.target.elements;
    if (email.value.trim() === '' || password.value.trim() === '') {
      return toast.error('Please fill in all fields', {
        duration: 4000,
        position: 'top-center',

        // Styling
        style: {
          color: '#fa0000',
        },

        // Custom Icon
        icon: '🤬',

        // Aria
        ariaProps: {
          role: 'status',
          'aria-live': 'polite',
        },
      });
    }
    dispatch(logIn({ email: email.value, password: password.value }));
    e.target.reset();
  };

  return (
    <Form onSubmit={handleSubmit} autoComplete="off">
      <Text>Email</Text>
      <Input type="email" name="email" placeholder="Enter email" />
      <Text>Password</Text>
      <Input type="password" name="password" placeholder="Enter password" />
      <Button type="submit">Log In</Button>
    </Form>
  );
};

export default LoginForm;
