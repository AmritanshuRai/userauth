import { useDispatch } from 'react-redux';
import { activateUser } from '../../actions/userActions';
import Alert from '../../components/alert/Alert';

const ActivateScreen = ({ location, history }) => {
  const dispatch = useDispatch();
  console.log('location: ', location);
  if (location.search.includes('activation_token=')) {
  }
  const activationToken =
    location.search && !!location.search.split('activation_token=')[1]
      ? location.search.split('activation_token=')[1]
      : history.push('/');

  if (activationToken) {
    dispatch(activateUser(activationToken, history));
  }
  return (
    <section className='ActivateScreen'>
      {Alert('info', 'Email getting verified Please wait...')}
    </section>
  );
};

export default ActivateScreen;
