"use client";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { API_ROUTE } from "@/config/const";
import {
  loginSuccess,
  setError as setUserError,
  setLoading as setUserLoading,
} from "@/lib/slice/userSlice";
import axios from "axios";
import NotificationList, {
  NotificationType,
} from "@/app/__components/Notification";
import { useRouter } from "next/navigation";

function validateEmail(email: string) {
  // Simple email regex
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export default function AuthPage() {
  const [tab, setTab] = useState<"login" | "register">("login");
  // State for login
  const [loginUsername, setLoginUsername] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [loginError, setLoginError] = useState("");
  const [loginTouched, setLoginTouched] = useState<{
    username: boolean;
    password: boolean;
  }>({ username: false, password: false });
  const [showLoginPassword, setShowLoginPassword] = useState(false);
  // State for register
  const [registerUsername, setRegisterUsername] = useState("");
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [registerConfirm, setRegisterConfirm] = useState("");
  const [registerError, setRegisterError] = useState("");
  const [registerTouched, setRegisterTouched] = useState<{
    username: boolean;
    email: boolean;
    password: boolean;
    confirm: boolean;
  }>({ username: false, email: false, password: false, confirm: false });
  const [showRegisterPassword, setShowRegisterPassword] = useState(false);
  const [showRegisterConfirm, setShowRegisterConfirm] = useState(false);
  const [notifications, setNotifications] = useState<any[]>([]);
  const addNotification = (message: string, type: NotificationType) => {
    const id = Math.random().toString(36).substr(2, 9);
    setNotifications((prev: any[]) => [...prev, { id, message, type }]);
  };
  const removeNotification = (id: string) => {
    setNotifications((prev: any[]) => prev.filter((n) => n.id !== id));
  };

  const dispatch = useDispatch();
  const router = useRouter();

  // Email validate text
  let emailErrorText = "";
  if (registerTouched.email) {
    if (!registerEmail) {
      emailErrorText = "Email is required.";
    } else if (!validateEmail(registerEmail)) {
      emailErrorText = "Invalid email address.";
    }
  }

  // Validate register
  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    if (
      !registerUsername ||
      !registerEmail ||
      !registerPassword ||
      !registerConfirm
    ) {
      setRegisterError("All fields are required.");
      return;
    }
    if (!validateEmail(registerEmail)) {
      setRegisterError("Invalid email address.");
      return;
    }
    if (registerPassword.length < 6) {
      setRegisterError("Password must be at least 6 characters.");
      return;
    }
    if (registerPassword !== registerConfirm) {
      setRegisterError("Passwords do not match.");
      return;
    }
    setRegisterError("");
    try {
      const res = await axios.post(`${API_ROUTE}/auth/register`, {
        username: registerUsername,
        email: registerEmail,
        password: registerPassword,
        confirmPassword: registerConfirm,
      });
      const data: any = res.data;
      if (data.message === "USER.REGISTER.EXIST") {
        setRegisterError("User already exists.");
      } else if (data.message === "USER.REGISTER.CONFLICT") {
        setRegisterError("Registration error. Please try again.");
      } else if (data.message === "USER.REGISTER.SUCCESS") {
        setRegisterError("");
        alert("Register success! Please login.");
        setTab("login");
      } else {
        setRegisterError("Unknown error. Please try again.");
      }
    } catch (err: any) {
      setRegisterError(
        err.response?.data?.message || "Network error. Please try again."
      );
    }
  };

  // Validate login
  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!loginUsername || !loginPassword) {
      setLoginError("Username and password are required.");
      return;
    }
    if (loginPassword.length < 6) {
      setLoginError("Password must be at least 6 characters.");
      return;
    }
    setLoginError("");
    dispatch(setUserLoading(true));
    try {
      const res = await axios.post(
        `${API_ROUTE}/auth/login`,
        {
          username: loginUsername,
          password: loginPassword,
        },
        { withCredentials: true }
      );
      const data: any = res.data;
      if (data.message === "USER.LOGIN.NOT_FOUND") {
        setLoginError("User not found.");
        dispatch(setUserError("User not found."));
      } else if (data.message === "USER.LOGIN.INCORRECT") {
        setLoginError("Incorrect password.");
        dispatch(setUserError("Incorrect password."));
      } else if (data.message === "USER.LOGIN.SUCCESS") {
        setLoginError("");
        dispatch(
          loginSuccess({ username: loginUsername, email: data.email || "" })
        );
        addNotification("Login successful!", NotificationType.SUCCESS);
        setTimeout(() => router.push("/"), 1000);
      } else if (data.message === "USER.LOGIN.CONFLICT") {
        setLoginError("Login error. Please try again.");
        dispatch(setUserError("Login error. Please try again."));
      } else {
        setLoginError("Unknown error. Please try again.");
        dispatch(setUserError("Unknown error. Please try again."));
      }
    } catch (err: any) {
      setLoginError(
        err.response?.data?.message || "Network error. Please try again."
      );
      dispatch(
        setUserError(
          err.response?.data?.message || "Network error. Please try again."
        )
      );
    } finally {
      dispatch(setUserLoading(false));
    }
  };

  // Helper for input error style
  const inputClass = (error: boolean, touched: boolean) =>
    `border rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black transition-colors w-full ${
      error && touched ? "border-red-500" : "border-gray-300"
    }`;

  // Password input group styleclear
  const inputGroupClass = "relative flex items-center";
  const toggleBtnClass =
    "absolute right-3 top-1/2 -translate-y-1/2 text-sm text-gray-500 cursor-pointer select-none bg-white px-1";

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <NotificationList
        notifications={notifications}
        removeNotification={removeNotification}
      />
      <div className="w-full max-w-md p-8 bg-white rounded-xl shadow-lg relative overflow-hidden">
        {/* Tab Switcher */}
        <div className="flex mb-8 relative h-12">
          <button
            className={`flex-1 text-lg font-semibold transition-colors duration-300 z-10 ${
              tab === "login" ? "text-black" : "text-gray-400"
            }`}
            onClick={() => setTab("login")}
          >
            Login
          </button>
          <button
            className={`flex-1 text-lg font-semibold transition-colors duration-300 z-10 ${
              tab === "register" ? "text-black" : "text-gray-400"
            }`}
            onClick={() => setTab("register")}
          >
            Register
          </button>
          {/* Animated underline */}
          <span
            className={`absolute bottom-0 left-0 h-1 w-1/2 bg-black rounded transition-all duration-300 ${
              tab === "register" ? "translate-x-full" : "translate-x-0"
            }`}
            style={{ willChange: "transform" }}
          />
        </div>

        {/* Form content with fade/slide animation */}
        <div className="relative min-h-[340px]">
          {/* Login Form */}
          <div
            className={`absolute inset-0 transition-all duration-500 ${
              tab === "login"
                ? "opacity-100 translate-x-0 z-10"
                : "opacity-0 -translate-x-10 z-0 pointer-events-none"
            }`}
          >
            <form
              className="flex flex-col gap-4 min-h-[220px] justify-end"
              onSubmit={handleLogin}
            >
              <div className="flex flex-col gap-4">
                <input
                  type="text"
                  placeholder="Username"
                  className={inputClass(
                    !loginUsername && loginTouched.username,
                    loginTouched.username
                  )}
                  value={loginUsername}
                  onChange={(e) => setLoginUsername(e.target.value)}
                  onBlur={() =>
                    setLoginTouched((t) => ({ ...t, username: true }))
                  }
                />
                <div className={inputGroupClass}>
                  <input
                    type={showLoginPassword ? "text" : "password"}
                    placeholder="Password"
                    className={inputClass(
                      (!loginPassword || loginPassword.length < 6) &&
                        loginTouched.password,
                      loginTouched.password
                    )}
                    value={loginPassword}
                    onChange={(e) => setLoginPassword(e.target.value)}
                    onBlur={() =>
                      setLoginTouched((t) => ({ ...t, password: true }))
                    }
                  />
                  <span
                    className={toggleBtnClass}
                    onClick={() => setShowLoginPassword((v) => !v)}
                    tabIndex={-1}
                  >
                    {showLoginPassword ? "Hide" : "Show"}
                  </span>
                </div>
                {loginError && (
                  <div className="text-red-500 text-sm">{loginError}</div>
                )}
              </div>
              <button
                type="submit"
                className="bg-black text-white py-2 rounded font-semibold hover:bg-gray-800 transition-colors"
              >
                Login
              </button>
            </form>
          </div>
          {/* Register Form */}
          <div
            className={`absolute inset-0 transition-all duration-500 ${
              tab === "register"
                ? "opacity-100 translate-x-0 z-10"
                : "opacity-0 translate-x-10 z-0 pointer-events-none"
            }`}
          >
            <form
              className="flex flex-col gap-4 min-h-[340px] justify-between"
              onSubmit={handleRegister}
            >
              <div className="flex flex-col gap-4">
                <input
                  type="text"
                  placeholder="Username"
                  className={inputClass(
                    !registerUsername && registerTouched.username,
                    registerTouched.username
                  )}
                  value={registerUsername}
                  onChange={(e) => setRegisterUsername(e.target.value)}
                  onBlur={() =>
                    setRegisterTouched((t) => ({ ...t, username: true }))
                  }
                />
                <input
                  type="email"
                  placeholder="Email"
                  className={inputClass(
                    (!registerEmail || !validateEmail(registerEmail)) &&
                      registerTouched.email,
                    registerTouched.email
                  )}
                  value={registerEmail}
                  onChange={(e) => setRegisterEmail(e.target.value)}
                  onBlur={() =>
                    setRegisterTouched((t) => ({ ...t, email: true }))
                  }
                />
                {emailErrorText && (
                  <div className="text-red-500 text-sm">{emailErrorText}</div>
                )}
                <div className={inputGroupClass}>
                  <input
                    type={showRegisterPassword ? "text" : "password"}
                    placeholder="Password"
                    className={inputClass(
                      (!registerPassword || registerPassword.length < 6) &&
                        registerTouched.password,
                      registerTouched.password
                    )}
                    value={registerPassword}
                    onChange={(e) => setRegisterPassword(e.target.value)}
                    onBlur={() =>
                      setRegisterTouched((t) => ({ ...t, password: true }))
                    }
                  />
                  <span
                    className={toggleBtnClass}
                    onClick={() => setShowRegisterPassword((v) => !v)}
                    tabIndex={-1}
                  >
                    {showRegisterPassword ? "Hide" : "Show"}
                  </span>
                </div>
                <div className={inputGroupClass}>
                  <input
                    type={showRegisterConfirm ? "text" : "password"}
                    placeholder="Confirm Password"
                    className={inputClass(
                      (!registerConfirm ||
                        registerPassword !== registerConfirm) &&
                        registerTouched.confirm,
                      registerTouched.confirm
                    )}
                    value={registerConfirm}
                    onChange={(e) => setRegisterConfirm(e.target.value)}
                    onBlur={() =>
                      setRegisterTouched((t) => ({ ...t, confirm: true }))
                    }
                  />
                  <span
                    className={toggleBtnClass}
                    onClick={() => setShowRegisterConfirm((v) => !v)}
                    tabIndex={-1}
                  >
                    {showRegisterConfirm ? "Hide" : "Show"}
                  </span>
                </div>
                {registerError && (
                  <div className="text-red-500 text-sm">{registerError}</div>
                )}
              </div>
              <button
                type="submit"
                className="bg-black text-white py-2 rounded font-semibold hover:bg-gray-800 transition-colors"
              >
                Register
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
