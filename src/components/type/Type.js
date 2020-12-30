import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { accountType } from '../../actions/userActions';
import { Radio } from 'antd';

const Type = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(accountType('1'));
  });

  const handleTypeChange = (e) => {
    e.preventDefault();

    dispatch(accountType(e.target.value));
  };
  return (
    <Radio.Group
      onChange={handleTypeChange}
      defaultValue='1'
      buttonStyle='solid'
    >
      <Radio.Button value='1'>Individual</Radio.Button>
      <Radio.Button value='2'>Teacher</Radio.Button>
      <Radio.Button value='3'>Student</Radio.Button>
    </Radio.Group>
  );
};

export default Type;
