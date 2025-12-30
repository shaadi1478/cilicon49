import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../Context/AuthContext";

const Register = () => {
  const { register, googleLogin } = useAuth();
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [photo, setPhoto] = useState(null);
  const [preview, setPreview] = useState(null);
  const [error, setError] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();
    setError("");

    try {
      await register(name, email, password, photo);
      navigate("/");
    } catch (err) {
      setError(err.message);
    }
  };

  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setPhoto(file);
    setPreview(URL.createObjectURL(file));
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white w-full max-w-md rounded-xl shadow-lg p-8">
        {/* Title */}
        <h2 className="text-2xl font-semibold text-center text-gray-800">
          Create Account
        </h2>
        <p className="text-sm text-gray-500 text-center mt-1">
          Join us and start shopping smarter
        </p>

        {error && (
          <p className="mt-3 text-sm text-red-500 text-center">{error}</p>
        )}

        {/* Form */}
        <form onSubmit={handleRegister} className="mt-6 space-y-4">
          {/* PHOTO */}
          <div className="flex flex-col items-center gap-2">
            <label className="cursor-pointer">
              <input
                type="file"
                accept="image/*"
                className="hidden"
                onChange={handlePhotoChange}
              />
              <div className="w-20 h-20 rounded-full border flex items-center justify-center overflow-hidden bg-gray-100">
                {preview ? (
                  <img
                    src={preview}
                    alt="preview"
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <span className="text-xs text-gray-500">
                    Upload Photo
                  </span>
                )}
              </div>
            </label>
          </div>

          <input
            type="text"
            placeholder="Full Name"
            className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
            onChange={(e) => setName(e.target.value)}
            required
          />

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

          <button className="w-full bg-orange-500 hover:bg-orange-600 text-white py-2 rounded-lg font-medium transition">
            Create Account
          </button>
        </form>

        {/* Divider */}
        <div className="flex items-center my-6">
          <div className="flex-grow border-t"></div>
          <span className="mx-3 text-sm text-gray-400">OR</span>
          <div className="flex-grow border-t"></div>
        </div>

        {/* Google Login */}
        <button
          onClick={googleLogin}
          className="w-full border rounded-lg py-2 flex items-center justify-center gap-2 hover:bg-gray-50 transition"
        >
          <span className="text-blue-600 font-semibold">●</span>
          Continue with Google
        </button>

        <p className="text-sm text-center text-gray-600 mt-6">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-orange-500 font-semibold hover:underline"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
