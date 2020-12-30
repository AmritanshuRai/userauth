import { message } from 'antd';

const Alert = (type, msg) => {
  return message[type](msg);
};

export default Alert;
