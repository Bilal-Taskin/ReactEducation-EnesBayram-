import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllUser } from "./redux/userSlice";
import User from "./redux/User";

function UserList() {
  const dispatch = useDispatch();
  const { users } = useSelector((store) => store.user);
  useEffect(() => {
    dispatch(getAllUser());
  }, []);
  return (
    <div>
      {users && users.map((user) => <User key={user.id} user={user} />)}
    </div>
  );
}

export default UserList;
