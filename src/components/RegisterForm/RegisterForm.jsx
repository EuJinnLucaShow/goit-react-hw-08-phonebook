import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/auth-operations';
import toast from 'react-hot-toast';
import { Form, Input, Text, Button } from './RegisterForm.styled';

const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const { name, email, password } = e.target.elements;
    if (
      name.value.trim() === '' ||
      email.value.trim() === '' ||
      password.value.trim() === ''
    ) {
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
    dispatch(
      register({
        name: name.value,
        email: email.value,
        password: password.value,
      })
    );
    e.target.reset();
  };

  return (
    <Form onSubmit={handleSubmit} autoComplete="off">
      <Text>User</Text>
      <Input type="text" name="name" placeholder="Enter name" />
      <Text>Email</Text>
      <Input type="email" name="email" placeholder="Enter email" />
      <Text>Password</Text>
      <Input type="password" name="password" placeholder="Enter password" />
      <Button type="submit">Register</Button>
    </Form>
  );
};

export default RegisterForm;
