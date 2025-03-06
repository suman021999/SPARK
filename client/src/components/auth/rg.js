import React, { useState } from "react";

const SignupForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState({});

  const validatePassword = (password) => {
    let passwordErrors = "";
    if (!password) {
      passwordErrors = "Please enter your password*";
    } else {
      if (password.length < 8) {
        passwordErrors = "The password must be at least 8 characters long*";
      } else if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$%^&*!])/.test(password)) {
        passwordErrors = "Please choose a strong password that includes at least 1 lowercase and uppercase letter, a number, as well as a special character (@#$%^&*)*";
      }
    }
    return passwordErrors;
  };

  const validate = (name, value) => {
    let newErrors = { ...errors };
    if (name === "password") {
      newErrors.password = validatePassword(value);
    } else if (name === "confirmPassword") {
      newErrors.confirmPassword = value !== formData.password ? "The password you entered does not match*" : "";
    }
    setErrors(newErrors);
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    validate(name, value);
  }

  return (
    <div className="p-4 max-w-md mx-auto">
      <div>
        <label>First Name</label>
        <input name="firstName" value={formData.firstName} onChange={handleChange} className="border p-2 w-full" />
        <p className="text-red-500 text-sm">{errors.firstName}</p>
      </div>
      <div>
        <label>Last Name</label>
        <input name="lastName" value={formData.lastName} onChange={handleChange} className="border p-2 w-full" />
        <p className="text-red-500 text-sm">{errors.lastName}</p>
      </div>
      <div>
        <label>Email</label>
        <input name="email" value={formData.email} onChange={handleChange} className="border p-2 w-full" />
        <p className="text-red-500 text-sm">{errors.email}</p>
      </div>
      <div>
        <label>Password</label>
        <input type="password" name="password" value={formData.password} onChange={handleChange} className="border p-2 w-full" />
        <p className="text-red-500 text-sm">{errors.password}</p>
      </div>
      <div>
        <label>Confirm Password</label>
        <input type="password" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} className="border p-2 w-full" />
        <p className="text-red-500 text-sm">{errors.confirmPassword}</p>
      </div>
    </div>
  );
};

export default SignupForm;
