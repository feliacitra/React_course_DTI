import React, { useState } from 'react';
import { setCookie } from '../../utils/cookie';
import { authService } from '../../services';
import './login.css';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const [isLoginLoading, setLoginLoading] = useState(false);

  const onSubmitLogin = () => {
    setLoginLoading(true);
    authService
      .login(username, password)
      .then((res) => {
        // eslint-disable-next-line no-console
        console.log(res);
        const cookieToken = res.token;
        const cookieUser = {
          userId: res.userId,
          username: res.username,
        };
        setCookie('userData', JSON.stringify(cookieUser), 10000);
        setCookie('token', JSON.stringify(cookieToken), 10000);
        window.location.replace('/product');
      })
      .catch((err) => {
        // eslint-disable-next-line no-alert
        alert(err.data.message);
        // eslint-disable-next-line no-console
        console.log(err);
      })
      .finally(() => {
        setLoginLoading(false);
      });
  };

  return (
    <div className="card">
      <h2 id="card-title"> Login Page</h2>
      <form
        id="card-content"
        onSubmit={(e) => {
          e.preventDefault();
          onSubmitLogin();
        }}
      >
        <label htmlFor="username">
          Username :
          <input
            className="form-content"
            type="text"
            value={username}
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          />
        </label>
        <label htmlFor="password">
          Password :
          <input
            className="form-content"
            type="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </label>
        <input
          id="submit-btn"
          // eslint-disable-next-line react/jsx-no-duplicate-props
          id="sign"
          type="submit"
          value="Login"
          disabled={isLoginLoading}
        />
      </form>
    </div>
  );
};

export default Login;

// Login

// form => post ke server => waiting for response (loading state) =>
// receive response from server => success -> success statement to user
//                              => error -> error statement to user  -> next user?

// if success - get token from be - save Token to cookie -> redirect ??

// Loading state treatment
// race condition -> unstable connection

// Action A -> Response A  ->  Action B ->  Response B -> success
