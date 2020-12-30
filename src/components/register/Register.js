import { Form, Input, Button } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { registerUser } from '../../actions/userActions';

import './registerStyle.css';

const validateMessages = {
  required: '${label} is required!',
  types: {
    email: '${label} is not a valid email!',
  },
  string: {
    min: '${label} must be minimum ${min} characters',
  },
};

const Register = () => {
  const dispatch = useDispatch();

  const { userAccount } = useSelector((state) => state.userAccountType);

  const onFinish = (values) => {
    const user = { ...values, user_type: userAccount };
    dispatch(registerUser(user));
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
          name='email'
          label='Email'
          rules={[
            {
              required: true,
              type: 'email',
              min: 3,
            },
          ]}
        >
          <Input
            prefix={<UserOutlined className='site-form-item-icon' />}
            placeholder='Email'
            type='email'
          />
        </Form.Item>
        <Form.Item
          name='first_name'
          label='First Name'
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
            placeholder='First name'
          />
        </Form.Item>
        <Form.Item
          name='last_name'
          label='Last Name'
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
            placeholder='Last Name'
          />
        </Form.Item>
        {userAccount === '2' && (
          <Form.Item
            name='organisation_name'
            label='Organisation name'
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
              placeholder='Organisation Name'
            />
          </Form.Item>
        )}
        {userAccount === '3' && (
          <Form.Item
            name='student_code'
            label='Student Code'
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
              placeholder='Code'
            />
          </Form.Item>
        )}

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
              Register
            </Button>
            <Link to='/login'>Already have an account?</Link>
          </div>
        </Form.Item>
      </Form>
    </section>
  );
};

export default Register;
