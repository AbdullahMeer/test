import React, {useState } from 'react'

const SignUp = ()=>{

 const [data, setData] = useState({
  fullname: "",
  email: "",
  password: ""
 })
const handleChange = (e) => {
  setData({
    ...data,
    [e.target.name]: e.target.value,
  });
  console.log("data :>> ", data);
};

const onSubmit = () =>{
  console.log(data)  
  const item = localStorage.setItem("items", JSON.stringify(data));
}

return (
  <form>
    <h3>Sign Up</h3>
    <div className="mb-3">
      <label>First name</label>
      <input type= "text"
         className="form-control" placeholder="First name"
          onChange={handleChange} name="fullname"
      />
    </div>
    <div className="mb-3">
      <label>Email address</label>
      <input type= "email"
        className="form-control" name="email" placeholder="Enter email"
        onChange={handleChange}
      />
    </div>
    <div className="mb-3">
      <label>Password</label>
      <input type= "password"
         className="form-control" name="password" placeholder="Enter password"
          onChange={handleChange}
      />
    </div>
    <div className="d-grid">
      <button type="submit" className="btn btn-primary" onClick={() => onSubmit()}>
        Sign Up
      </button>
    </div>
    <p className="forgot-password text-right">
      Already registered <a href="/sign-in">sign in?</a>
    </p>
  </form>
)
}

export default SignUp