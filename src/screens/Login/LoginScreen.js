import { useDispatch } from 'react-redux';
import { Form, Input, Button } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import { loginUser } from '../../actions/userActions';

import './loginStyle.css';

const validateMessages = {
  required: '${label} is required!',

  string: {
    min: '${label} must be minimum ${min} characters',
  },
};

const LoginScreen = ({ location, history }) => {
  const dispatch = useDispatch();
  const onFinish = (values) => {
    dispatch(loginUser(values));
  };

  return (
    <section className='login'>
      <Form
        name='nest-messages'
        onFinish={onFinish}
        validateMessages={validateMessages}
      >
        <Form.Item
          name='username'
          label='Username'
          rules={[
            {
              required: true,
              type: 'string',
              min: 3,
            },
          ]}
        >
          <Input
            prefix={<UserOutlined className='site-form-item-icon' />}
            placeholder='Username'
          />
        </Form.Item>
        <Form.Item
          name='password'
          label='Password'
          rules={[
            {
              required: true,

              type: 'string',
              min: 3,
            },
          ]}
        >
          <Input
            prefix={<LockOutlined className='site-form-item-icon' />}
            type='password'
            placeholder='Password'
          />
        </Form.Item>

        <Form.Item>
          <div className='login_button'>
            <Button type='primary' htmlType='submit'>
              Login
            </Button>
            <Link to='/register'>Don't have an account yet?</Link>
          </div>
        </Form.Item>
      </Form>
    </section>
  );
};

export default LoginScreen;
