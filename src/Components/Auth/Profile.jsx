import { useAuth } from "../Context/AuthContext";
import { User, Mail, LogOut } from "lucide-react";

const Profile = () => {
  const { user, logout } = useAuth();

  return (
    <div className=" bg-gray-100 flex justify-center items-center px-4">
      <div className="bg-white w-full max-w-md rounded-xl shadow-lg p-6">
        {/* HEADER */}
        <div className="flex flex-col items-center">
          <img
            src={
              user?.photoURL ||
              "https://i.ibb.co/2kRZ6kG/default-avatar.png"
            }
            alt="avatar"
            className="w-28 h-28 rounded-full border-4 border-orange-500"
          />

          <h2 className="mt-4 text-xl font-bold">
            {user?.displayName || "User"}
          </h2>

          <p className="text-gray-500 text-sm">
            {user?.email}
          </p>
        </div>

        {/* INFO */}
        <div className="mt-6 space-y-4">
          <div className="flex items-center gap-3 bg-gray-50 p-3 rounded">
            <User className="text-orange-500" />
            <span className="text-sm font-medium">
              {user?.displayName || "No Name Set"}
            </span>
          </div>

          <div className="flex items-center gap-3 bg-gray-50 p-3 rounded">
            <Mail className="text-orange-500" />
            <span className="text-sm font-medium">
              {user?.email}
            </span>
          </div>
        </div>

        {/* ACTIONS */}
        <button
          onClick={logout}
          className="mt-6 w-full flex items-center justify-center gap-2 bg-red-500 text-white py-3 rounded-lg hover:bg-red-600 transition"
        >
          <LogOut size={18} />
          Logout
        </button>
      </div>
    </div>
  );
};

export default Profile;
