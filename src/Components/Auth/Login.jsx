import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../Context/AuthContext";

const Login = () => {
  const { login, googleLogin } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await login(email, password);
      navigate("/");
    } catch (err) {
      setError("Invalid email or password");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white w-full max-w-md rounded-xl shadow-lg p-8">
        
        <h2 className="text-2xl font-semibold text-center text-gray-800">
          Welcome Back
        </h2>
        <p className="text-sm text-gray-500 text-center mt-1">
          Login to your account
        </p>

        {error && (
          <p className="mt-3 text-sm text-red-500 text-center">
            {error}
          </p>
        )}

        <form onSubmit={handleLogin} className="mt-6 space-y-4">
          <input
            type="email"
            placeholder="Email Address"
            className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button className="w-full bg-orange-500 hover:bg-orange-600 text-white py-2 rounded-lg font-medium">
            Login
          </button>
        </form>

        <div className="flex items-center my-6">
          <div className="flex-grow border-t"></div>
          <span className="mx-3 text-sm text-gray-400">OR</span>
          <div className="flex-grow border-t"></div>
        </div>

        <button
          onClick={googleLogin}
          className="w-full border rounded-lg py-2 flex items-center justify-center gap-2 hover:bg-gray-50"
        >
          <span className="text-blue-600 font-semibold">●</span>
          Continue with Google
        </button>

        <p className="text-sm text-center text-gray-600 mt-6">
          New here?{" "}
          <Link to="/register" className="text-orange-500 font-semibold hover:underline">
            Create Account
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
