import {
  ACCOUNT_TYPE,
  USER_REGISTER_REQUEST,
  USER_REGISTER_FAIL,
  USER_REGISTER_SUCCESS,
  USER_ACTIVATE_REQUEST,
  USER_ACTIVATE_SUCCESS,
  USER_ACTIVATE_FAILURE,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAIL,
  USER_LOGOUT,
} from '../constants/userConstant';

import Alert from '../components/alert/Alert';
const baseUrl = 'https://dev-api.qwikxr.com';

export const loginUser = (user, history) => async (dispatch) => {
  try {
    dispatch({ type: USER_LOGIN_REQUEST });
    const url = `/api/v1/auth/get-token/`;
    let response = await fetch(baseUrl + url, {
      method: 'POST',

      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    });
    const data = await response.json();
    if (data.error) {
      throw new Error(data.error);
    }
    Alert('success', `Welcome, ${user.username}!`);

    // history,push('/profile')
    dispatch({ type: USER_LOGIN_SUCCESS, payload: data });
    localStorage.setItem(
      'userInfo',
      JSON.stringify({ user, token: data.token })
    );
  } catch (error) {
    dispatch({ type: USER_LOGIN_FAIL, payload: error.message });
    Alert('error', error.message);
  }
};

export const logout = () => (dispatch) => {
  localStorage.removeItem('userInfo');
  dispatch({ type: USER_LOGOUT });
};

export const registerUser = (user) => async (dispatch) => {
  try {
    dispatch({ type: USER_REGISTER_REQUEST });
    const url = '/api/v1/register/';
    let response = await fetch(baseUrl + url, {
      method: 'POST',

      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    });
    const data = await response.json();
    if (data.error) {
      throw new Error(data.error);
    }
    Alert('info', data.message);

    dispatch({ type: USER_REGISTER_SUCCESS, payload: user });
    localStorage.setItem('userInfo', JSON.stringify(data));
  } catch (error) {
    dispatch({ type: USER_REGISTER_FAIL, payload: error.message });
    Alert('error', error.message);
  }
};

export const activateUser = (activationToken, history) => async (dispatch) => {
  try {
    dispatch({ type: USER_ACTIVATE_REQUEST });

    const url = '/api/v1/activate/';
    let response = await fetch(baseUrl + url, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        activation_token: activationToken,
      }),
    });
    const data = await response.json();
    Alert('success', data.message);

    dispatch({ type: USER_ACTIVATE_SUCCESS });
    history.push('/');
  } catch (error) {
    dispatch({ type: USER_ACTIVATE_FAILURE });

    Alert('error', error.message);
  }
};

export const accountType = (data) => (dispatch) => {
  dispatch({ type: ACCOUNT_TYPE, payload: data });
};
