import { useState } from "react";
import axios from "axios";

import "./App.css";
import { useEffect } from "react";

//bu programın çalışması için aynı anda json.server ve react ayakta olmalı. Çünkü verilerimiz json.server tarafından izlenen data.json dosyasından çekiliyor

const BASE_URL = "http://localhost:3005";

function App() {
  const getAllUsers = async () => {
    const response = await axios.get(BASE_URL + "/users");
    console.log(response.data);
  };

  const getUserById = async (userId) => {
    const response = await axios.get(BASE_URL + "/users" + "/" + userId);
    console.log(response.data);
  };

  const createUSer = async (newUser) => {
    const response = await axios.post(`${BASE_URL}/users`, newUser);
    console.log("response", response.data);
  };

  const updateUser = async (userId, updatedUser) => {
    await axios.put(`${BASE_URL}/users/${userId}`, updatedUser);
  };

  const deleteUSerById = async (userid) => {
    const deleteduser = await axios.delete(`${BASE_URL}/users/${userid}`);
    console.log(deleteduser.data.username);
  };

  const newUser = {
    username: "Ahmet",
    password: "xyz",
  };

  useEffect(() => {
    //getUserById(1);
    //createUSer(newUser);
    // updateUser("-fBaZe0ha7k", {
    //   username: "yakup",
    //   password: "123",
    // });

    deleteUSerById("-fBaZe0ha7k");
  }, []);

  return <div></div>;
}

export default App;
