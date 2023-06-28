import { useDispatch } from 'react-redux';
import { logIn } from '../../redux/auth/auth-operations';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <form onSubmit={handleSubmit} autoComplete="off">
      <label>
        Email
        <input type="email" name="email" placeholder="Enter email" />
      </label>
      <label>
        Password
        <input type="password" name="password" placeholder="Enter password" />
      </label>

      <button type="submit">Log In</button>
      <div></div>
    </form>
  );
};
