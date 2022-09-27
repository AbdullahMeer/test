import React, {useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Login = () => {

  const [item, setItem] = useState({});
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
    console.log("data", data);
  };
  const navigate = useNavigate();
  const Submit = () => {
    const items = JSON.parse(localStorage.getItem("items"));
    setItem(items);
    console.log(items)
    if (items.email === data.email && items.password === data.password) {
      navigate("/dashboard");
    }else{
      navigate("/error");
    }
  }

  return (
    <form>
      <h3>Sign In</h3>
      <div className="mb-3">
        <label>Email address</label>
        <input onChange={handleChange}
          type="email"
          className="form-control"
          name="email"
          placeholder="Enter email"
        />
      </div>
      <div className="mb-3">
        <label>Password</label>
        <input onChange={handleChange}
          type="password"
          name="password"
          className="form-control"
          placeholder="Enter password"
        />
      </div>
      <div className="mb-3">
        <div className="custom-control custom-checkbox">
          <input
            type="checkbox"
            className="custom-control-input"
            id="customCheck1"
          />
          <label className="custom-control-label" htmlFor="customCheck1">
            Remember me
          </label>
        </div>
      </div>
      <div className="d-grid">
        <button type="submit" className="btn btn-primary" onClick={Submit}>
          Submit
        </button>
      </div>
      <p className="forgot-password text-right">
        Forgot <a href="#">password?</a>
      </p>
    </form>
  )
};

export default Login;