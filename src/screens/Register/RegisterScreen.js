import Register from '../../components/register/Register';
import Type from '../../components/type/Type';
import './registerScreen.css';
const RegisterScreen = () => {
  return (
    <section className='registerScreen'>
      <Type />
      <Register />
    </section>
  );
};

export default RegisterScreen;
