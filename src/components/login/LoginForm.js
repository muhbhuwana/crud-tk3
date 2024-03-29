import React, { useState } from 'react';
// import { useCounter } from './hooks';
// import { Routes, Route } from 'react-router-dom';
// import { useNavigate } from 'react-router-dom';
// import ReCAPTCHA from 'react-google-recaptcha';
// import Dashboard from "./Dashboard";

function LoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [attempts, setAttempts] = useState(0);
  const [disabled, setDisabled] = useState(false);
  const [captchaValue, setCaptchaValue] = useState('');
  // const [timeLeft, startTimer] = useCounter(30);
  // const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate user and password
    if (username !== 'admin' || password !== 'password') {
      setError('Invalid username or password.');
    } else {
      // Validate captcha
      if (captchaValue === '') {
        setError('Invalid captcha.');
        return;
      }

      // Successful login
      setError('');
      // alert('Welcome, admin!');
      // navigate('./Dashboard', { replace: true });
    }
  };

  function onChange(value) {
    setCaptchaValue(value);
  }

  return (
    <div className="App">
      <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
        Login
      </button>
      <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div className='modal-body'>

              <form onSubmit={handleSubmit}>
                {/* <Routes>
                  <Route path="/Dashboard" element={<Dashboard />} />
                </Routes> */}
                <div>
                  <input type="text" class="form-control mb-3" id="userName" placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    disabled={disabled}
                  />
                </div>
                <div>
                  <input type="password" class="form-control mb-3" id="password" placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    disabled={disabled}
                  />
                </div>
                
                <button type="submit"  class="btn btn-primary" disabled={disabled}>
                  Login
                </button>
              </form>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginForm;
