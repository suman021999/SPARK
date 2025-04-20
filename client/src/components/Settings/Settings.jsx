
import React, { useContext, useEffect, useState } from "react";
import "./settings.css";
import Nav from "../Navbar/Nav";
import axios from "axios";
import { PhoneContext } from "../../hooks/PhoneContext";

const Settings = () => {
  const { setUsername } = useContext(PhoneContext);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const [message, setMessage] = useState("");
  const [passwordError, setPasswordError] = useState("");

  useEffect(() => {
    fetchUserData();
  }, []);

  const fetchUserData = async () => {
    try {
      const userId = localStorage.getItem("userId");
      if (!userId) {
        console.error("No user ID found!");
        return;
      }

      const res = await axios.get(
        `/user/${userId}`,
        { withCredentials: true }
      );

      console.log("Fetched user data:", res.data);

      setFormData({
        firstName: res.data.firstName || "",
        lastName: res.data.lastName || "",
        email: res.data.email || "",
        password: "",
      });

      setUsername(res.data.email || ""); // ✅ Set username from email
      localStorage.setItem("username", res.data.email || "");
    } catch (error) {
      console.error("Error fetching user data:", error.response?.data || error.message);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    if (name === "password") {
      validatePassword(value);
    }
  };

  // ✅ Password validation function
  const validatePassword = (password) => {
    let passwordErrors = "";
    if (!password) {
      passwordErrors = "Please enter your password*";
    } else {
      if (password.length < 8) {
        passwordErrors = "The password must be at least 8 characters long*";
      } else if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$%^&*!])/.test(password)) {
        passwordErrors =
          "Please choose a strong password that includes at least 1 lowercase and uppercase letter, a number, and a special character (@#$%^&*)*";
      }
    }
    setPasswordError(passwordErrors);
  };

  const saveProfile = async () => {
    const userId = localStorage.getItem("userId");
    if (!userId) {
      setMessage("User ID is missing!");
      return;
    }

    if (passwordError) {
      setMessage("Please fix the errors before submitting.");
      return;
    }

    try {
      const updateData = { ...formData };
      if (!formData.password) delete updateData.password;

      // ✅ Automatically derive username from email
      updateData.username = formData.email.split("@")[0];

      const res = await axios.put(
        `${import.meta.env.VITE_AUTH_URL}/update-profile/${userId}`,
        updateData,
        { withCredentials: true }
      );

      if (res.status === 200) {
        setMessage("Profile updated successfully!");

        // ✅ Set username from email in context & localStorage
        setUsername(formData.email);
        localStorage.setItem("username", formData.email);
      } else {
        setMessage("Something went wrong. Please try again.");
      }
    } catch (error) {
      setMessage(error.response?.data?.msg || "Update failed. Please try again.");
    }
  };

  return (
    <div className="settings">
      <Nav isVisible={false} />
      <div className="setings_content">
        <p>Edit Profile</p>
        <hr />
        {message && <p className="message">{message}</p>}

        <form className="form_container" onSubmit={(e) => e.preventDefault()}>
          <div className="form_box">
            <label>First Name</label>
            <input
              className="form_box_input"
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
            />
          </div>

          <div className="form_box">
            <label>Last Name</label>
            <input
              className="form_box_input"
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
            />
          </div>

          <div className="form_box">
            <label>Email</label>
            <input
              className="form_box_input"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          <div className="form_box">
            <label>Password</label>
            <input
              className="form_box_input"
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              
            />
            {passwordError && <p className="error">{passwordError}</p>}
          </div>

          <div className="setings_content_div_button">
            <button
              className="setings_content_button"
              type="button"
              onClick={saveProfile}
              disabled={passwordError}
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Settings;
