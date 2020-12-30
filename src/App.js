import { BrowserRouter as Router, Route } from 'react-router-dom';
import LoginScreen from './screens/Login/LoginScreen';
import RegisterScreen from './screens/Register/RegisterScreen';
import ActivateScreen from './screens/Activate/ActivateScreen';

import 'antd/dist/antd.css';
import './App.css';

function App() {
  return (
    <Router>
      <Route path='/' component={LoginScreen} exact />
      <Route path='/register' component={RegisterScreen} exact />
      <Route path='/activate' component={ActivateScreen} exact />
    </Router>
  );
}

export default App;
