import { useEffect, useState } from "react";
import { Mail, Calendar, LogOut } from "lucide-react";
import { useNavigate } from "react-router-dom";
import API from "../api/axios";

const Profile = () => {
  const [user, setUser] = useState(null);


  const navigate = useNavigate();

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const token = localStorage.getItem("token");

        const res = await API.get("/user/profile", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setUser(res.data.user);
      } catch (error) {
        console.log(error);
      }
    };

    fetchProfile();
  }, []);

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  if (!user)
    return (
      <div className="min-h-screen flex items-center justify-center">
        Loading...
      </div>
    );

  return (
   <div className="min-h-screen bg-gray-100 flex justify-center items-center py-10">
  <div className="w-full max-w-4xl bg-white rounded-xl shadow-lg p-8">

    {/* Profile Header */}
    <div className="flex flex-col items-center text-center mb-8">
      <div className="w-20 h-20 rounded-full bg-blue-500 flex items-center justify-center text-white text-3xl font-bold mb-4">
        {user.name.charAt(0).toUpperCase()}
      </div>

      <h1 className="text-3xl font-bold">{user.name}</h1>
      <p className="text-gray-500">Student Profile</p>
    </div>

    {/* Email */}
    <div className="flex items-center justify-center gap-3 mb-4">
      <Mail size={20} />
      <span>{user.email}</span>
    </div>

    {/* Join Date */}
    <div className="flex items-center justify-center gap-3 mb-8">
      <Calendar size={20} />
      <span>
        Joined on {new Date(user.createdAt).toLocaleDateString()}
      </span>
    </div>

    {/* Saved Colleges */}
    <div className="mb-8 text-center">
      <h2 className="text-xl font-bold mb-3">Saved Colleges</h2>

      {user.savedColleges?.length > 0 ? (
        <ul className="space-y-2 max-w-md mx-auto">
          {user.savedColleges.map((college, index) => (
            <li
              key={index}
              className="bg-gray-100 p-3 rounded-lg"
            >
              {college}
            </li>
          ))}
        </ul>
      ) : (
        <p>No saved colleges.</p>
      )}
    </div>

    {/* Compared Colleges */}
    <div className="mb-8 text-center">
      <h2 className="text-xl font-bold mb-3">Compared Colleges</h2>

      {user.comparedColleges?.length > 0 ? (
        <ul className="space-y-2 max-w-md mx-auto">
          {user.comparedColleges.map((college, index) => (
            <li
              key={index}
              className="bg-gray-100 p-3 rounded-lg"
            >
              {college}
            </li>
          ))}
        </ul>
      ) : (
        <p>No compared colleges.</p>
      )}
    </div>

    {/* Logout */}
    <div className="flex justify-center">
      <button
        onClick={logout}
        className="flex items-center gap-2 bg-red-500 text-white px-5 py-3 rounded-lg hover:bg-red-600"
      >
        <LogOut size={20} />
        Logout
      </button>
    </div>

  </div>
</div>
  );
};

export default Profile;