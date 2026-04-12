import React, { useContext } from "react";
import UserContext from "../Context/UserContext";

function Profile() {
  const { user } = useContext(UserContext);

  if (!user || !user.username?.trim()) {
    return <div className="text-3xl text-center">Please login</div>;
  }

  return (
    <div className="text-center text-3xl">
      Welcome {user.username}
    </div>
  );
}

export default Profile;