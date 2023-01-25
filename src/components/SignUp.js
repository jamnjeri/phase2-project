import React, {useEffect, useState}from 'react'
import './Sign.css'

function SignUp() {
    const initialValues = { firstname: "", lastname:"", email: "", password: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
      const handleSubmit=(e)=>{
        e.preventDefault()
        setFormErrors(validate(formValues))
        setIsSubmit(true);
      }
      useEffect(()=>{
        console.log(formErrors);
        if(Object.keys(formErrors).length === 0 && isSubmit){
            setFormValues(initialValues)
        }
      },[formErrors])
      const validate=(values)=>{
        const errors = {};
        if (!values.firstname) {
            errors.firstname = "Firstname is required!";
        }
        if (!values.lastname) {
            errors.lastname = "Lastname is required!";
        }
        if (!values.email) {
            errors.email = "Email is required!";
        }
        if (!values.password) {
            errors.password = "password is required!";
        }
        else if(values.password.length<4){
            errors.password="password must be more than 4 letters"
        }
        return errors;
    }
   
      const handleChange =(e)=>{
         const{name ,value }=e.target;
        setFormValues({ ...formValues, [name]:value})
        console.log(formValues)

      }
      const formStyles = {
        border: "1px solid skyblue",
        padding: "10px",
        borderRadius: "10px"
      };
  return (
    <div className='form-container'>
        {isSubmit && <p>Success! You have signed up.</p>}
        <form style={formStyles} onSubmit={handleSubmit}>
        <h3>Sign Up</h3>
        <div className="mb-3">
          <label>First Name</label>
          <input
            type="text"
            className="form-control"
            placeholder="John"
            name='firstname'
            value={formValues.firstname}
            onChange={handleChange}
          />
        </div>
        <p>{formErrors.firstname}</p>
        <div className="mb-3">
          <label>Last Name</label>
          <input 
           type="text" 
           className="form-control" 
           placeholder="Doe" 
           name='lastname'
           value={formValues.lastname}
           onChange={handleChange}
           />
        </div>
        <p>{formErrors.lastname}</p>
        <div className="mb-3">
          <label>Email Address</label>
          <input
            type="email"
            className="form-control"
            placeholder="johndoe@mail.com"
            name='email'
            value={formValues.email}
            onChange={handleChange}
          />
        </div>
        <p>{formErrors.email}</p>
        <div className="mb-3">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="*******"
            name='password'
            value={formValues.password}
            onChange={handleChange}
          />
        </div>
        <p>{formErrors.password}</p>
        <div className="d-grid">
          <button type="submit" className="btn btn-primary">
            Sign Up
          </button>
        </div>
        <p className="forgot-password text-right">
          Already registered <a href="/sign-in">sign in?</a>
        </p>
        
      </form>  
    </div>
  )
}

export default SignUp
