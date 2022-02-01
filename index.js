import "./style.css";
import { Volder, Email } from "volder";

const form = document.querySelector("#form");
const usernameErr = document.querySelector("p.username.error");
const emailErr = document.querySelector("p.email.error");
const passwordErr = document.querySelector("p.password.error");

// initializing volder schema for login form.
const loginSchema = new Volder({
  username: {
    type: [String, "⚠️ username must be in string"],
    alphanumeric: [true, "⚠️ username should only contain letters and numbers"],
    minLength: [4, "⚠️ username should be at leat 4 characters"],
    maxLength: [16, "⚠️ username should be at most 16 characters"],
    required: [true, "⚠️ username is required"],
    trim: true,
  },
  email: {
    type: [String, "⚠️ email must be in string"],
    pattern: [Email, "⚠️ email is not valid"],
    maxLength: [150, "⚠️ email be at most 150 characters"],
    required: [true, "⚠️ email is required"],
    trim: true,
  },
  password: {
    type: [String, "⚠️ password must be in string"],
    minLength: [8, "⚠️ password should be at least 8 characters"],
    maxLength: [30, "⚠️ password should be at most 30 characters"],
    required: [true, "⚠️ password is required"],
  },
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const input = {
    username: form.username.value,
    email: form.email.value,
    password: form.password.value,
  };
  const { valid, errors, value } = loginSchema.validate(input);
  console.log(errors);
  if (valid) {
    alert("✅✅ successfully login ✅✅");
    usernameErr.textContent = "";
    emailErr.textContent = "";
    passwordErr.textContent = "";
  } else {
    usernameErr.textContent = errors.username || "";
    emailErr.textContent = errors.email || "";
    passwordErr.textContent = errors.password || "";
  }
});
